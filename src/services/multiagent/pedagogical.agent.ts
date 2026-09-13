import { PedagogicalVerdict, AgentReasoningStep } from '@/types/agents';

export interface PedagogicalAnalysisInput {
  title?: string;
  text: string;
  declaredPrerequisites?: string[];
}

export async function evaluatePedagogicalFit(
  input: PedagogicalAnalysisInput
): Promise<PedagogicalVerdict> {
  const cot: string[] = [];
  const text = `${input.title ?? ''} ${input.text}`.toLowerCase();
  cot.push(`Analyzing pedagogical suitability for pre-college students (length: ${text.length} chars).`);

  let sri = 85; // baseline favorable score for educational content
  const prerequisites: string[] = [...(input.declaredPrerequisites ?? [])];

  // 1. Math & Theoretical Prerequisite Audit
  const hasGraduateMath =
    text.includes('tensor calculus') ||
    text.includes('differential geometry') ||
    text.includes('navier-stokes') ||
    text.includes('quantum field') ||
    text.includes('hilbert space') ||
    text.includes('lie algebra') ||
    text.includes('general relativity field equations');

  const hasAdvancedCollegeMath =
    text.includes('multivariable calculus') ||
    text.includes('partial differential') ||
    text.includes('linear algebra matrices') ||
    text.includes('state-space model');

  const hasHighSchoolMath =
    text.includes('algebra i') ||
    text.includes('algebra ii') ||
    text.includes('geometry') ||
    text.includes('trigonometry') ||
    text.includes('pre-calculus') ||
    text.includes('ap physics');

  if (hasGraduateMath) {
    sri -= 55;
    prerequisites.push('Graduate Mathematics / Differential Geometry');
    cot.push('Detected graduate-level mathematics; heavy penalty (-55) applied.');
  } else if (hasAdvancedCollegeMath) {
    sri -= 20;
    prerequisites.push('Multivariable Calculus / Linear Algebra');
    cot.push('Detected advanced collegiate mathematics; moderate penalty (-20) applied.');
  } else if (hasHighSchoolMath || prerequisites.length === 0) {
    sri += 5;
    if (prerequisites.length === 0) {
      prerequisites.push('Algebra I', 'Introductory Physical Science');
    }
    cot.push('Aligned with high-school curriculum (Algebra I / Pre-Calc); awarded +5 bonus.');
  }

  // 2. Interactive & Hands-On Scaffolding Bonus
  const isInteractive =
    text.includes('simulation') ||
    text.includes('interactive') ||
    text.includes('hands-on') ||
    text.includes('model rocket') ||
    text.includes('tarc') ||
    text.includes('openrocket') ||
    text.includes('foilsim') ||
    text.includes('step-by-step');

  if (isInteractive) {
    sri += 10;
    cot.push('Detected interactive simulation or hands-on lab scaffolding; awarded +10 bonus.');
  }

  // 3. Jargon & Density Assessment
  const isJargonDense =
    text.includes('abstract') &&
    text.includes('methodology') &&
    text.includes('bibliography') &&
    text.includes('et al.');

  if (isJargonDense) {
    sri -= 15;
    cot.push('Content resembles dense research paper prose; deducted -15 points.');
  }

  // Bound SRI score between 0 and 100
  const finalSri = Math.max(0, Math.min(100, Math.round(sri)));

  // Determine Difficulty Tier
  let difficultyTier: 'BEGINNER_GRADE_9_10' | 'INTERMEDIATE_AP_IB' | 'ADVANCED_COLLEGE_BRIDGE';
  if (finalSri >= 85) {
    difficultyTier = 'BEGINNER_GRADE_9_10';
  } else if (finalSri >= 60) {
    difficultyTier = 'INTERMEDIATE_AP_IB';
  } else {
    difficultyTier = 'ADVANCED_COLLEGE_BRIDGE';
  }

  // Discipline Mapping
  let targetDiscipline = 'Astronomy & Planetary Science';
  if (text.includes('aerodynamic') || text.includes('airfoil') || text.includes('lift') || text.includes('drag')) {
    targetDiscipline = 'Aerodynamics & Fluid Dynamics';
  } else if (text.includes('propulsion') || text.includes('rocket') || text.includes('orbit') || text.includes('thrust')) {
    targetDiscipline = 'Aerospace Engineering & Propulsion';
  } else if (text.includes('calculus') || text.includes('vector') || text.includes('algebra')) {
    targetDiscipline = 'Applied Space Mathematics';
  } else if (text.includes('physics') || text.includes('newton') || text.includes('mechanics')) {
    targetDiscipline = 'Physics & Classical Mechanics';
  }

  const isAppropriate = finalSri >= 50;
  cot.push(`Final Student Readiness Index (SRI): ${finalSri}/100 [Tier: ${difficultyTier}].`);

  const reasoningStep: AgentReasoningStep = {
    agentName: 'PedagogicalEvaluatorAgent',
    timestamp: new Date().toISOString(),
    chainOfThought: cot,
    decision: isAppropriate
      ? `APPROVED: Resource is suitable for pre-college students (SRI: ${finalSri})`
      : `FLAGGED: Resource exceeds high-school cognitive threshold (SRI: ${finalSri})`,
    confidenceScore: 0.92,
  };

  return {
    sriScore: finalSri,
    difficultyTier,
    extractedPrerequisites: Array.from(new Set(prerequisites)),
    targetDiscipline,
    isHighSchoolAppropriate: isAppropriate,
    reasoningStep,
  };
}
