import { describe, it, expect } from 'vitest';
import { REMOTE_SENSING_TOPIC } from '@/data/remote-sensing';
import { getTopicBySlug, SPACE_TOPICS } from '@/data/topics';

describe('Remote Sensing Curriculum & Data Integrity Suite', () => {
  const topic = REMOTE_SENSING_TOPIC;

  it('should have complete topic metadata', () => {
    expect(topic.slug).toBe('remote-sensing');
    expect(topic.title).toContain('Remote Sensing');
    expect(topic.subtitle).toBeTruthy();
    expect(topic.division).toBe('Science Olympiad Division C');
    expect(topic.freshmanSummary).toBeTruthy();
    expect(topic.diagram).toBeDefined();
    expect(topic.diagram.title).toBeTruthy();
    expect(topic.diagram.caption).toBeTruthy();
  });

  it('should be present in SPACE_TOPICS definitions with correct slug and category', () => {
    const spaceTopic = getTopicBySlug('remote-sensing');
    expect(spaceTopic).toBeDefined();
    expect(spaceTopic?.slug).toBe('remote-sensing');
    expect(spaceTopic?.categoryFilter).toBe('Remote Sensing & Earth Science');
    expect(spaceTopic?.iconName).toBe('Satellite');
    expect(spaceTopic?.subtopics.length).toBeGreaterThanOrEqual(4);
    expect(spaceTopic?.keyFormulas.length).toBeGreaterThanOrEqual(3);
  });

  it('should have comprehensive freshman sections with layman explanations and vocabulary', () => {
    expect(topic.sections).toHaveLength(4);
    for (const section of topic.sections) {
      expect(section.id).toBeTruthy();
      expect(section.title).toBeTruthy();
      expect(section.subheading).toBeTruthy();
      expect(section.laymanExplanation.length).toBeGreaterThan(100);
      expect(section.realWorldAnalogy).toBeTruthy();
      expect(section.keyTerms.length).toBeGreaterThanOrEqual(4);
      for (const term of section.keyTerms) {
        expect(term.term).toBeTruthy();
        expect(term.definition).toBeTruthy();
      }
    }
  });

  it('should have mathematical derivations with step-by-step solutions', () => {
    const mathSections = topic.sections.filter((s) => s.mathBreakdown !== undefined);
    expect(mathSections.length).toBeGreaterThanOrEqual(2);
    for (const s of mathSections) {
      expect(s.mathBreakdown?.name).toBeTruthy();
      expect(s.mathBreakdown?.formula).toBeTruthy();
      expect(s.mathBreakdown?.variables.length).toBeGreaterThanOrEqual(2);
      expect(s.mathBreakdown?.stepByStepSolution.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('should have at least 15 interactive 3D flashcards covering physics and sensor fleets', () => {
    expect(topic.flashcards.length).toBeGreaterThanOrEqual(15);
    for (const card of topic.flashcards) {
      expect(card.id).toBeTruthy();
      expect(card.term).toBeTruthy();
      expect(card.category).toBeTruthy();
      expect(card.front).toBeTruthy();
      expect(card.back).toBeTruthy();
    }
  });

  it('should have exactly 20 multiple-choice quiz questions for the diagnostic exam', () => {
    expect(topic.quiz).toHaveLength(20);
    for (let i = 0; i < topic.quiz.length; i++) {
      const q = topic.quiz[i];
      expect(q.id).toBe(i + 1);
      expect(q.question).toBeTruthy();
      expect(q.options).toHaveLength(4);
      for (const opt of q.options) {
        expect(opt.trim().length).toBeGreaterThan(0);
      }
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThanOrEqual(3);
      expect(q.explanation.length).toBeGreaterThan(30);
    }
  });
});
