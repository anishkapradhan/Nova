export type FlashcardCategory = 'Definition' | 'Formula' | 'Concept' | 'DSO';

export interface Flashcard {
  id: string;
  term: string;
  category: FlashcardCategory;
  front: string; // The prompt/term/question
  back: string;  // Detailed explanation, answer, or formula
  example?: string;
  tip?: string;  // Memory trick or mnemonic
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number; // 0, 1, 2, or 3
  explanation: string;
}

export type DiagramType =
  | 'celestial-sphere'
  | 'kepler-orbits'
  | 'em-spectrum'
  | 'solar-interior'
  | 'hr-diagram'
  | 'star-formation'
  | 'stellar-evolution'
  | 'stellar-death'
  | 'pulsar-lighthouse'
  | 'black-hole-anatomy'
  | 'milky-way'
  | 'hubble-tuning-fork';

export interface DiagramConfig {
  type: DiagramType;
  title: string;
  caption: string;
}

export interface DeepSkyObjectInfo {
  name: string;
  designation: string;
  type: string;
  constellation: string;
  distanceLightYears: string;
  significance: string;
  observationTip?: string;
}

export interface CurriculumSection {
  id: string;
  title: string;
  subheading: string;
  laymanExplanation: string;
  realWorldAnalogy: string;
  keyTerms: {
    term: string;
    definition: string;
  }[];
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

export interface CurriculumTopic {
  slug: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  accentColor: string; // Tailwind color name like cyan, amber, purple, emerald, etc.
  freshmanSummary: string;
  readingSections: string;
  recordingUrl?: string;
  deepSkyObjects: DeepSkyObjectInfo[];
  sections: CurriculumSection[];
  diagram: DiagramConfig;
  flashcards: Flashcard[];
  quiz: QuizQuestion[]; // Exactly 20 questions
}
