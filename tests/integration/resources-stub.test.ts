import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { GET } from '@/app/api/v1/fundamentals/resources/route';

describe('GET /api/v1/fundamentals/resources', () => {
  it('should return all 9 canonical resources without filters', async () => {
    const req = new NextRequest('http://localhost:3000/api/v1/fundamentals/resources');
    const res = await GET(req);
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.data).toHaveLength(9);
  });

  it('should filter resources by category', async () => {
    const req = new NextRequest(
      'http://localhost:3000/api/v1/fundamentals/resources?category=Aerodynamics+%26+Fluid+Dynamics'
    );
    const res = await GET(req);
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.data).toHaveLength(2);
    expect(body.data.every((r: { category: string }) => r.category === 'Aerodynamics & Fluid Dynamics')).toBe(true);
  });

  it('should search resources by keyword', async () => {
    const req = new NextRequest(
      'http://localhost:3000/api/v1/fundamentals/resources?q=OpenStax'
    );
    const res = await GET(req);
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.data).toHaveLength(2);
  });
});
