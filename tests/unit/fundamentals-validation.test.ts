import { describe, it, expect } from 'vitest';
import { SubmitResourceSchema } from '@/lib/validations/fundamentals';

describe('Fundamentals Resource Validation Schemas', () => {
  const validPayload = {
    title: 'NASA Beginner Guide to Aerodynamics',
    category: 'Aerodynamics & Fluid Dynamics',
    resourceType: 'Free Online Textbook (OER)',
    targetUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/index.html',
    difficultyLevel: 'Beginner (Grades 9-10 / Algebra I)',
    summary:
      'Comprehensive introductory guide covering lift, drag, thrust, and airfoil physics for high schoolers.',
    prerequisites: ['Algebra I', 'Basic Newton Laws'],
    isFreeAffirmed: true,
    contributorHandle: 'Cadet_Orion_42',
  };

  it('should validate a complete and valid resource submission', () => {
    const result = SubmitResourceSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.title).toBe('NASA Beginner Guide to Aerodynamics');
      expect(result.data.isFreeAffirmed).toBe(true);
    }
  });

  it('should reject non-https URLs', () => {
    const invalidPayload = {
      ...validPayload,
      targetUrl: 'http://insecure-site.com/resource',
    };
    const result = SubmitResourceSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(/secure HTTPS/);
    }
  });

  it('should reject invalid categories', () => {
    const invalidPayload = {
      ...validPayload,
      category: 'Astrology & Horoscopes',
    };
    const result = SubmitResourceSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(/category/i);
    }
  });

  it('should reject submission if free affirmation is false or missing', () => {
    const invalidPayload = {
      ...validPayload,
      isFreeAffirmed: false,
    };
    const result = SubmitResourceSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
  });

  it('should reject titles shorter than 3 characters or summaries shorter than 10', () => {
    const shortTitle = { ...validPayload, title: 'Hi' };
    const shortSummary = { ...validPayload, summary: 'Too short' };

    expect(SubmitResourceSchema.safeParse(shortTitle).success).toBe(false);
    expect(SubmitResourceSchema.safeParse(shortSummary).success).toBe(false);
  });
});
