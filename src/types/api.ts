export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  metadata: {
    timestamp: string; // ISO-8601 UTC
    requestId: string;
    latencyMs: number;
  };
}

export interface NlpIngestRequest {
  rawText: string;
  intentHint?: 'STUDY_RESOURCE' | 'COMMUNITY_ESSAY' | 'SEARCH_QUERY' | undefined;
  contributorHandle?: string | undefined;
}

export interface AgentReasoningStep {
  agentName: string;
  timestamp: string;
  chainOfThought: string[];
  decision: string;
  confidenceScore: number;
}

export interface NlpIngestResponseData {
  taskId: string;
  status: 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FLAGGED_FOR_REVIEW' | 'REJECTED';
  extractedResource?: import('@/types/fundamentals').FundamentalResource;
  sriScore?: number;
  verificationTrace: AgentReasoningStep[];
  prUrl?: string;
}

