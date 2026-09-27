export type GeneticsFlashcardCategory =
  | 'Definition'
  | 'Formula'
  | 'Process'
  | 'Technique'
  | 'Disease/Example'
  | 'Concept'
  | 'Genetics Rule'
  | 'Calculation';

export interface GeneticsFlashcard {
  id: string;
  term: string;
  category: GeneticsFlashcardCategory;
  front: string; // The prompt, question, or term
  back: string;  // Detailed explanation, answer, or breakdown
  example?: string;
  tip?: string;  // Memory trick or mnemonic
}

export interface GeneticsQuizQuestion {
  id: string | number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number; // 0, 1, 2, or 3
  explanation: string;
}

export type GeneticsDiagramType =
  | 'central-dogma-flow'
  | 'cell-cycle-clock'
  | 'recombination-map'
  | 'punnett-blood-types'
  | 'pedigree-epistasis'
  | 'x-inactivation-epigenetics'
  | 'hardy-weinberg-selection'
  | 'pcr-gel-electrophoresis';

export interface GeneticsDiagramConfig {
  type: GeneticsDiagramType;
  title: string;
  caption: string;
  laymanExplanation?: string;
}

export interface GeneticsKeyTerm {
  term: string;
  definition: string;
  analogy?: string;
}

export interface GeneticsSection {
  id: string;
  title: string;
  subheading: string;
  laymanExplanation: string;
  realWorldAnalogy: string;
  keyTerms: GeneticsKeyTerm[];
  mathBreakdown?: {
    name: string;
    formula: string;
    variables: string;
    walkThrough: string;
    practiceProblem?: {
      problem: string;
      solution: string;
    };
  };
}

export interface DesignerGenesTopic {
  slug: string;
  topicNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  accentColor: string; // emerald, purple, cyan, amber, etc.
  freshmanSummary: string;
  sourceDeck: string;
  sections: GeneticsSection[];
  diagram: GeneticsDiagramConfig;
  flashcards: GeneticsFlashcard[]; // At least 15
  quiz: GeneticsQuizQuestion[];     // Exactly 20 questions
}
