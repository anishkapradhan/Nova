import { IngressVerdict, AgentReasoningStep, IngestionIntent } from '@/types/agents';

const PII_PATTERNS = {
  EMAIL: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi,
  PHONE: /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  SSN: /\b\d{3}-\d{2}-\d{4}\b/g,
};

const JAILBREAK_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /you\s+are\s+now\s+(in\s+)?(dan|developer\s+mode)/i,
  /system\s+prompt/i,
  /disregard\s+(all\s+)?safety/i,
  /bypass\s+all\s+content\s+filters/i,
  /reveal\s+your\s+internal\s+prompt/i,
];

export async function processIngress(rawText: string): Promise<IngressVerdict> {
  const cot: string[] = [];
  cot.push(`Received raw NLP text (${rawText.length} characters).`);

  // 1. Jailbreak / Injection Detection
  let isJailbreak = false;
  for (const pattern of JAILBREAK_PATTERNS) {
    if (pattern.test(rawText)) {
      isJailbreak = true;
      cot.push(`Triggered adversarial jailbreak pattern: ${pattern.toString()}`);
      break;
    }
  }

  if (isJailbreak) {
    const reasoningStep: AgentReasoningStep = {
      agentName: 'IngressClassifierAgent',
      timestamp: new Date().toISOString(),
      chainOfThought: cot,
      decision: 'REJECT: Malicious prompt injection attempt detected.',
      confidenceScore: 0.99,
    };

    return {
      intent: 'MALICIOUS_INJECTION',
      sanitizedText: '[BLOCKED_MALICIOUS_CONTENT]',
      piiDetected: false,
      piiTypesFound: [],
      isJailbreakAttempt: true,
      reasoningStep,
    };
  }

  // 2. Zero-PII Sanitization
  let sanitized = rawText;
  const piiFound: string[] = [];

  if (PII_PATTERNS.EMAIL.test(sanitized)) {
    piiFound.push('EMAIL');
    sanitized = sanitized.replace(PII_PATTERNS.EMAIL, '[REDACTED_EMAIL]');
    cot.push('Stripped student/author email address to enforce Nuclear-Active Zero-PII policy.');
  }

  if (PII_PATTERNS.PHONE.test(sanitized)) {
    piiFound.push('PHONE');
    sanitized = sanitized.replace(PII_PATTERNS.PHONE, '[REDACTED_PHONE]');
    cot.push('Stripped telephone contact number.');
  }

  if (PII_PATTERNS.SSN.test(sanitized)) {
    piiFound.push('GOVERNMENT_ID');
    sanitized = sanitized.replace(PII_PATTERNS.SSN, '[REDACTED_ID]');
    cot.push('Stripped government identification number.');
  }

  // 3. Intent Classification
  let intent: IngestionIntent = 'UNKNOWN';
  const lower = sanitized.toLowerCase();

  if (
    lower.includes('textbook') ||
    lower.includes('simulation') ||
    lower.includes('lecture') ||
    lower.includes('problem set') ||
    lower.includes('study guide') ||
    lower.includes('course') ||
    lower.includes('http') ||
    lower.includes('nasa.gov') ||
    lower.includes('openstax')
  ) {
    intent = 'STUDY_RESOURCE';
    cot.push('Classified intent as STUDY_RESOURCE based on curriculum and educational resource indicators.');
  } else if (
    lower.includes('essay') ||
    lower.includes('reflection') ||
    lower.includes('article') ||
    lower.includes('my thoughts on') ||
    lower.length > 500
  ) {
    intent = 'COMMUNITY_ESSAY';
    cot.push('Classified intent as COMMUNITY_ESSAY based on discursive, long-form content.');
  } else if (
    lower.startsWith('what is') ||
    lower.startsWith('how to') ||
    lower.includes('search') ||
    lower.length < 80
  ) {
    intent = 'SEARCH_QUERY';
    cot.push('Classified intent as SEARCH_QUERY based on concise interrogation structure.');
  }

  const reasoningStep: AgentReasoningStep = {
    agentName: 'IngressClassifierAgent',
    timestamp: new Date().toISOString(),
    chainOfThought: cot,
    decision: `CLASSIFIED: ${intent}`,
    confidenceScore: 0.94,
  };

  return {
    intent,
    sanitizedText: sanitized,
    piiDetected: piiFound.length > 0,
    piiTypesFound: piiFound,
    isJailbreakAttempt: false,
    reasoningStep,
  };
}
