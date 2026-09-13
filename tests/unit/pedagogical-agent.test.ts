import { describe, it, expect } from 'vitest';
import { evaluatePedagogicalFit } from '@/services/multiagent/pedagogical.agent';

describe('PedagogicalEvaluatorAgent', () => {
  it('should score a high school rocketry simulator guide with a high SRI (85-95)', async () => {
    const guide = {
      title: 'TARC Model Rocketry and FoilSim Aerodynamics Tutorial',
      text: 'A step-by-step hands-on interactive simulation guide for high schoolers using Algebra I to calculate rocket stability and center of pressure.',
      declaredPrerequisites: ['Algebra I'],
    };

    const result = await evaluatePedagogicalFit(guide);
    expect(result.sriScore).toBeGreaterThanOrEqual(85);
    expect(result.sriScore).toBeLessThanOrEqual(100);
    expect(result.difficultyTier).toBe('BEGINNER_GRADE_9_10');
    expect(result.isHighSchoolAppropriate).toBe(true);
    expect(result.extractedPrerequisites).toContain('Algebra I');
    expect(result.reasoningStep.decision).toMatch(/APPROVED/);
  });

  it('should score a graduate-level theoretical paper with a low SRI (< 45)', async () => {
    const graduatePaper = {
      title: 'General Relativity and Navier-Stokes Formulations in Curved Space',
      text: 'Abstract: We present an analysis using tensor calculus, differential geometry, and Lie algebra to solve non-linear Navier-Stokes equations et al.',
    };

    const result = await evaluatePedagogicalFit(graduatePaper);
    expect(result.sriScore).toBeLessThan(45);
    expect(result.difficultyTier).toBe('ADVANCED_COLLEGE_BRIDGE');
    expect(result.isHighSchoolAppropriate).toBe(false);
    expect(result.reasoningStep.decision).toMatch(/FLAGGED/);
  });

  it('should generate a detailed Chain-of-Thought (CoT) reasoning log', async () => {
    const result = await evaluatePedagogicalFit({
      title: 'OpenStax Astronomy 2e',
      text: 'Introductory planetary science covering Keplerian orbits and solar system astronomy.',
    });

    expect(result.reasoningStep.agentName).toBe('PedagogicalEvaluatorAgent');
    expect(result.reasoningStep.chainOfThought.length).toBeGreaterThan(2);
    expect(result.sriScore).toBeGreaterThan(60);
  });
});
