import { LivenessVerdict, AgentReasoningStep } from '@/types/agents';

const INSTITUTIONAL_DOMAINS = [
  '.gov',
  '.edu',
  '.org',
  'nasa.gov',
  'openstax.org',
  'mit.edu',
  'esa.int',
  'openrocket.info',
  'arxiv.org',
  'jpl.nasa.gov',
];

const PAYWALL_INDICATORS = [
  'subscribe now',
  'subscription required',
  'requiring subscription',
  'subscription',
  'enter your credit card',
  'credit card',
  'start your 7-day free trial',
  'free trial',
  'sign in to continue reading',
  'purchase access',
  'paywall',
  'rent or buy',
  'subscribers only',
];

export async function verifyUrlLiveness(
  targetUrl: string,
  fetchFn: typeof fetch = fetch
): Promise<LivenessVerdict> {
  const cot: string[] = [];
  cot.push(`Evaluating URL liveness and open-access status: ${targetUrl}`);

  // 1. Protocol Validation
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(targetUrl);
  } catch {
    const reasoningStep: AgentReasoningStep = {
      agentName: 'LivenessPaywallAgent',
      timestamp: new Date().toISOString(),
      chainOfThought: ['Malformed URL format provided.'],
      decision: 'REJECT: Malformed target URL.',
      confidenceScore: 0.99,
    };
    return {
      targetUrl,
      isReachable: false,
      isFreeVerified: false,
      paywallFlagsFound: [],
      isInstitutionalDomain: false,
      reasoningStep,
    };
  }

  if (parsedUrl.protocol !== 'https:') {
    cot.push('Protocol is not secure HTTPS.');
    const reasoningStep: AgentReasoningStep = {
      agentName: 'LivenessPaywallAgent',
      timestamp: new Date().toISOString(),
      chainOfThought: cot,
      decision: 'REJECT: Resource URL must use HTTPS.',
      confidenceScore: 0.99,
    };
    return {
      targetUrl,
      isReachable: false,
      isFreeVerified: false,
      paywallFlagsFound: [],
      isInstitutionalDomain: false,
      reasoningStep,
    };
  }

  // 2. Institutional Domain Validation
  const hostname = parsedUrl.hostname.toLowerCase();
  const isInstitutional = INSTITUTIONAL_DOMAINS.some(
    (domain) => hostname.endsWith(domain) || hostname.includes(domain)
  );

  if (isInstitutional) {
    cot.push(`Domain '${hostname}' recognized as verified open institutional source.`);
  } else {
    cot.push(`Domain '${hostname}' is an external third-party domain.`);
  }

  // 3. Network Probe & Paywall Inspection
  let isReachable = false;
  let isFreeVerified = true;
  let statusCode = 0;
  const paywallFlags: string[] = [];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetchFn(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'NovaAstroSpaceBot/1.0 (+https://astrospace-hub.org/bot)',
        Accept: 'text/html,application/xhtml+xml',
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);
    statusCode = res.status;

    if (res.ok) {
      isReachable = true;
      cot.push(`HTTP probe succeeded with status ${statusCode} OK.`);

      const textSample = (await res.text()).slice(0, 15000).toLowerCase();

      for (const indicator of PAYWALL_INDICATORS) {
        if (textSample.includes(indicator)) {
          paywallFlags.push(indicator);
          isFreeVerified = false;
        }
      }

      if (paywallFlags.length > 0) {
        cot.push(`FLAGGED: Paywall indicators detected in page body: [${paywallFlags.join(', ')}].`);
      } else {
        cot.push('Zero paywall markers detected. Content affirmed 100% free open educational resource.');
      }
    } else {
      isReachable = false;
      isFreeVerified = false;
      cot.push(`HTTP probe returned error status ${statusCode}. Resource may be dead or restricted.`);
    }
  } catch (err) {
    isReachable = false;
    isFreeVerified = false;
    cot.push(`Network probe connection failed: ${String(err)}`);
  }

  const decision = isReachable && isFreeVerified
    ? 'APPROVED: URL is active, reachable, and verified 100% free OER.'
    : `REJECT: Liveness check failed (Reachable: ${isReachable}, FreeVerified: ${isFreeVerified})`;

  const reasoningStep: AgentReasoningStep = {
    agentName: 'LivenessPaywallAgent',
    timestamp: new Date().toISOString(),
    chainOfThought: cot,
    decision,
    confidenceScore: 0.95,
  };

  return {
    targetUrl,
    isReachable,
    statusCode,
    isFreeVerified,
    paywallFlagsFound: paywallFlags,
    isInstitutionalDomain: isInstitutional,
    reasoningStep,
  };
}
