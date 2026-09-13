export const DISCIPLINE_CATEGORIES = [
  'Aerodynamics & Fluid Dynamics',
  'Astronomy & Planetary Science',
  'Physics & Classical Mechanics',
  'Aerospace Engineering & Propulsion',
  'Applied Space Mathematics',
] as const;

export type DisciplineCategory = (typeof DISCIPLINE_CATEGORIES)[number];

export const RESOURCE_TYPES = [
  'Free Online Textbook (OER)',
  'Interactive Simulation / Webtool',
  'Full Video Course / Lecture Series',
  'Study Guide / Cheatsheet (PDF)',
  'Guided Problem Set & Solutions',
] as const;

export type ResourceType = (typeof RESOURCE_TYPES)[number];

export const DIFFICULTY_LEVELS = [
  'Beginner (Grades 9-10 / Algebra I)',
  'Intermediate (Grades 11-12 / AP Physics & Calc)',
  'Advanced (College Bridge / Dual Enrollment)',
] as const;

export type DifficultyLevel = (typeof DIFFICULTY_LEVELS)[number];

export interface FundamentalResource {
  id: string;
  title: string;
  category: DisciplineCategory;
  resourceType: ResourceType;
  targetUrl: string;
  publisherOrSource: string;
  difficultyLevel: DifficultyLevel;
  summary: string;
  prerequisites: string[];
  highSchoolCurriculumTieIn: string;
  isFreeVerified: boolean;
  submittedByHandle: string;
  createdAt: string;
}

export interface SubmitResourceRequest {
  title: string;
  category: DisciplineCategory;
  resourceType: ResourceType;
  targetUrl: string;
  difficultyLevel: DifficultyLevel;
  summary: string;
  prerequisites: string[];
  isFreeAffirmed: boolean;
  contributorHandle?: string;
}
