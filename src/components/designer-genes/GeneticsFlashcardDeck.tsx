'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GeneticsFlashcard } from '@/types/designer-genes';
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

interface GeneticsFlashcardDeckProps {
  flashcards: GeneticsFlashcard[];
  topicTitle: string;
}

export function GeneticsFlashcardDeck({
  flashcards,
  topicTitle,
}: GeneticsFlashcardDeckProps): React.JSX.Element {
  const [deck, setDeck] = useState<GeneticsFlashcard[]>(flashcards);
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
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (viewMode !== 'single') return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, handleNext, handlePrev]);

  if (!currentCard) {
    return <div className="p-8 text-center text-slate-400 font-mono">No flashcards loaded.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Deck Controls Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#030e20] border border-emerald-900/60 p-4 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-950/70 border border-emerald-700/40 rounded-lg text-emerald-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">
              Genetics Interactive Learn Tiles
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {topicTitle} • {masteredIds.length} of {deck.length} mastered
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-300 transition"
            title="Shuffle deck"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>

          <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
            <button
              onClick={() => setViewMode('single')}
              className={`p-1.5 rounded text-xs transition ${
                viewMode === 'single'
                  ? 'bg-emerald-600 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Single Card Mode"
            >
              <Square className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded text-xs transition ${
                viewMode === 'grid'
                  ? 'bg-emerald-600 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tile Grid Mode"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* SINGLE CARD MODE */}
      {viewMode === 'single' ? (
        <div className="flex flex-col items-center space-y-6">
          {/* 3D Flip Card Container */}
          <div
            className="w-full max-w-2xl h-84 sm:h-96 cursor-pointer select-none"
            style={{ perspective: '1200px' }}
            onClick={handleFlip}
          >
            <div
              className="relative w-full h-full rounded-2xl transition-transform duration-500 ease-out shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* CARD FRONT */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#06182c] via-[#040f1f] to-[#020914] border-2 border-emerald-900/60 backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                    {currentCard.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">
                      {currentIndex + 1} / {deck.length}
                    </span>
                    <button
                      onClick={(e) => toggleMastered(currentCard.id, e)}
                      className={`p-1.5 rounded-full transition ${
                        masteredIds.includes(currentCard.id)
                          ? 'text-emerald-400 bg-emerald-950/80'
                          : 'text-slate-600 hover:text-slate-400'
                      }`}
                      title="Mark mastered"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-center my-auto space-y-3 px-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    KEY CONCEPT / QUESTION
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {currentCard.front}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono italic">
                    (Click anywhere on this tile to reveal answer)
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-4 border-t border-emerald-900/40">
                  <div className="flex items-center gap-1.5 text-emerald-400/80">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Flip Tile</span>
                  </div>
                  <span>Term: {currentCard.term}</span>
                </div>
              </div>

              {/* CARD BACK */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#04281f] via-[#021b15] to-[#01100d] border-2 border-emerald-500/60 backface-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-emerald-900/80 border border-emerald-400/40 text-emerald-200">
                    {currentCard.term}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400">
                      Answer / Scientific Solution
                    </span>
                    <button
                      onClick={(e) => toggleMastered(currentCard.id, e)}
                      className={`p-1.5 rounded-full transition ${
                        masteredIds.includes(currentCard.id)
                          ? 'text-emerald-300 bg-emerald-900'
                          : 'text-slate-600 hover:text-emerald-300'
                      }`}
                      title="Mark mastered"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="my-auto space-y-4 px-2 overflow-y-auto max-h-48 pr-1">
                  <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans">
                    {currentCard.back}
                  </p>

                  {currentCard.example && (
                    <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-xs text-emerald-200">
                      <span className="font-semibold text-emerald-400">Example: </span>
                      {currentCard.example}
                    </div>
                  )}

                  {currentCard.tip && (
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/30 text-xs text-emerald-300">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{currentCard.tip}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-emerald-400/80 font-mono pt-4 border-t border-emerald-800/40">
                  <div className="flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Click to flip back</span>
                  </div>
                  <span>{currentCard.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/60 text-slate-200 hover:text-white transition font-mono text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev Tile</span>
            </button>

            <button
              onClick={handleFlip}
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition text-sm shadow-lg shadow-emerald-900/40"
            >
              <RotateCw className="w-4 h-4" />
              <span>Flip Card</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/60 text-slate-200 hover:text-white transition font-mono text-sm"
            >
              <span>Next Tile</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>Tip: Use Left/Right keys to flick between tiles, and Up/Down/Space to flip!</span>
          </div>
        </div>
      ) : (
        /* GRID MODE: ALL TILES VISIBLE WITH FLIP ON CLICK */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deck.map((card, idx) => {
            const isFlippedGrid = !!gridFlippedState[card.id];
            const isMastered = masteredIds.includes(card.id);

            return (
              <div
                key={card.id}
                onClick={() => toggleGridFlip(card.id)}
                className="h-64 cursor-pointer select-none"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative w-full h-full rounded-xl transition-transform duration-500 ease-out shadow-lg"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlippedGrid ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-xl p-5 flex flex-col justify-between bg-[#041224] border border-emerald-900/60 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[10px]">
                        {card.category}
                      </span>
                      <span className="font-mono text-slate-400 text-[10px]">
                        #{idx + 1}
                      </span>
                    </div>

                    <div className="my-auto text-center space-y-1">
                      <h5 className="font-bold text-white text-sm line-clamp-3">
                        {card.front}
                      </h5>
                      <p className="text-[10px] text-emerald-400 font-mono">
                        (Click tile to flip)
                      </p>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono border-t border-slate-800 pt-2 flex justify-between items-center">
                      <span className="truncate">{card.term}</span>
                      <RotateCw className="w-3 h-3 text-slate-500" />
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-xl p-5 flex flex-col justify-between bg-[#03241b] border border-emerald-500/60 backface-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-emerald-900 text-emerald-200 font-mono text-[10px] font-semibold">
                        {card.term}
                      </span>
                      <button
                        onClick={(e) => toggleMastered(card.id, e)}
                        className={`p-1 rounded ${
                          isMastered ? 'text-emerald-300' : 'text-slate-600'
                        }`}
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="my-auto overflow-y-auto max-h-36 pr-1 text-xs text-slate-200 leading-relaxed font-sans">
                      {card.back}
                    </div>

                    <div className="text-[10px] text-emerald-400 font-mono border-t border-emerald-800/40 pt-2 flex justify-between items-center">
                      <span>Click to flip back</span>
                      <RotateCw className="w-3 h-3 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
