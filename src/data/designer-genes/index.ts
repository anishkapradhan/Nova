import { DesignerGenesTopic } from '@/types/designer-genes';
import { centralDogmaTopic } from './central-dogma';
import { cellCycleTopic } from './cell-cycle';
import { mendelianProblemsTopic } from './mendelian-problems';
import { punnettSquaresTopic } from './punnett-squares';
import { pedigreesEpistasisTopic } from './pedigrees-epistasis';
import { inheritancePatternsTopic } from './inheritance-patterns';
import { populationGeneticsTopic } from './population-genetics';
import { biotechnologyTechniquesTopic } from './biotechnology-techniques';

export const DESIGNER_GENES_TOPICS: DesignerGenesTopic[] = [
  centralDogmaTopic,
  cellCycleTopic,
  mendelianProblemsTopic,
  punnettSquaresTopic,
  pedigreesEpistasisTopic,
  inheritancePatternsTopic,
  populationGeneticsTopic,
  biotechnologyTechniquesTopic,
];

export function getDesignerGenesTopicBySlug(slug: string): DesignerGenesTopic | undefined {
  return DESIGNER_GENES_TOPICS.find((t) => t.slug === slug);
}

export function getAllDesignerGenesSlugs(): string[] {
  return DESIGNER_GENES_TOPICS.map((t) => t.slug);
}
