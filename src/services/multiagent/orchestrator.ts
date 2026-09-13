import {
  AgentReasoningStep,
  NlpIngestResponseData,
  NlpIngestRequest,
} from '@/types/api';
import { FundamentalResource, DisciplineCategory } from '@/types/fundamentals';
import { processIngress } from '@/services/multiagent/ingress.agent';
import { evaluatePedagogicalFit } from '@/services/multiagent/pedagogical.agent';
import { verifyUrlLiveness } from '@/services/multiagent/liveness.agent';
import { compileResourceMarkdown } from '@/services/multiagent/compiler.agent';

export async function orchestrateMultiAgentPipeline(
  request: NlpIngestRequest,
  fetchFn?: typeof fetch
): Promise<NlpIngestResponseData> {
  const taskId = `task_${crypto.randomUUID()}`;
  const verificationTrace: AgentReasoningStep[] = [];

  // Stage 1: Ingress & Intent Classification
  const ingressResult = await processIngress(request.rawText);
  verificationTrace.push(ingressResult.reasoningStep);

  if (ingressResult.isJailbreakAttempt) {
    return {
      taskId,
      status: 'REJECTED',
      verificationTrace,
    };
  }

  // Stage 2: Pedagogical & SRI Evaluation
  const pedagogicalResult = await evaluatePedagogicalFit({
    text: ingressResult.sanitizedText,
  });
  verificationTrace.push(pedagogicalResult.reasoningStep);

  // Stage 3: URL Extraction & Liveness / Paywall Probe
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const extractedUrls = ingressResult.sanitizedText.match(urlRegex) ?? [];
  const targetUrl = extractedUrls[0] ?? 'https://openstax.org/astronomy';

  const livenessResult = await verifyUrlLiveness(targetUrl, fetchFn);
  verificationTrace.push(livenessResult.reasoningStep);

  // Determine Pipeline Status
  let status: NlpIngestResponseData['status'] = 'COMPLETED';
  if (!livenessResult.isFreeVerified || !livenessResult.isReachable) {
    status = 'FLAGGED_FOR_REVIEW';
  } else if (!pedagogicalResult.isHighSchoolAppropriate) {
    status = 'FLAGGED_FOR_REVIEW';
  }

  // Stage 4: Compiler Agent
  const firstSentence =
    ingressResult.sanitizedText.split('.')[0]?.slice(0, 80).trim() ??
    'Space Learning Guide';
  const title = firstSentence.length > 5 ? firstSentence : 'Curated Space Study Resource';

  const compilerResult = await compileResourceMarkdown({
    resource: {
      title,
      category: pedagogicalResult.targetDiscipline as DisciplineCategory,
      targetUrl: livenessResult.targetUrl,
      summary: ingressResult.sanitizedText.slice(0, 400),
      prerequisites: pedagogicalResult.extractedPrerequisites,
      isFreeVerified: livenessResult.isFreeVerified,
    },
    sriScore: pedagogicalResult.sriScore,
    contributorHandle: request.contributorHandle ?? 'Anonymous_Cadet',
  });
  verificationTrace.push(compilerResult.reasoningStep);

  const extractedResource: FundamentalResource = {
    id: `res-${compilerResult.suggestedSlug}`,
    title,
    category: pedagogicalResult.targetDiscipline as DisciplineCategory,
    resourceType: 'Free Online Textbook (OER)',
    targetUrl: livenessResult.targetUrl,
    publisherOrSource: livenessResult.isInstitutionalDomain
      ? 'Verified Institutional Source'
      : 'Community Open Source',
    difficultyLevel:
      pedagogicalResult.difficultyTier === 'BEGINNER_GRADE_9_10'
        ? 'Beginner (Grades 9-10 / Algebra I)'
        : pedagogicalResult.difficultyTier === 'INTERMEDIATE_AP_IB'
        ? 'Intermediate (Grades 11-12 / AP Physics & Calc)'
        : 'Advanced (College Bridge / Dual Enrollment)',
    summary: ingressResult.sanitizedText.slice(0, 400),
    prerequisites: pedagogicalResult.extractedPrerequisites,
    highSchoolCurriculumTieIn: 'Curated Pre-College STEM Pathway',
    isFreeVerified: livenessResult.isFreeVerified,
    submittedByHandle: request.contributorHandle ?? 'Anonymous_Cadet',
    createdAt: new Date().toISOString(),
  };

  return {
    taskId,
    status,
    extractedResource,
    sriScore: pedagogicalResult.sriScore,
    verificationTrace,
  };
}
