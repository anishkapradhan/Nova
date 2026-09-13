import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse, NlpIngestResponseData, NlpIngestRequest } from '@/types/api';
import { orchestrateMultiAgentPipeline } from '@/services/multiagent/orchestrator';

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<NlpIngestResponseData>>> {
  const requestStart = Date.now();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INVALID_JSON',
          message: 'Malformed JSON payload in request body',
        },
        metadata: {
          timestamp: new Date().toISOString(),
          requestId: crypto.randomUUID(),
          latencyMs: Math.max(0, Date.now() - requestStart),
        },
      },
      { status: 400 }
    );
  }

  const rawInput = body as Partial<NlpIngestRequest>;
  if (!rawInput || typeof rawInput.rawText !== 'string' || rawInput.rawText.trim().length === 0) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'MISSING_TEXT',
          message: 'Field "rawText" is required and must be a non-empty string',
        },
        metadata: {
          timestamp: new Date().toISOString(),
          requestId: crypto.randomUUID(),
          latencyMs: Math.max(0, Date.now() - requestStart),
        },
      },
      { status: 422 }
    );
  }

  const result = await orchestrateMultiAgentPipeline({
    rawText: rawInput.rawText,
    intentHint: rawInput.intentHint,
    contributorHandle: rawInput.contributorHandle,
  });

  const latencyMs = Math.max(0, Date.now() - requestStart);

  return NextResponse.json(
    {
      success: result.status !== 'REJECTED',
      data: result,
      metadata: {
        timestamp: new Date().toISOString(),
        requestId: crypto.randomUUID(),
        latencyMs,
      },
    },
    { status: result.status === 'REJECTED' ? 403 : 200 }
  );
}
