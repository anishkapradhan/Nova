import { CurriculumTopic } from '@/types/curriculum';
import { astronomyAndTheUniverseTopic } from './astronomy-and-the-universe';
import { gravitationAndPlanetsTopic } from './gravitation-and-planets';
import { natureOfLightTopic } from './nature-of-light';
import { ourStarTheSunTopic } from './our-star-the-sun';
import { natureOfStarsTopic } from './nature-of-stars';
import { birthOfStarsTopic } from './birth-of-stars';
import { stellarEvolutionMainSequenceAndAfterTopic } from './stellar-evolution-main-sequence-and-after';
import { stellarEvolutionDeathsOfStarsTopic } from './stellar-evolution-deaths-of-stars';
import { neutronStarsTopic } from './neutron-stars';
import { blackHolesTopic } from './black-holes';
import { ourGalaxyTopic } from './our-galaxy';
import { galaxiesTopic } from './galaxies';

export const CURRICULUM_TOPICS: CurriculumTopic[] = [
  astronomyAndTheUniverseTopic,
  gravitationAndPlanetsTopic,
  natureOfLightTopic,
  ourStarTheSunTopic,
  natureOfStarsTopic,
  birthOfStarsTopic,
  stellarEvolutionMainSequenceAndAfterTopic,
  stellarEvolutionDeathsOfStarsTopic,
  neutronStarsTopic,
  blackHolesTopic,
  ourGalaxyTopic,
  galaxiesTopic,
];

export function getAllCurriculumTopics(): CurriculumTopic[] {
  return CURRICULUM_TOPICS;
}

export function getCurriculumTopicBySlug(slug: string): CurriculumTopic | undefined {
  return CURRICULUM_TOPICS.find((t) => t.slug === slug);
}

export function getAllCurriculumSlugs(): string[] {
  return CURRICULUM_TOPICS.map((t) => t.slug);
}

export const CURRICULUM_TOPIC_SLUGS = CURRICULUM_TOPICS.map((t) => t.slug);

