export type RemoteSensingFlashcardCategory =
  | 'Definition'
  | 'Physics & EM Law'
  | 'Sensor Architecture'
  | 'Satellite Fleet'
  | 'Spectral Index'
  | 'Resolution'
  | 'Image Processing'
  | 'Calculation';

export interface RemoteSensingFlashcard {
  id: string;
  term: string;
  category: RemoteSensingFlashcardCategory;
  front: string;
  back: string;
  example?: string;
  tip?: string;
}

export interface RemoteSensingQuizQuestion {
  id: string | number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export interface RemoteSensingKeyTerm {
  term: string;
  definition: string;
  analogy?: string;
}

export interface RemoteSensingSection {
  id: string;
  title: string;
  subheading: string;
  laymanExplanation: string;
  realWorldAnalogy: string;
  keyTerms: RemoteSensingKeyTerm[];
  mathBreakdown?: {
    name: string;
    formula: string;
    variables: { symbol: string; meaning: string; units?: string }[];
    sampleProblem: string;
    stepByStepSolution: string[];
  };
}

export interface RemoteSensingDiagramConfig {
  title: string;
  caption: string;
  laymanExplanation: string;
}

export interface RemoteSensingTopic {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  division: 'Science Olympiad Division C';
  freshmanSummary: string;
  sections: RemoteSensingSection[];
  flashcards: RemoteSensingFlashcard[];
  quiz: RemoteSensingQuizQuestion[];
  diagram: RemoteSensingDiagramConfig;
}
