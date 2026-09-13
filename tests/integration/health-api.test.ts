import { describe, it, expect } from 'vitest';
import { GET } from '@/app/api/v1/health/route';

describe('GET /api/v1/health', () => {
  it('should return HTTP 200 with healthy status and metadata', async () => {
    const res = await GET();
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.data?.status).toBe('healthy');
    expect(body.data?.version).toBe('1.0.0');
    expect(body.data?.service).toBe('nova-astrospace-hub');
    expect(body.metadata).toBeDefined();
    expect(body.metadata.requestId).toBeDefined();
    expect(body.metadata.latencyMs).toBeLessThanOrEqual(50);
  });
});
