export interface AgentReasoningStep {
  agentName: string;
  timestamp: string;
  chainOfThought: string[];
  decision: string;
  confidenceScore: number;
}

export type IngestionIntent =
  | 'STUDY_RESOURCE'
  | 'COMMUNITY_ESSAY'
  | 'SEARCH_QUERY'
  | 'MALICIOUS_INJECTION'
  | 'UNKNOWN';

export interface IngressVerdict {
  intent: IngestionIntent;
  sanitizedText: string;
  piiDetected: boolean;
  piiTypesFound: string[];
  isJailbreakAttempt: boolean;
  reasoningStep: AgentReasoningStep;
}

export interface PedagogicalVerdict {
  sriScore: number;
  difficultyTier: 'BEGINNER_GRADE_9_10' | 'INTERMEDIATE_AP_IB' | 'ADVANCED_COLLEGE_BRIDGE';
  extractedPrerequisites: string[];
  targetDiscipline: string;
  isHighSchoolAppropriate: boolean;
  reasoningStep: AgentReasoningStep;
}

export interface LivenessVerdict {
  targetUrl: string;
  isReachable: boolean;
  statusCode?: number;
  isFreeVerified: boolean;
  paywallFlagsFound: string[];
  isInstitutionalDomain: boolean;
  reasoningStep: AgentReasoningStep;
}

export interface CompilerVerdict {
  markdownContent: string;
  yamlFrontmatter: Record<string, unknown>;
  suggestedSlug: string;
  gitCommitMessage: string;
  reasoningStep: AgentReasoningStep;
}
