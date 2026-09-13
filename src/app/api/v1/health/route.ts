import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';

export interface HealthData {
  status: 'healthy' | 'degraded' | 'unhealthy';
  version: string;
  uptimeSeconds: number;
  service: string;
}

const startTime = Date.now();

export async function GET(): Promise<NextResponse<ApiResponse<HealthData>>> {
  const requestStart = Date.now();
  const latencyMs = Math.max(0, Date.now() - requestStart);

  const response: ApiResponse<HealthData> = {
    success: true,
    data: {
      status: 'healthy',
      version: '1.0.0',
      uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
      service: 'nova-astrospace-hub',
    },
    metadata: {
      timestamp: new Date().toISOString(),
      requestId: crypto.randomUUID(),
      latencyMs,
    },
  };

  return NextResponse.json(response, {
    status: 200,
    headers: {
      'X-Response-Time': `${latencyMs}ms`,
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
