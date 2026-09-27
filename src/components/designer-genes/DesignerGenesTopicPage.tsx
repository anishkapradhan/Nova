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
  Layers,
  CheckCircle2,
  Dna,
  Lightbulb,
  Calculator,
  FileText,
} from 'lucide-react';
import { DesignerGenesTopic } from '@/types/designer-genes';
import { DESIGNER_GENES_TOPICS } from '@/data/designer-genes';
import { WebMDNavbar } from '@/components/layout/WebMDNavbar';
import { GeneticsFlashcardDeck } from './GeneticsFlashcardDeck';
import { GeneticsQuiz } from './GeneticsQuiz';
import { GeneticsDiagram } from './GeneticsDiagram';
import { useCadetSession } from '@/lib/session/CadetSessionContext';
import { AddResourceModal } from '@/components/fundamentals/AddResourceModal';

interface DesignerGenesTopicPageProps {
  topic: DesignerGenesTopic;
}

export function DesignerGenesTopicPage({ topic }: DesignerGenesTopicPageProps): React.JSX.Element {
  const { cadetHandle } = useCadetSession();
  const [activeTab, setActiveTab] = useState<'guide' | 'diagram' | 'flashcards' | 'quiz'>('guide');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Find previous and next topics
  const currentIdx = DESIGNER_GENES_TOPICS.findIndex((t) => t.slug === topic.slug);
  const prevTopic = currentIdx > 0 ? DESIGNER_GENES_TOPICS[currentIdx - 1] : null;
  const nextTopic =
    currentIdx < DESIGNER_GENES_TOPICS.length - 1 ? DESIGNER_GENES_TOPICS[currentIdx + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#040814] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 w-full min-w-full">
      {/* 1. WebMD Signature Navbar */}
      <WebMDNavbar
        cadetHandle={cadetHandle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAddModal={() => setIsModalOpen(true)}
      />

      {/* 2. Science Olympiad Editorial Trust Ribbon */}
      <div className="border-b border-emerald-950/80 bg-[#021018] py-2 text-xs w-full min-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-slate-400 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              Science Olympiad 2026–2027 • Designer Genes High School Freshman Study Guide
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-300/80">
            <span>20-Question Diagnostic Quiz</span>
            <span>3D Flashcards Tile Deck</span>
            <span>Source: {topic.sourceDeck}</span>
          </div>
        </div>
      </div>

      {/* 3. Main Topic Hub Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 flex-1 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-emerald-300 transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-400">Designer Genes</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-emerald-300 font-semibold">
            Topic {topic.topicNumber}: {topic.title}
          </span>
        </nav>

        {/* Hero Topic Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#06182c] via-[#031520] to-[#020b12] border border-emerald-900/60 p-6 sm:p-10 space-y-6 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/40">
              {topic.badge}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Deck: {topic.sourceDeck}</span>
            </span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {topic.title}
            </h1>
            <p className="text-base sm:text-lg text-emerald-200/90 font-medium">
              {topic.subtitle}
            </p>
          </div>

          {/* Freshman Intuition Summary Box */}
          <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
              <Dna className="w-4 h-4" />
              <span>Freshman Foundations & Everyday Intuition</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              {topic.freshmanSummary}
            </p>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-900/40">
            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs font-mono transition-all duration-200 ${
                activeTab === 'guide'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Study Guide ({topic.sections.length} Sections)</span>
            </button>

            <button
              onClick={() => setActiveTab('diagram')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs font-mono transition-all duration-200 ${
                activeTab === 'diagram'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Scientific Diagram</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs font-mono transition-all duration-200 ${
                activeTab === 'flashcards'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Learn Option (3D Flashcard Tiles)</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs font-mono transition-all duration-200 ${
                activeTab === 'quiz'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>20-Question Quiz</span>
            </button>
          </div>
        </div>

        {/* TAB 1: IN-DEPTH STUDY GUIDE */}
        {activeTab === 'guide' && (
          <div className="space-y-10">
            {/* Embedded Diagram Banner */}
            <GeneticsDiagram config={topic.diagram} />

            {/* Sections */}
            <div className="space-y-8">
              {topic.sections.map((section, sIdx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="rounded-2xl bg-[#030e20] border border-emerald-900/60 p-6 sm:p-8 space-y-6 shadow-xl"
                >
                  <div className="border-b border-emerald-900/40 pb-4 space-y-1">
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      SECTION 0{sIdx + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">{section.subheading}</p>
                  </div>

                  {/* Layman Explanation */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Fundamentals & Concept Breakdown</span>
                    </h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                      {section.laymanExplanation}
                    </p>
                  </div>

                  {/* Real World Analogy */}
                  {section.realWorldAnalogy && (
                    <div className="p-4 rounded-xl bg-[#061e2c] border border-cyan-800/40 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                        <Lightbulb className="w-4 h-4" />
                        <span>Real-World Layman Analogy</span>
                      </div>
                      <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed font-sans">
                        {section.realWorldAnalogy}
                      </p>
                    </div>
                  )}

                  {/* Key Terms Glossary */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Essential Vocabulary & Definitions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.keyTerms.map((term, tIdx) => (
                        <div
                          key={tIdx}
                          className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 hover:border-emerald-500/40 transition"
                        >
                          <span className="font-bold text-xs text-emerald-300 font-mono block">
                            {term.term}
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed font-sans">
                            {term.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mathematical / Problem Breakdown */}
                  {section.mathBreakdown && (
                    <div className="p-5 rounded-xl bg-[#041a1c] border border-teal-800/40 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-300">
                        <Calculator className="w-4 h-4" />
                        <span>Genetics Math: {section.mathBreakdown.name}</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-black/50 border border-teal-900/60 font-mono text-xs text-teal-200">
                        {section.mathBreakdown.formula}
                      </div>

                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        <span className="font-semibold text-teal-400">Step-by-step: </span>
                        {section.mathBreakdown.walkThrough}
                      </p>

                      {section.mathBreakdown.practiceProblem && (
                        <div className="pt-2 border-t border-teal-900/40 space-y-1.5 text-xs">
                          <p className="font-semibold text-teal-300 font-mono">
                            Example Problem: {section.mathBreakdown.practiceProblem.problem}
                          </p>
                          <p className="text-slate-300 bg-teal-950/60 p-2.5 rounded-lg border border-teal-800/30">
                            <span className="font-bold text-teal-400">Solution: </span>
                            {section.mathBreakdown.practiceProblem.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Prompt to Learn / Quiz */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-700/40 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">
                  Ready to test your memory and mastery?
                </h4>
                <p className="text-xs text-slate-300 font-mono">
                  Flip through the 3D flashcards or take the 20-question diagnostic quiz.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('flashcards')}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-mono font-medium transition"
                >
                  Learn Flashcards
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold transition shadow-lg shadow-emerald-950/40"
                >
                  Take 20Q Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DIAGRAM */}
        {activeTab === 'diagram' && (
          <div className="space-y-6">
            <GeneticsDiagram config={topic.diagram} />
          </div>
        )}

        {/* TAB 3: FLASHCARDS (LEARN OPTION) */}
        {activeTab === 'flashcards' && (
          <div className="space-y-6">
            <GeneticsFlashcardDeck
              flashcards={topic.flashcards}
              topicTitle={`Topic ${topic.topicNumber}: ${topic.title}`}
            />
          </div>
        )}

        {/* TAB 4: 20-QUESTION QUIZ */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <GeneticsQuiz
              questions={topic.quiz}
              topicTitle={`Topic ${topic.topicNumber}: ${topic.title}`}
            />
          </div>
        )}

        {/* Topic Footer Navigation (Prev / Next) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-emerald-900/40">
          {prevTopic ? (
            <Link
              href={`/designer-genes/${prevTopic.slug}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition text-xs font-mono group"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition" />
              <div className="text-left">
                <span className="text-[10px] text-slate-500 block">PREVIOUS TOPIC</span>
                <span>Topic {prevTopic.topicNumber}: {prevTopic.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextTopic ? (
            <Link
              href={`/designer-genes/${nextTopic.slug}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition text-xs font-mono group text-right"
            >
              <div>
                <span className="text-[10px] text-slate-500 block">NEXT TOPIC</span>
                <span>Topic {nextTopic.topicNumber}: {nextTopic.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition" />
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:text-white transition text-xs font-mono"
            >
              <span>Back to Nova AstroSpace Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </main>

      {/* Structured Footer */}
      <footer className="border-t border-emerald-900 bg-[#020a16] text-slate-400 text-xs py-10 mt-12 w-full min-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white">Nova: Designer Genes Hub • Science Olympiad 2026–2027</h4>
              <p className="text-[11px] text-slate-400">
                8-Topic High School Freshman Genetics Curriculum & Multiple Choice Diagnostic Suite
              </p>
            </div>
            <p className="font-mono text-[11px] text-emerald-400">100% Free Open Educational Resources (OER)</p>
          </div>
        </div>
      </footer>

      {/* Add Resource Modal */}
      <AddResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cadetHandle={cadetHandle}
        onResourceAdded={() => {}}
      />
    </div>
  );
}
