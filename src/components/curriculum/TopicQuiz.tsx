'use client';

import React, { useState } from 'react';
import { QuizQuestion } from '@/types/curriculum';
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

interface TopicQuizProps {
  questions: QuizQuestion[];
  topicTitle: string;
}

export function TopicQuiz({ questions, topicTitle }: TopicQuizProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const hasAnsweredCurrent = selectedAnswers[currentIndex] !== undefined;
  const currentSelectedOption = selectedAnswers[currentIndex];

  const handleSelectOption = (optionIndex: number): void => {
    if (hasAnsweredCurrent) return; // lock answer once clicked
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

  // Calculate score
  const totalCorrect = questions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const scorePercentage = Math.round((totalCorrect / questions.length) * 100);

  const getScoreBadge = (score: number): { title: string; color: string; message: string } => {
    if (score >= 18) {
      return {
        title: 'Master Astrophysicist (Tier 1)',
        color: 'text-amber-400 border-amber-500/40 bg-amber-950/60',
        message: 'Spectacular mastery! You comprehend these fundamentals with Olympic precision.',
      };
    }
    if (score >= 15) {
      return {
        title: 'Senior Flight Cadet (Tier 2)',
        color: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/60',
        message: 'Outstanding job! You have a firm grasp of the core concepts.',
      };
    }
    if (score >= 12) {
      return {
        title: 'Junior Cadet (Tier 3)',
        color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/60',
        message: 'Solid progress! Review the flashcards to lock in the key definitions.',
      };
    }
    return {
      title: 'Cadet Trainee',
      color: 'text-slate-300 border-blue-800 bg-blue-950/60',
      message: 'Keep practicing! Review the layman guide and retake the quiz to boost your score.',
    };
  };

  const badge = getScoreBadge(totalCorrect);

  return (
    <div className="bg-[#030e20] border border-blue-900 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Quiz Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-blue-900/80">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">20-Question Comprehensive Mastery Quiz</h3>
          </div>
          <p className="text-xs text-slate-400">
            Testing fundamentals, definitions, formulas, and DSOs for {topicTitle}
          </p>
        </div>

        {!isSubmitted && (
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800">
            <span>
              Question <span className="font-bold text-white">{currentIndex + 1}</span> of{' '}
              <span className="text-slate-400">{questions.length}</span>
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {!isSubmitted && (
        <div className="space-y-1.5">
          <div className="w-full h-2 rounded-full bg-blue-950 overflow-hidden border border-blue-900/80">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>Progress: {Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
            <span>Answered: {Object.keys(selectedAnswers).length} / {questions.length}</span>
          </div>
        </div>
      )}

      {/* QUIZ ACTIVE QUESTION SCREEN */}
      {!isSubmitted && currentQ && (
        <div className="space-y-6">
          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold">
              Question #{currentIndex + 1}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {currentQ.question}
            </h4>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = currentSelectedOption === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let buttonStyle =
                'bg-[#061833] hover:bg-[#0a244a] border-blue-900 text-slate-200 hover:border-cyan-500/50';

              if (hasAnsweredCurrent) {
                if (isCorrect) {
                  buttonStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-100 font-semibold shadow-md';
                } else if (isSelected && !isCorrect) {
                  buttonStyle = 'bg-rose-950/80 border-rose-500 text-rose-100 font-semibold';
                } else {
                  buttonStyle = 'bg-[#040f21] border-blue-950 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnsweredCurrent}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left text-sm transition group cursor-pointer disabled:cursor-default ${buttonStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-blue-950/80 border border-blue-800 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasAnsweredCurrent && (
                    <div className="shrink-0 ml-2">
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                      {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Educational Explanation Box */}
          {hasAnsweredCurrent && (
            <div
              className={`p-4 rounded-xl border space-y-2 text-xs transition-all duration-300 ${
                currentSelectedOption === currentQ.correctIndex
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-blue-950/70 border-cyan-500/40 text-cyan-200'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold">
                <HelpCircle className="w-4 h-4 text-cyan-300" />
                <span>
                  {currentSelectedOption === currentQ.correctIndex
                    ? '✓ Correct Analysis:'
                    : '💡 Conceptual Explanation:'}
                </span>
              </div>
              <p className="leading-relaxed text-slate-200 text-sm">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next / Previous Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-blue-900/60">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#061833] hover:bg-[#0a2347] border border-blue-800 text-xs font-semibold text-slate-300 hover:text-white transition disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {hasAnsweredCurrent ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-xs font-bold text-white shadow-lg transition"
              >
                <span>{currentIndex === questions.length - 1 ? 'View Final Results' : 'Next Question'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-[11px] text-slate-400 font-mono italic">
                Select an answer to proceed &rarr;
              </span>
            )}
          </div>
        </div>
      )}

      {/* FINAL SCORE SUMMARY DASHBOARD */}
      {isSubmitted && (
        <div className="space-y-8 text-center py-4">
          <div className="space-y-3">
            <div className="inline-flex p-4 rounded-2xl bg-blue-950/80 border border-cyan-500/40 text-amber-400 shadow-xl">
              <Award className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold">
                Quiz Complete
              </span>
              <h4 className="text-3xl sm:text-4xl font-black text-white">
                {totalCorrect} / {questions.length} Correct
              </h4>
              <p className="text-xl font-bold font-mono text-cyan-300">{scorePercentage}% Score</p>
            </div>

            {/* Achievement Badge */}
            <div
              className={`max-w-md mx-auto p-4 rounded-xl border text-xs space-y-1 ${badge.color}`}
            >
              <span className="font-bold text-sm block">{badge.title}</span>
              <p className="text-slate-300">{badge.message}</p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#061833] hover:bg-[#0a244a] border border-blue-800 text-xs font-bold text-slate-200 hover:text-white transition shadow"
            >
              <RotateCcw className="w-4 h-4 text-cyan-400" />
              <span>Retake Quiz</span>
            </button>

            <button
              onClick={() => setShowReview((prev) => !prev)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-xs font-bold text-white shadow"
            >
              <ListOrdered className="w-4 h-4" />
              <span>{showReview ? 'Hide Question Review' : 'Review All 20 Questions'}</span>
            </button>
          </div>

          {/* Question Review Drawer */}
          {showReview && (
            <div className="text-left space-y-4 pt-6 border-t border-blue-900/80 max-h-[600px] overflow-y-auto pr-2">
              <h5 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono">
                Full Question Breakdown
              </h5>

              {questions.map((q, qIdx) => {
                const userAns = selectedAnswers[qIdx];
                const isUserCorrect = userAns === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border space-y-2 text-xs ${
                      isUserCorrect
                        ? 'bg-emerald-950/20 border-emerald-900/60'
                        : 'bg-rose-950/20 border-rose-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-300">
                        #{qIdx + 1}: {q.question}
                      </span>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold ${
                          isUserCorrect
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-rose-950 text-rose-400 border border-rose-800'
                        }`}
                      >
                        {isUserCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                      </span>
                    </div>

                    <div className="text-slate-400 space-y-1 pl-2 border-l-2 border-blue-900">
                      <div>
                        Your Answer:{' '}
                        <span className={isUserCorrect ? 'text-emerald-300' : 'text-rose-300 font-semibold'}>
                          {userAns !== undefined ? q.options[userAns] : 'Not Answered'}
                        </span>
                      </div>
                      {!isUserCorrect && (
                        <div>
                          Correct Answer:{' '}
                          <span className="text-emerald-300 font-semibold">
                            {q.options[q.correctIndex]}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-400 italic bg-[#020b18]/60 p-2 rounded">
                      💡 {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
