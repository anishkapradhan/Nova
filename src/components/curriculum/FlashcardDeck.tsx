'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Flashcard } from '@/types/curriculum';
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  LayoutGrid,
  Square,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

interface FlashcardDeckProps {
  flashcards: Flashcard[];
  topicTitle: string;
}

export function FlashcardDeck({ flashcards, topicTitle }: FlashcardDeckProps): React.JSX.Element {
  const [deck, setDeck] = useState<Flashcard[]>(flashcards);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  useEffect(() => {
    setDeck(flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredIds([]);
  }, [flashcards]);

  const currentCard = deck[currentIndex];

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  }, [deck.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  }, [deck.length]);

  const handleFlip = (): void => {
    setIsFlipped((prev) => !prev);
  };

  const handleShuffle = (): void => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const toggleMastered = (id: string, e: React.MouseEvent): void => {
    e.stopPropagation();
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (viewMode !== 'single') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, viewMode]);

  const getCategoryBadgeClass = (category: string): string => {
    switch (category) {
      case 'Definition':
        return 'bg-blue-900/60 text-cyan-300 border-cyan-500/40';
      case 'Formula':
        return 'bg-purple-900/60 text-purple-300 border-purple-500/40';
      case 'DSO':
        return 'bg-amber-900/60 text-amber-300 border-amber-500/40';
      default:
        return 'bg-emerald-900/60 text-emerald-300 border-emerald-500/40';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Mode Toggle Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-blue-900/80">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Learn Mode: Flashcard Tiles</h3>
          </div>
          <p className="text-xs text-slate-400">
            Click any tile to flip between key terms, definitions, and formulas. Use buttons or arrow keys to flick between cards.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#061833] hover:bg-[#0a2347] border border-blue-800 text-xs font-semibold text-slate-300 hover:text-white transition"
            title="Shuffle deck"
          >
            <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Shuffle</span>
          </button>

          <div className="flex rounded-lg border border-blue-800 bg-[#061833] p-0.5">
            <button
              onClick={() => setViewMode('single')}
              className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-md transition ${
                viewMode === 'single'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Square className="w-3.5 h-3.5" />
              <span>Card Mode</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-md transition ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Tiles Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Mastery Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
        <div>
          {viewMode === 'single' ? (
            <span>
              Card <span className="text-cyan-400 font-bold">{currentIndex + 1}</span> of{' '}
              <span className="text-slate-200 font-bold">{deck.length}</span>
            </span>
          ) : (
            <span>Showing all {deck.length} flashcard tiles</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span>
            Mastered:{' '}
            <span className="text-emerald-400 font-bold">
              {masteredIds.length} / {deck.length}
            </span>
          </span>
          <div className="w-24 h-2 rounded-full bg-blue-950 overflow-hidden border border-blue-900">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300"
              style={{ width: `${(masteredIds.length / deck.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* 1. SINGLE CARD FLIP VIEW */}
      {viewMode === 'single' && currentCard && (
        <div className="flex flex-col items-center space-y-6">
          {/* Flippable 3D Flashcard Tile */}
          <div
            onClick={handleFlip}
            className="w-full max-w-2xl h-80 sm:h-88 cursor-pointer [perspective:1000px] select-none group"
            role="button"
            tabIndex={0}
            aria-label={`Flashcard: ${currentCard.term}. Click or press space to flip.`}
          >
            <div
              className={`relative w-full h-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] shadow-2xl border ${
                isFlipped
                  ? '[transform:rotateY(180deg)] border-cyan-500/60 bg-gradient-to-br from-[#061c3b] via-[#082855] to-[#04132b]'
                  : 'border-blue-800/80 bg-gradient-to-br from-[#071d3d] via-[#092550] to-[#041228] hover:border-cyan-400/60'
              }`}
            >
              {/* FRONT OF CARD */}
              <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between [backface-visibility:hidden]">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-mono border font-semibold ${getCategoryBadgeClass(
                      currentCard.category
                    )}`}
                  >
                    {currentCard.category}
                  </span>

                  <button
                    onClick={(e) => toggleMastered(currentCard.id, e)}
                    className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border transition ${
                      masteredIds.includes(currentCard.id)
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                        : 'bg-blue-950/50 text-slate-400 border-blue-900 hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{masteredIds.includes(currentCard.id) ? 'Mastered' : 'Mark Learned'}</span>
                  </button>
                </div>

                <div className="text-center space-y-4 my-auto px-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold block">
                    {topicTitle}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                    {currentCard.front}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    ✦ Click tile to reveal definition & details ✦
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-blue-900/60">
                  <span className="flex items-center gap-1">
                    <RotateCw className="w-3 h-3 text-cyan-400" /> Click to flip
                  </span>
                  <span className="font-mono text-slate-400">Press Space or Enter</span>
                </div>
              </div>

              {/* BACK OF CARD */}
              <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-mono border font-semibold ${getCategoryBadgeClass(
                      currentCard.category
                    )}`}
                  >
                    {currentCard.category} • Answer
                  </span>

                  <span className="text-xs font-mono font-bold text-cyan-300">
                    {currentCard.term}
                  </span>
                </div>

                <div className="space-y-4 my-auto overflow-y-auto max-h-56 pr-2">
                  <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                    {currentCard.back}
                  </p>

                  {currentCard.tip && (
                    <div className="bg-[#020b18]/80 border border-cyan-500/30 rounded-xl p-3 text-xs text-cyan-200">
                      <span className="font-bold text-amber-300 block mb-1">💡 Memory Tip:</span>
                      {currentCard.tip}
                    </div>
                  )}

                  {currentCard.example && (
                    <div className="bg-[#020b18]/60 border border-blue-900 rounded-xl p-3 text-xs text-slate-300">
                      <span className="font-bold text-slate-200 block mb-1">🔍 Example:</span>
                      {currentCard.example}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-blue-900/60">
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <RotateCw className="w-3 h-3" /> Click to flip back
                  </span>
                  <button
                    onClick={(e) => toggleMastered(currentCard.id, e)}
                    className={`text-xs font-semibold ${
                      masteredIds.includes(currentCard.id)
                        ? 'text-emerald-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {masteredIds.includes(currentCard.id) ? '✓ Marked Mastered' : '+ Mark Mastered'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls (Prev, Flip, Next) */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#061833] hover:bg-[#0a2347] border border-blue-800 text-sm font-semibold text-slate-200 hover:text-white transition shadow-lg"
              title="Previous card (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleFlip}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-sm font-bold text-white shadow-lg transition"
            >
              <RotateCw className="w-4 h-4" />
              <span>{isFlipped ? 'Show Front' : 'Flip Card'}</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#061833] hover:bg-[#0a2347] border border-blue-800 text-sm font-semibold text-slate-200 hover:text-white transition shadow-lg"
              title="Next card (Right Arrow)"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. ALL TILES GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deck.map((card, idx) => {
            const isMastered = masteredIds.includes(card.id);
            return (
              <GridFlashcardTile
                key={card.id}
                card={card}
                index={idx}
                isMastered={isMastered}
                onToggleMastered={(e) => toggleMastered(card.id, e)}
                getBadgeClass={getCategoryBadgeClass}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// Subcomponent for each tile in Grid View
function GridFlashcardTile({
  card,
  index,
  isMastered,
  onToggleMastered,
  getBadgeClass,
}: {
  card: Flashcard;
  index: number;
  isMastered: boolean;
  onToggleMastered: (e: React.MouseEvent) => void;
  getBadgeClass: (cat: string) => string;
}): React.JSX.Element {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div
      onClick={() => setFlipped((prev) => !prev)}
      className="h-64 cursor-pointer [perspective:1000px] select-none group"
      role="button"
      tabIndex={0}
    >
      <div
        className={`relative w-full h-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] p-5 border ${
          flipped
            ? '[transform:rotateY(180deg)] border-cyan-500/60 bg-[#061c3b]'
            : 'border-blue-900/80 bg-[#061833]/80 hover:bg-[#082042] hover:border-cyan-500/40'
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 w-full h-full p-5 flex flex-col justify-between [backface-visibility:hidden]">
          <div className="flex items-center justify-between">
            <span
              className={`text-[10px] px-2 py-0.5 rounded font-mono border font-semibold ${getBadgeClass(
                card.category
              )}`}
            >
              #{index + 1} {card.category}
            </span>
            <button
              onClick={onToggleMastered}
              className={`text-xs p-1 rounded hover:bg-blue-900/50 ${
                isMastered ? 'text-emerald-400' : 'text-slate-500'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center my-auto">
            <h5 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition line-clamp-3">
              {card.front}
            </h5>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-blue-900/50 pt-2">
            <span>{card.term}</span>
            <span className="text-cyan-400 flex items-center gap-0.5">Click to flip &rarr;</span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 w-full h-full p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-cyan-400 font-mono font-bold">{card.term}</span>
            <span className="text-[10px] text-slate-400">Answer</span>
          </div>

          <div className="my-auto overflow-y-auto max-h-36 pr-1">
            <p className="text-xs text-slate-200 leading-relaxed">{card.back}</p>
            {card.tip && (
              <p className="text-[10px] text-amber-300 mt-2 italic bg-blue-950/60 p-1.5 rounded border border-blue-900">
                💡 {card.tip}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-blue-900/50 pt-2">
            <span className="text-cyan-400">&larr; Click to front</span>
            {isMastered && <span className="text-emerald-400 font-bold">✓ Learned</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
