import { describe, it, expect } from 'vitest';
import {
  getAllCurriculumTopics,
  getCurriculumTopicBySlug,
  CURRICULUM_TOPIC_SLUGS,
} from '@/data/curriculum';

describe('Curriculum Astronomy Topics Data Suite', () => {
  const allTopics = getAllCurriculumTopics();

  it('should have exactly 12 astronomy curriculum topics from the syllabus', () => {
    expect(allTopics).toHaveLength(12);
    expect(CURRICULUM_TOPIC_SLUGS).toHaveLength(12);
  });

  it('should contain the expected chapter numbers matching the 2026-27 presentation schedule', () => {
    const chapterNumbers = allTopics.map((t) => t.chapterNumber).sort((a, b) => a - b);
    expect(chapterNumbers).toEqual([1, 4, 5, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
  });

  it('should successfully retrieve every topic by its slug', () => {
    for (const slug of CURRICULUM_TOPIC_SLUGS) {
      const topic = getCurriculumTopicBySlug(slug);
      expect(topic).toBeDefined();
      expect(topic?.slug).toBe(slug);
    }
  });

  it('should return undefined for non-existent curriculum slug', () => {
    expect(getCurriculumTopicBySlug('non-existent-topic')).toBeUndefined();
  });

  describe.each(allTopics)('Topic: $title (Ch. $chapterNumber)', (topic) => {
    it('should have complete metadata and assigned Deep Sky Objects', () => {
      expect(topic.slug).toBeTruthy();
      expect(topic.chapterNumber).toBeGreaterThan(0);
      expect(topic.title).toBeTruthy();
      expect(topic.subtitle).toBeTruthy();
      expect(topic.freshmanSummary).toBeTruthy();
      expect(topic.readingSections).toBeTruthy();
      expect(topic.deepSkyObjects.length).toBeGreaterThanOrEqual(1);

      for (const dso of topic.deepSkyObjects) {
        expect(dso.name).toBeTruthy();
        expect(dso.type).toBeTruthy();
        expect(dso.significance).toBeTruthy();
      }
    });

    it('should have structured sections with analogies and key terms', () => {
      expect(topic.sections.length).toBeGreaterThanOrEqual(2);
      for (const sec of topic.sections) {
        expect(sec.id).toBeTruthy();
        expect(sec.title).toBeTruthy();
        expect(sec.laymanExplanation).toBeTruthy();
        expect(sec.realWorldAnalogy).toBeTruthy();
        expect(sec.keyTerms.length).toBeGreaterThanOrEqual(1);
      }
    });

    it('should have a relevant diagram configuration', () => {
      expect(topic.diagram).toBeDefined();
      expect(topic.diagram.type).toBeTruthy();
      expect(topic.diagram.title).toBeTruthy();
      expect(topic.diagram.caption).toBeTruthy();
    });

    it('must have an interactive multiple choice quiz of exactly 20 questions', () => {
      expect(topic.quiz).toHaveLength(20);

      topic.quiz.forEach((q) => {
        expect(q.id).toBeDefined();
        expect(q.question.length).toBeGreaterThan(10);
        expect(q.options).toHaveLength(4);
        expect(q.options.every((opt) => opt.trim().length > 0)).toBe(true);
        expect([0, 1, 2, 3]).toContain(q.correctIndex);
        expect(q.explanation.length).toBeGreaterThan(15);
      });
    });

    it('must have a learn flashcard deck of at least 15 key term tiles', () => {
      expect(topic.flashcards.length).toBeGreaterThanOrEqual(15);

      topic.flashcards.forEach((card) => {
        expect(card.id).toBeTruthy();
        expect(card.term.trim().length).toBeGreaterThan(0);
        expect(card.front.trim().length).toBeGreaterThan(0);
        expect(card.back.trim().length).toBeGreaterThan(10);
        expect(card.category.trim().length).toBeGreaterThan(0);
      });
    });
  });
});
