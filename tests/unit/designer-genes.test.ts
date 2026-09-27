import { describe, it, expect } from 'vitest';
import {
  DESIGNER_GENES_TOPICS,
  getDesignerGenesTopicBySlug,
  getAllDesignerGenesSlugs,
} from '@/data/designer-genes';

describe('Designer Genes Curriculum Data Suite', () => {
  const allTopics = DESIGNER_GENES_TOPICS;
  const allSlugs = getAllDesignerGenesSlugs();

  it('should have exactly 8 Designer Genes curriculum topics matching the presentations', () => {
    expect(allTopics).toHaveLength(8);
    expect(allSlugs).toHaveLength(8);
  });

  it('should contain topic numbers 1 through 8 in sequence', () => {
    const topicNumbers = allTopics.map((t) => t.topicNumber).sort((a, b) => a - b);
    expect(topicNumbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should successfully retrieve every topic by its slug', () => {
    for (const slug of allSlugs) {
      const topic = getDesignerGenesTopicBySlug(slug);
      expect(topic).toBeDefined();
      expect(topic?.slug).toBe(slug);
    }
  });

  it('should return undefined for a non-existent slug', () => {
    expect(getDesignerGenesTopicBySlug('non-existent-topic')).toBeUndefined();
  });

  describe.each(allTopics)('Topic: $title (Topic $topicNumber)', (topic) => {
    it('should have complete metadata and source deck citation', () => {
      expect(topic.slug).toBeTruthy();
      expect(topic.topicNumber).toBeGreaterThan(0);
      expect(topic.title).toBeTruthy();
      expect(topic.subtitle).toBeTruthy();
      expect(topic.badge).toBeTruthy();
      expect(topic.sourceDeck).toBeTruthy();
      expect(topic.freshmanSummary).toBeTruthy();
      expect(topic.diagram).toBeDefined();
      expect(topic.diagram.title).toBeTruthy();
      expect(topic.diagram.caption).toBeTruthy();
    });

    it('should have comprehensive sections with freshman explanations and key terms', () => {
      expect(topic.sections.length).toBeGreaterThanOrEqual(3);
      for (const sec of topic.sections) {
        expect(sec.id).toBeTruthy();
        expect(sec.title).toBeTruthy();
        expect(sec.laymanExplanation).toBeTruthy();
        expect(sec.keyTerms.length).toBeGreaterThanOrEqual(2);
      }
    });

    it('should have at least 15 interactive 3D flashcards', () => {
      expect(topic.flashcards.length).toBeGreaterThanOrEqual(15);
      for (const card of topic.flashcards) {
        expect(card.id).toBeTruthy();
        expect(card.term).toBeTruthy();
        expect(card.category).toBeTruthy();
        expect(card.front).toBeTruthy();
        expect(card.back).toBeTruthy();
      }
    });

    it('should have exactly 20 multiple choice quiz questions with valid options and correctIndex', () => {
      expect(topic.quiz).toHaveLength(20);
      for (const q of topic.quiz) {
        expect(q.id).toBeDefined();
        expect(q.question).toBeTruthy();
        expect(q.options).toHaveLength(4);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThanOrEqual(3);
        expect(q.options[q.correctIndex]).toBeTruthy();
        expect(q.explanation).toBeTruthy();
      }
    });
  });
});
