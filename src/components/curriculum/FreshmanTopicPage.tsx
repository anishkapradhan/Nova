'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Sparkles,
  Trophy,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Layers,
  CheckCircle2,
  Telescope,
  Lightbulb,
  Calculator,
} from 'lucide-react';
import { CurriculumTopic } from '@/types/curriculum';
import { CURRICULUM_TOPICS } from '@/data/curriculum';
import { WebMDNavbar } from '@/components/layout/WebMDNavbar';
import { FlashcardDeck } from './FlashcardDeck';
import { TopicQuiz } from './TopicQuiz';
import { CurriculumDiagram } from './CurriculumDiagram';
import { useCadetSession } from '@/lib/session/CadetSessionContext';
import { AddResourceModal } from '@/components/fundamentals/AddResourceModal';

interface FreshmanTopicPageProps {
  topic: CurriculumTopic;
}

export function FreshmanTopicPage({ topic }: FreshmanTopicPageProps): React.JSX.Element {
  const { cadetHandle } = useCadetSession();
  const [activeTab, setActiveTab] = useState<'guide' | 'diagram' | 'dsos' | 'flashcards' | 'quiz'>('guide');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Find previous and next topics
  const currentIdx = CURRICULUM_TOPICS.findIndex((t) => t.slug === topic.slug);
  const prevTopic = currentIdx > 0 ? CURRICULUM_TOPICS[currentIdx - 1] : null;
  const nextTopic = currentIdx < CURRICULUM_TOPICS.length - 1 ? CURRICULUM_TOPICS[currentIdx + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#040814] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Signature WebMD Navbar */}
      <WebMDNavbar
        cadetHandle={cadetHandle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAddModal={() => setIsModalOpen(true)}
      />

      {/* 2. Editorial Trust Ribbon */}
      <div className="border-b border-blue-950/80 bg-[#020b18] py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-slate-400 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              2026–2027 Academic Schedule • High School Freshman Curriculum Guide
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>20-Question Interactive Quiz</span>
            <span>3D Flashcards Tile Deck</span>
          </div>
        </div>
      </div>

      {/* 3. Main Topic Hub Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 flex-1 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-400">Curriculum</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-cyan-300 font-semibold">Chapter {topic.chapterNumber}: {topic.title}</span>
        </nav>

        {/* Hero Header */}
        <section className="bg-gradient-to-r from-[#071d3d] via-[#092550] to-[#041228] border border-blue-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-950 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-bold">
                  {topic.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-semibold">
                  Freshman Guide Edition
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/40 text-xs font-mono">
                  {topic.readingSections}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {topic.title}
              </h1>
              <p className="text-base text-cyan-200/90 font-medium">{topic.subtitle}</p>

              <p className="text-sm text-slate-300 leading-relaxed pt-2">{topic.freshmanSummary}</p>
            </div>

            {/* Quick Stats Box */}
            <div className="bg-[#020b18]/90 border border-blue-800 p-5 rounded-2xl shrink-0 space-y-3 text-xs">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">
                Chapter Modules
              </span>
              <div className="space-y-1.5 font-mono text-slate-300">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">Core Sections:</span>
                  <span className="text-white font-bold">{topic.sections.length} Guides</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">Learn Flashcards:</span>
                  <span className="text-amber-400 font-bold">{topic.flashcards.length} Tiles</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">Mastery Quiz:</span>
                  <span className="text-emerald-400 font-bold">{topic.quiz.length} Questions</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">Target DSOs:</span>
                  <span className="text-cyan-400 font-bold">{topic.deepSkyObjects.length} Objects</span>
                </div>
              </div>

              {topic.recordingUrl && (
                <div className="pt-2 border-t border-blue-900">
                  <a
                    href={topic.recordingUrl.startsWith('http') ? topic.recordingUrl : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-cyan-300 font-semibold text-xs transition border border-cyan-500/30"
                  >
                    <span>Lecture Recording</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Interactive Sticky Tab Navigation */}
        <div className="sticky top-16 z-30 bg-[#040814]/95 backdrop-blur border-y border-blue-900/80 py-2.5">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                activeTab === 'guide'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-[#061833] text-slate-300 hover:text-white border border-blue-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Freshman Guide</span>
            </button>

            <button
              onClick={() => setActiveTab('diagram')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                activeTab === 'diagram'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-[#061833] text-slate-300 hover:text-white border border-blue-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. Visual Diagram</span>
            </button>

            {topic.deepSkyObjects.length > 0 && (
              <button
                onClick={() => setActiveTab('dsos')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                  activeTab === 'dsos'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-[#061833] text-slate-300 hover:text-white border border-blue-900'
                }`}
              >
                <Telescope className="w-3.5 h-3.5" />
                <span>3. Deep Sky Objects ({topic.deepSkyObjects.length})</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                activeTab === 'flashcards'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-[#061833] text-slate-300 hover:text-white border border-blue-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>4. Learn: Flashcard Tiles</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                activeTab === 'quiz'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-[#061833] text-slate-300 hover:text-white border border-blue-900'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-emerald-300" />
              <span>5. 20-Question Quiz</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FRESHMAN STUDY GUIDE */}
        {activeTab === 'guide' && (
          <div className="space-y-8">
            {topic.sections.map((sec, secIdx) => (
              <article
                key={sec.id}
                className="bg-[#061833]/70 border border-blue-900/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Section Header */}
                <div className="space-y-1 border-b border-blue-900/60 pb-4">
                  <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    Section {secIdx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">{sec.title}</h2>
                  <p className="text-xs text-slate-400 font-mono">{sec.subheading}</p>
                </div>

                {/* Layman Explanation */}
                <div className="space-y-2">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">
                    Core Concepts in Plain English
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {sec.laymanExplanation}
                  </p>
                </div>

                {/* Real-World Analogy Callout Box */}
                <div className="bg-gradient-to-r from-blue-950/80 via-blue-900/40 to-blue-950/80 border border-cyan-500/30 rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>Everyday Analogy (How to Picture It)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;{sec.realWorldAnalogy}&rdquo;
                  </p>
                </div>

                {/* Key Terms Grid */}
                {sec.keyTerms.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold">
                      Key Vocabulary & Definitions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sec.keyTerms.map((t) => (
                        <div
                          key={t.term}
                          className="bg-[#030e20] border border-blue-950 p-4 rounded-xl space-y-1.5"
                        >
                          <span className="text-xs font-bold text-cyan-300 block">{t.term}</span>
                          <p className="text-xs text-slate-300 leading-relaxed">{t.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Math Breakdown Box (if present) */}
                {sec.mathBreakdown && (
                  <div className="bg-[#020b18] border border-blue-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
                      <Calculator className="w-4 h-4 text-purple-400" />
                      <span>Mathematical Breakdown: {sec.mathBreakdown.name}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-950/80 border border-blue-800 text-center font-mono text-cyan-300 font-bold text-sm">
                      {sec.mathBreakdown.formula}
                    </div>

                    <p className="text-xs text-slate-400 font-mono">
                      <strong className="text-slate-300">Variables:</strong> {sec.mathBreakdown.variables}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-slate-200">How to use it:</strong> {sec.mathBreakdown.walkThrough}
                    </p>

                    {sec.mathBreakdown.practiceProblem && (
                      <div className="mt-3 p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs space-y-1">
                        <span className="font-bold text-emerald-300 block">
                          📝 Practice Problem:
                        </span>
                        <p className="text-slate-300">{sec.mathBreakdown.practiceProblem.problem}</p>
                        <p className="text-emerald-400 font-mono font-semibold pt-1">
                          &rarr; Solution: {sec.mathBreakdown.practiceProblem.solution}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}

            {/* Quick jump banner to Flashcards and Quiz */}
            <div className="bg-gradient-to-r from-blue-900/60 to-cyan-900/40 border border-blue-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Finished Reading the Guide?</h3>
                <p className="text-xs text-slate-300">
                  Test your understanding with 3D flashcards or take the 20-question mastery quiz.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setActiveTab('flashcards')}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition shadow"
                >
                  Learn with Flashcards &rarr;
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow"
                >
                  Take 20Q Quiz &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VISUAL DIAGRAM */}
        {activeTab === 'diagram' && (
          <div className="space-y-6">
            <CurriculumDiagram config={topic.diagram} />
          </div>
        )}

        {/* TAB 3: DEEP SKY OBJECTS (DSOs) */}
        {activeTab === 'dsos' && (
          <div className="space-y-6">
            <div className="border-b border-blue-900/80 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Telescope className="w-5 h-5 text-cyan-400" />
                <span>Assigned Deep Sky Objects (DSOs) for Chapter {topic.chapterNumber}</span>
              </h2>
              <p className="text-xs text-slate-400">
                Target celestial objects from the presentation schedule to observe and study
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topic.deepSkyObjects.map((dso) => (
                <div
                  key={dso.name}
                  className="bg-[#061833] border border-blue-900 hover:border-cyan-500/50 rounded-2xl p-6 space-y-4 transition shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-mono bg-blue-950 text-cyan-300 border border-blue-800 font-semibold">
                      {dso.type}
                    </span>
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      {dso.distanceLightYears}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">{dso.name}</h3>
                    <p className="text-xs font-mono text-slate-400">
                      Designation: {dso.designation} • Constellation: {dso.constellation}
                    </p>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed">{dso.significance}</p>

                  {dso.observationTip && (
                    <div className="bg-[#020b18] border border-blue-950 p-3 rounded-xl text-[11px] text-cyan-200">
                      <strong className="text-slate-300 block mb-0.5">🔭 How to observe:</strong>
                      {dso.observationTip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FLASHCARDS (LEARN MODE) */}
        {activeTab === 'flashcards' && (
          <div className="space-y-6">
            <FlashcardDeck flashcards={topic.flashcards} topicTitle={topic.title} />
          </div>
        )}

        {/* TAB 5: 20-QUESTION MASTER QUIZ */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <TopicQuiz questions={topic.quiz} topicTitle={topic.title} />
          </div>
        )}

        {/* Chapter Navigation Footer */}
        <nav aria-label="Chapter navigation" className="pt-8 border-t border-blue-900/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          {prevTopic ? (
            <Link
              href={`/topic/${prevTopic.slug}`}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#061833] hover:bg-[#0a2347] border border-blue-800 text-slate-200 hover:text-cyan-300 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Ch {prevTopic.chapterNumber} {prevTopic.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextTopic ? (
            <Link
              href={`/topic/${nextTopic.slug}`}
              className="flex items-center gap-2 p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-lg"
            >
              <span>Next: Ch {nextTopic.chapterNumber} {nextTopic.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>

      {/* Structured Footer */}
      <footer className="border-t border-blue-900 bg-[#020a16] text-slate-400 text-xs py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white">Nova: AstroSpace Hub • Presentation Schedule 2026–2027</h4>
              <p className="text-[11px] text-slate-400">
                12-Chapter High School Freshman Curriculum & Multiple Choice Assessment Suite
              </p>
            </div>
            <p className="font-mono text-[11px] text-cyan-400">100% Free Open Educational Resources (OER)</p>
          </div>
        </div>
      </footer>

      {/* Contributor modal */}
      <AddResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cadetHandle={cadetHandle}
        onResourceAdded={() => {}}
      />
    </div>
  );
}
