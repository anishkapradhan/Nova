'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RemoteSensingFlashcard } from '@/types/remote-sensing';
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  LayoutGrid,
  Square,
  Sparkles,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

interface RemoteSensingFlashcardDeckProps {
  flashcards: RemoteSensingFlashcard[];
  topicTitle: string;
}

export function RemoteSensingFlashcardDeck({
  flashcards,
  topicTitle,
}: RemoteSensingFlashcardDeckProps): React.JSX.Element {
  const [deck, setDeck] = useState<RemoteSensingFlashcard[]>(flashcards);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');
  const [masteredIds, setMasteredIds] = useState<string[]>([]);
  const [gridFlippedState, setGridFlippedState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setDeck(flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredIds([]);
    setGridFlippedState({});
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

  const toggleGridFlip = (id: string): void => {
    setGridFlippedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if (viewMode !== 'single') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, handleNext, handlePrev]);

  if (!deck.length || !currentCard) {
    return <div className="p-8 text-center text-slate-400">No flashcards available.</div>;
  }

  const isCurrentMastered = masteredIds.includes(currentCard.id);

  return (
    <div className="space-y-6">
      {/* Top Deck Control Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#041228] border border-blue-900/80">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              {topicTitle} • 3D Study Flashcards
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            {masteredIds.length} of {deck.length} terms mastered ({Math.round((masteredIds.length / deck.length) * 100)}%)
          </p>
        </div>

        {/* View Controls & Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShuffle}
            className="px-3 py-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-900 text-cyan-300 hover:text-white text-xs font-mono border border-blue-800 transition flex items-center gap-1.5 cursor-pointer"
            title="Shuffle deck"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>

          <div className="flex rounded-lg bg-blue-950 p-0.5 border border-blue-800">
            <button
              type="button"
              onClick={() => setViewMode('single')}
              className={`px-2.5 py-1 rounded text-xs transition flex items-center gap-1 cursor-pointer ${
                viewMode === 'single'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Single Card Deck"
            >
              <Square className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Deck</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-2.5 py-1 rounded text-xs transition flex items-center gap-1 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid of All Cards"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All Tiles</span>
            </button>
          </div>
        </div>
      </div>

      {/* SINGLE CARD FLIP DECK VIEW */}
      {viewMode === 'single' && (
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* 3D Flip Card Container */}
          <div
            onClick={handleFlip}
            className="w-full h-80 sm:h-96 [perspective:1000px] cursor-pointer group"
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] shadow-2xl rounded-2xl ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* FRONT OF CARD */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl bg-gradient-to-br from-[#061836] via-[#092550] to-[#041228] border-2 border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between text-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80 uppercase font-semibold">
                    {currentCard.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => toggleMastered(currentCard.id, e)}
                      className={`p-1.5 rounded-lg border transition ${
                        isCurrentMastered
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : 'bg-blue-950/60 border-blue-800 text-slate-400 hover:text-white'
                      }`}
                      title={isCurrentMastered ? 'Marked as Mastered' : 'Mark as Mastered'}
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-slate-400">
                      {currentIndex + 1} / {deck.length}
                    </span>
                  </div>
                </div>

                <div className="text-center my-auto space-y-3 px-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                    {currentCard.term}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
                    {currentCard.front}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-blue-900/60">
                  <span className="font-mono text-[11px] text-cyan-400 flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Click anywhere to reveal explanation</span>
                  </span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline">
                    Space / Enter to flip • Arrow keys to navigate
                  </span>
                </div>
              </div>

              {/* BACK OF CARD */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#021822] via-[#042838] to-[#011118] border-2 border-emerald-500/50 p-6 sm:p-8 flex flex-col justify-between text-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/80 uppercase font-semibold">
                    Explanation & Breakdown
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => toggleMastered(currentCard.id, e)}
                      className={`p-1.5 rounded-lg border transition ${
                        isCurrentMastered
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : 'bg-emerald-950/60 border-emerald-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-slate-400">
                      {currentIndex + 1} / {deck.length}
                    </span>
                  </div>
                </div>

                <div className="my-auto space-y-3 overflow-y-auto max-h-[60%] scrollbar-thin px-1">
                  <h4 className="text-sm sm:text-base font-bold text-emerald-300">
                    {currentCard.term}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                    {currentCard.back}
                  </p>
                  {currentCard.tip && (
                    <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/70 text-[11px] text-emerald-300 flex items-start gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{currentCard.tip}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-emerald-900/60">
                  <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Click to flip back</span>
                  </span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline">
                    Term #{currentIndex + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="flex-1 py-3 px-4 rounded-xl bg-[#041228] hover:bg-[#072248] border border-blue-900 text-slate-200 hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Term</span>
            </button>

            <button
              type="button"
              onClick={handleFlip}
              className="py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
              <span>Flip Card</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-3 px-4 rounded-xl bg-[#041228] hover:bg-[#072248] border border-blue-900 text-slate-200 hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow"
            >
              <span>Next Term</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ALL TILES GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deck.map((card, idx) => {
            const isFlippedInGrid = !!gridFlippedState[card.id];
            const isMastered = masteredIds.includes(card.id);

            return (
              <div
                key={card.id}
                onClick={() => toggleGridFlip(card.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[220px] ${
                  isFlippedInGrid
                    ? 'bg-[#021822] border-emerald-500/60 shadow-lg'
                    : 'bg-[#061836] border-blue-900/80 hover:border-cyan-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-blue-950">
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-800 font-bold">
                      {card.category}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => toggleMastered(card.id, e)}
                      className={`p-1 rounded ${
                        isMastered ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="pt-3 space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold block">
                      #{idx + 1} {card.term}
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {isFlippedInGrid ? card.back : card.front}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-blue-950 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400 font-mono">
                    <RotateCw className="w-3 h-3" />
                    <span>{isFlippedInGrid ? 'Answer shown' : 'Click to flip'}</span>
                  </span>
                  {card.tip && !isFlippedInGrid && (
                    <span className="text-amber-400 font-mono">Tip included</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
