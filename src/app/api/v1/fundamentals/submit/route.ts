import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';
import { SubmitResourceSchema } from '@/lib/validations/fundamentals';

export interface SubmitResourceResponseData {
  taskId: string;
  status: 'PENDING_REVIEW' | 'VERIFIED' | 'REJECTED';
  message: string;
  contributorHandle: string;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<SubmitResourceResponseData>>> {
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

  const parseResult = SubmitResourceSchema.safeParse(body);

  if (!parseResult.success) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'VALIDATION_FAILED',
          message: 'Resource payload failed schema validation constraints',
          details: parseResult.error.flatten(),
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

  const validated = parseResult.data;
  const taskId = `task_${crypto.randomUUID()}`;
  const contributorHandle = validated.contributorHandle || 'Anonymous_Cadet';

  return NextResponse.json(
    {
      success: true,
      data: {
        taskId,
        status: 'PENDING_REVIEW',
        message: 'Resource validated and queued for multi-agent pedagogical review',
        contributorHandle,
      },
      metadata: {
        timestamp: new Date().toISOString(),
        requestId: crypto.randomUUID(),
        latencyMs: Math.max(0, Date.now() - requestStart),
      },
    },
    { status: 202 }
  );
}
