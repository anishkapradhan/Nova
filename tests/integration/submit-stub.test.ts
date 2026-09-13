import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from '@/app/api/v1/fundamentals/submit/route';

describe('POST /api/v1/fundamentals/submit', () => {
  const validPayload = {
    title: 'NASA Beginner Guide to Aeronautics',
    category: 'Aerodynamics & Fluid Dynamics',
    resourceType: 'Free Online Textbook (OER)',
    targetUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/index.html',
    difficultyLevel: 'Beginner (Grades 9-10 / Algebra I)',
    summary:
      'Introductory aeronautics guide exploring lift, drag, and airfoil aerodynamics for high school students.',
    prerequisites: ['Algebra I'],
    isFreeAffirmed: true,
    contributorHandle: 'Cadet_Orion_42',
  };

  it('should accept a valid submission with HTTP 202 and return a taskId', async () => {
    const req = new NextRequest('http://localhost:3000/api/v1/fundamentals/submit', {
      method: 'POST',
      body: JSON.stringify(validPayload),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(202);

    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.data?.taskId).toMatch(/^task_/);
    expect(body.data?.status).toBe('PENDING_REVIEW');
    expect(body.data?.contributorHandle).toBe('Cadet_Orion_42');
  });

  it('should reject invalid payloads with HTTP 422 and validation error details', async () => {
    const invalidPayload = {
      ...validPayload,
      targetUrl: 'not-a-valid-url',
    };

    const req = new NextRequest('http://localhost:3000/api/v1/fundamentals/submit', {
      method: 'POST',
      body: JSON.stringify(invalidPayload),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(422);

    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.error?.code).toBe('VALIDATION_FAILED');
    expect(body.error?.details).toBeDefined();
  });

  it('should reject malformed JSON with HTTP 400', async () => {
    const req = new NextRequest('http://localhost:3000/api/v1/fundamentals/submit', {
      method: 'POST',
      body: '{ broken json ',
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.error?.code).toBe('INVALID_JSON');
  });
});
