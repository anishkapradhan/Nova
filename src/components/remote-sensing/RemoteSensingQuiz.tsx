'use client';

import React, { useState } from 'react';
import { RemoteSensingQuizQuestion } from '@/types/remote-sensing';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Trophy,
  ChevronRight,
  ChevronLeft,
  ListOrdered,
  Satellite,
} from 'lucide-react';

interface RemoteSensingQuizProps {
  questions: RemoteSensingQuizQuestion[];
  topicTitle: string;
}

export function RemoteSensingQuiz({
  questions,
  topicTitle,
}: RemoteSensingQuizProps): React.JSX.Element {
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

  // Calculate score
  const correctCount = questions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const scorePercent = Math.round((correctCount / questions.length) * 100);

  if (!questions.length) {
    return <div className="p-8 text-center text-slate-400">No questions available.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Quiz Header & Progress Bar */}
      <div className="bg-[#031124] border border-blue-900/80 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
              <Satellite className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                Official Science Olympiad Diagnostic Assessment
              </span>
              <h3 className="text-lg font-bold text-white">
                {topicTitle}: 20-Question Comprehensive Mastery Exam
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span>
              Question <strong className="text-cyan-400">{currentIndex + 1}</strong> of{' '}
              {questions.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-blue-950">
          <div
            className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 h-full transition-all duration-300 rounded-full"
            style={{
              width: `${((Object.keys(selectedAnswers).length) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* QUIZ COMPLETION / RESULTS VIEW */}
      {isSubmitted && !showReview && (
        <div className="bg-[#021020] border-2 border-cyan-500/60 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl max-w-2xl mx-auto">
          <div className="inline-flex p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              Assessment Completed
            </span>
            <h3 className="text-3xl font-black text-white">
              {scorePercent >= 80 ? 'Mastery Achieved!' : scorePercent >= 60 ? 'Solid Foundation!' : 'Keep Practicing!'}
            </h3>
            <p className="text-sm text-slate-300">
              You scored <strong className="text-cyan-300">{correctCount}</strong> out of{' '}
              <strong className="text-white">{questions.length}</strong> questions correct ({scorePercent}%).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#041b36] border border-blue-900 inline-block text-left text-xs space-y-1 font-mono">
            <div className="flex justify-between gap-8 text-slate-300">
              <span>Total Questions:</span>
              <strong className="text-white">{questions.length}</strong>
            </div>
            <div className="flex justify-between gap-8 text-slate-300">
              <span>Correct Answers:</span>
              <strong className="text-emerald-400">{correctCount}</strong>
            </div>
            <div className="flex justify-between gap-8 text-slate-300">
              <span>Incorrect / Missed:</span>
              <strong className="text-rose-400">{questions.length - correctCount}</strong>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowReview(true)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <ListOrdered className="w-4 h-4" />
              <span>Review All Questions & Explanations</span>
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}

      {/* ACTIVE QUESTION CARD VIEW */}
      {!isSubmitted && (
        <div className="bg-[#030d1d] border border-blue-900/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Question #{currentIndex + 1}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {currentQ.question}
            </h4>
          </div>

          {/* Multiple Choice Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = currentSelectedOption === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;

              let btnStyle =
                'bg-[#061836] border-blue-900/80 text-slate-200 hover:bg-[#0b2450] hover:border-cyan-500/50';

              if (hasAnsweredCurrent) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 font-semibold';
                } else {
                  btnStyle = 'bg-[#040f22]/50 border-blue-950 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnsweredCurrent}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition flex items-start justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-blue-950 border border-blue-800 flex items-center justify-center text-xs font-mono font-bold shrink-0 text-cyan-300">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-snug pt-0.5">{option}</span>
                  </div>

                  {hasAnsweredCurrent && (
                    <div className="shrink-0 mt-0.5">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Feedback Explanation Drawer */}
          {hasAnsweredCurrent && (
            <div className="p-4 rounded-xl bg-[#021327] border border-cyan-500/40 text-xs sm:text-sm text-slate-200 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 font-bold text-cyan-300 font-mono text-xs">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Diagnostic Explanation:</span>
              </div>
              <p className="leading-relaxed text-slate-300 text-xs">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-blue-950">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                currentIndex === 0
                  ? 'text-slate-600 border border-slate-800 cursor-not-allowed'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!hasAnsweredCurrent}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                hasAnsweredCurrent
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg cursor-pointer'
                  : 'bg-slate-800 text-slate-500 border border-slate-800 cursor-not-allowed'
              }`}
            >
              <span>{currentIndex === questions.length - 1 ? 'Finish & Score' : 'Next Question'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* FULL REVIEW MODE */}
      {showReview && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#041228] border border-blue-900">
            <div>
              <h4 className="text-sm font-bold text-white">Full Examination Review</h4>
              <p className="text-xs text-slate-400">
                Score: {correctCount} / {questions.length} ({scorePercent}%)
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowReview(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer"
            >
              Back to Summary
            </button>
          </div>

          <div className="space-y-4">
            {questions.map((q, qIdx) => {
              const userAns = selectedAnswers[qIdx];
              const isCorrect = userAns === q.correctIndex;

              return (
                <div
                  key={qIdx}
                  className={`p-5 rounded-xl border text-xs sm:text-sm space-y-3 ${
                    isCorrect
                      ? 'bg-[#02131e] border-emerald-500/40'
                      : 'bg-[#18040a] border-rose-500/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      Q#{qIdx + 1}:
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                        isCorrect
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-rose-950 text-rose-300 border border-rose-800'
                      }`}
                    >
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <p className="font-semibold text-white">{q.question}</p>

                  <div className="space-y-1.5 pl-2 text-xs">
                    <p className="text-slate-300">
                      Your Answer:{' '}
                      <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>
                        {userAns !== undefined
                          ? `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}`
                          : 'Not Answered'}
                      </strong>
                    </p>
                    {!isCorrect && (
                      <p className="text-slate-300">
                        Correct Answer:{' '}
                        <strong className="text-emerald-400">
                          {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                        </strong>
                      </p>
                    )}
                  </div>

                  <div className="p-3 rounded-lg bg-black/40 border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed">
                    <strong className="text-cyan-400 block mb-0.5">Explanation:</strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
