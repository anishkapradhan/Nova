'use client';

import React, { useState } from 'react';
import { GeneticsQuizQuestion } from '@/types/designer-genes';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Trophy,
  ChevronRight,
  ChevronLeft,
  Award,
  ListOrdered,
} from 'lucide-react';

interface GeneticsQuizProps {
  questions: GeneticsQuizQuestion[];
  topicTitle: string;
}

export function GeneticsQuiz({ questions, topicTitle }: GeneticsQuizProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const hasAnsweredCurrent = selectedAnswers[currentIndex] !== undefined;
  const currentSelectedOption = selectedAnswers[currentIndex];

  const handleSelectOption = (optionIndex: number): void => {
    if (hasAnsweredCurrent) return; // lock answer once chosen
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleNext = (): void => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = (): void => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setShowReview(false);
  };

  // Compute final score
  const correctCount = questions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctIndex ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((correctCount / questions.length) * 100);

  // Performance tier
  const getTier = (
    pct: number
  ): { label: string; color: string; bg: string } => {
    if (pct >= 90) return { label: 'Science Olympiad Gold Medal', color: 'text-amber-400', bg: 'bg-amber-950/60 border-amber-500/40' };
    if (pct >= 80) return { label: 'State Finalist Benchmark', color: 'text-emerald-400', bg: 'bg-emerald-950/60 border-emerald-500/40' };
    if (pct >= 70) return { label: 'Regional Honors Standing', color: 'text-cyan-400', bg: 'bg-cyan-950/60 border-cyan-500/40' };
    return { label: 'Genetics Cadet in Training', color: 'text-indigo-400', bg: 'bg-indigo-950/60 border-indigo-500/40' };
  };

  const tier = getTier(percentage);

  // SCORE SUMMARY SCREEN
  if (isSubmitted && !showReview) {
    return (
      <div className="bg-[#030e20] border border-emerald-900/60 rounded-2xl p-6 sm:p-10 space-y-8 text-center max-w-2xl mx-auto shadow-2xl">
        <div className="inline-flex p-4 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto">
          <Trophy className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Assessment Completed
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {topicTitle}
          </h3>
          <p className="text-sm text-slate-300 font-mono">
            Official 20-Question Science Olympiad Diagnostic Assessment
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 font-mono block">Score</span>
            <span className="text-3xl font-extrabold text-white">
              {correctCount} / {questions.length}
            </span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 font-mono block">Accuracy</span>
            <span className="text-3xl font-extrabold text-emerald-400">
              {percentage}%
            </span>
          </div>
        </div>

        <div className={`p-4 rounded-xl border ${tier.bg} max-w-md mx-auto`}>
          <div className="flex items-center justify-center gap-2">
            <Award className={`w-5 h-5 ${tier.color}`} />
            <span className={`font-bold font-mono text-sm ${tier.color}`}>
              {tier.label}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setShowReview(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 transition font-mono text-sm"
          >
            <ListOrdered className="w-4 h-4" />
            <span>Review All 20 Questions</span>
          </button>

          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition text-sm shadow-lg shadow-emerald-900/40"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>
    );
  }

  // REVIEW ALL QUESTIONS SCREEN
  if (isSubmitted && showReview) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between bg-[#030e20] border border-emerald-900/60 p-4 rounded-xl">
          <div>
            <h3 className="text-base font-bold text-white">
              Complete Question Review ({correctCount} / {questions.length} Correct)
            </h3>
            <p className="text-xs text-slate-400 font-mono">{topicTitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowReview(false)}
              className="text-xs font-mono text-emerald-400 hover:underline"
            >
              Back to Score Card
            </button>
            <button
              onClick={handleRestart}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-mono font-medium hover:bg-emerald-500 transition"
            >
              Retake Quiz
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAns = selectedAnswers[idx];
            const isCorrect = userAns === q.correctIndex;

            return (
              <div
                key={q.id}
                className={`p-5 rounded-xl border ${
                  isCorrect
                    ? 'bg-[#031d16] border-emerald-800/60'
                    : 'bg-[#22070e] border-rose-900/60'
                } space-y-3`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                    <span className="font-mono text-xs font-bold text-slate-300">
                      Question {idx + 1}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isCorrect
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/50'
                        : 'bg-rose-950 text-rose-300 border border-rose-700/50'
                    }`}
                  >
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>

                <p className="text-sm font-semibold text-white leading-relaxed">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {q.options.map((opt, optIdx) => {
                    const isUserPick = userAns === optIdx;
                    const isRightOption = q.correctIndex === optIdx;

                    let optStyle = 'bg-slate-900/60 text-slate-400 border-slate-800';
                    if (isRightOption) {
                      optStyle = 'bg-emerald-950/80 text-emerald-200 border-emerald-500 font-bold';
                    } else if (isUserPick && !isCorrect) {
                      optStyle = 'bg-rose-950/80 text-rose-200 border-rose-500 font-bold';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {isRightOption && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        {isUserPick && !isCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                  <span className="font-bold text-emerald-400 font-mono">Explanation: </span>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ACTIVE INTERACTIVE QUIZ MODE
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Quiz Progress Header */}
      <div className="bg-[#030e20] border border-emerald-900/60 p-4 rounded-xl flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            Genetics Diagnostic Quiz
          </span>
          <h4 className="text-sm font-bold text-white">{topicTitle}</h4>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-[#031124] border border-emerald-900/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              QUESTION {currentIndex + 1} / 20
            </span>
            {hasAnsweredCurrent && (
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                  currentSelectedOption === currentQ.correctIndex
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                    : 'bg-rose-950 text-rose-300 border border-rose-500/40'
                }`}
              >
                {currentSelectedOption === currentQ.correctIndex ? '✓ Correct' : '✗ Incorrect'}
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentQ.question}
          </h3>
        </div>

        {/* 4 Multiple Choice Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, optIdx) => {
            const isSelected = currentSelectedOption === optIdx;
            const isCorrect = currentQ.correctIndex === optIdx;

            let buttonStyle =
              'bg-[#06182c] border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:bg-[#08203a]';

            if (hasAnsweredCurrent) {
              if (isCorrect) {
                buttonStyle =
                  'bg-emerald-950/80 border-emerald-500 text-emerald-100 font-semibold shadow-lg shadow-emerald-950/50';
              } else if (isSelected && !isCorrect) {
                buttonStyle =
                  'bg-rose-950/80 border-rose-500 text-rose-100 font-semibold';
              } else {
                buttonStyle = 'bg-slate-900/40 border-slate-900 text-slate-500 opacity-60';
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={hasAnsweredCurrent}
                className={`w-full p-4 rounded-xl border text-left text-sm transition-all duration-200 flex items-center justify-between gap-3 ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border border-slate-700 bg-slate-900/60 flex items-center justify-center text-xs font-mono shrink-0">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span>{option}</span>
                </div>

                {hasAnsweredCurrent && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {hasAnsweredCurrent && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Explanation Box */}
        {hasAnsweredCurrent && (
          <div className="p-4 rounded-xl bg-[#020b18] border border-emerald-900/80 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
              <HelpCircle className="w-4 h-4" />
              <span>Scientific Explanation & Rationale</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-emerald-900/40">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:hover:text-slate-300 font-mono text-xs transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!hasAnsweredCurrent}
            className="flex items-center gap-1.5 px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:hover:bg-emerald-600 text-white font-semibold font-mono text-xs transition shadow-lg shadow-emerald-950/40"
          >
            <span>{currentIndex === questions.length - 1 ? 'Finish & See Score' : 'Next Question'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
