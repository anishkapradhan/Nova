'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  Lightbulb,
  Calculator,
  Satellite,
  Compass,
  Trophy,
} from 'lucide-react';
import { RemoteSensingTopic } from '@/types/remote-sensing';
import { WebMDNavbar } from '@/components/layout/WebMDNavbar';
import { RemoteSensingDiagram } from './RemoteSensingDiagram';
import { RemoteSensingFlashcardDeck } from './RemoteSensingFlashcardDeck';
import { RemoteSensingQuiz } from './RemoteSensingQuiz';
import { useCadetSession } from '@/lib/session/CadetSessionContext';
import { AddResourceModal } from '@/components/fundamentals/AddResourceModal';

interface RemoteSensingPageProps {
  topic: RemoteSensingTopic;
}

export function RemoteSensingPage({ topic }: RemoteSensingPageProps): React.JSX.Element {
  const { cadetHandle } = useCadetSession();
  const [activeTab, setActiveTab] = useState<'guide' | 'diagram' | 'calculator' | 'flashcards' | 'quiz'>('guide');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive NDVI Calculator State
  const [nirVal, setNirVal] = useState<number>(0.58);
  const [redVal, setRedVal] = useState<number>(0.07);

  // Interactive Wien's Displacement Law State
  const [tempK, setTempK] = useState<number>(288); // Earth average ~288 K

  const calculatedNdvi = Number(((nirVal - redVal) / (nirVal + redVal)).toFixed(3));
  const peakWavelengthUm = Number((2898 / tempK).toFixed(2));

  return (
    <div className="min-h-screen flex flex-col bg-[#040814] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 w-full min-w-full">
      {/* 1. Signature WebMD Navbar */}
      <WebMDNavbar
        cadetHandle={cadetHandle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAddModal={() => setIsModalOpen(true)}
      />

      {/* 2. Editorial Trust Ribbon */}
      <div className="border-b border-blue-950/80 bg-[#020b18] py-2 text-xs w-full min-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-slate-400 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              {topic.division} • High School Freshman Curriculum Guide & Interactive Lab
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>NASA/USGS Landsat & ESA Copernicus Standards</span>
            <span>100% Free OER Syllabus</span>
          </div>
        </div>
      </div>

      {/* 3. Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 flex-1 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-400">Disciplines</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-cyan-300 font-semibold">{topic.title}</span>
        </nav>

        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#031525] via-[#06243f] to-[#020e1a] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 shadow-md">
                  <Satellite className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 font-mono">
                    {topic.badge}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{topic.title}</h1>
                </div>
              </div>

              <p className="text-sm font-semibold text-cyan-200/90">{topic.subtitle}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {topic.freshmanSummary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-blue-950 text-cyan-300 text-[11px] font-mono border border-blue-800">
                  4 Comprehensive Sections
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 text-[11px] font-mono border border-emerald-800/60">
                  18 3D Flashcards
                </span>
                <span className="px-2.5 py-1 rounded bg-purple-950/80 text-purple-300 text-[11px] font-mono border border-purple-800/60">
                  20-Question Exam
                </span>
                <span className="px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 text-[11px] font-mono border border-amber-800/60">
                  Interactive NDVI Lab
                </span>
              </div>
            </div>

            {/* Quick Diagnostic Card */}
            <div className="bg-[#020c16]/90 border border-cyan-800/80 p-4 rounded-xl shrink-0 space-y-2 text-center sm:text-left">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                NASA Earth Observatory
              </span>
              <p className="text-xs font-bold text-white max-w-[220px]">
                Measuring Vegetation & Wildfire Scars
              </p>
              <a
                href="https://earthobservatory.nasa.gov/features/MeasuringVegetation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold transition"
              >
                <span>NASA Guide</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-blue-900/80 pb-2 overflow-x-auto scrollbar-thin">
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'guide'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-slate-300 hover:text-white hover:bg-blue-950/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Freshman Study Guide</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('diagram')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'diagram'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-slate-300 hover:text-white hover:bg-blue-950/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. Spectral Curves Lab</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'calculator'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-slate-300 hover:text-white hover:bg-blue-950/60'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>3. NDVI & Wien’s Simulator</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'flashcards'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-slate-300 hover:text-white hover:bg-blue-950/60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>4. 3D Flashcards ({topic.flashcards.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-slate-300 hover:text-white hover:bg-blue-950/60'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>5. 20-Question Exam</span>
          </button>
        </div>

        {/* TAB 1: FRESHMAN STUDY GUIDE */}
        {activeTab === 'guide' && (
          <div className="space-y-8">
            {topic.sections.map((section, idx) => (
              <article
                key={section.id}
                className="bg-[#030e20] border border-blue-900/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Section Header */}
                <div className="space-y-1.5 pb-4 border-b border-blue-950">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <span>Section 0{idx + 1}</span>
                    <span>•</span>
                    <span>{section.subheading}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{section.title}</h2>
                </div>

                {/* Layman Explanation */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Plain-English Explanation (High School Freshman Level)
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                    {section.laymanExplanation}
                  </p>
                </div>

                {/* Real World Analogy Box */}
                {section.realWorldAnalogy && (
                  <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#07243b]/60 to-[#021320] border border-cyan-500/30 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold">
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span>Everyday Analogy:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                      &ldquo;{section.realWorldAnalogy}&rdquo;
                    </p>
                  </div>
                )}

                {/* Key Terminology Grid */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Essential Vocabulary & Core Concepts ({section.keyTerms.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.keyTerms.map((term, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3.5 rounded-xl bg-[#04142a] border border-blue-900/60 space-y-1.5"
                      >
                        <span className="text-xs font-mono font-bold text-cyan-300 block">
                          {term.term}
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">{term.definition}</p>
                        {term.analogy && (
                          <p className="text-[11px] text-cyan-400/80 italic font-mono pt-1">
                            💡 {term.analogy}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Math Breakdown Box (if present) */}
                {section.mathBreakdown && (
                  <div className="p-5 rounded-xl bg-[#021326] border border-blue-800 space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                      <Calculator className="w-4 h-4" />
                      <span>Mathematical Derivation & Problem Solving: {section.mathBreakdown.name}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/50 border border-blue-900 font-mono text-center text-sm font-bold text-cyan-300">
                      {section.mathBreakdown.formula}
                    </div>

                    <div className="space-y-2 text-xs text-slate-300">
                      <strong className="text-white block font-mono">Sample Practice Problem:</strong>
                      <p className="italic">{section.mathBreakdown.sampleProblem}</p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-blue-900/60">
                      <strong className="text-emerald-400 block font-mono">Step-by-Step Solution:</strong>
                      {section.mathBreakdown.stepByStepSolution.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-mono">•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {/* TAB 2: INTERACTIVE SPECTRAL CURVES DIAGRAM */}
        {activeTab === 'diagram' && (
          <div className="space-y-6">
            <RemoteSensingDiagram config={topic.diagram} />
          </div>
        )}

        {/* TAB 3: INTERACTIVE NDVI & WIEN SIMULATOR */}
        {activeTab === 'calculator' && (
          <div className="space-y-8">
            {/* NDVI Simulator */}
            <section className="bg-gradient-to-r from-[#031024] via-[#061e44] to-[#031024] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-blue-900">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    <Calculator className="w-4 h-4 text-cyan-400" />
                    <span>Real-Time Multispectral Vegetation Index Simulator</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Normalized Difference Vegetation Index (NDVI)
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">
                    Formula: NDVI = (NIR - Red) / (NIR + Red). Move the sliders to simulate live canopy health!
                  </p>
                </div>

                {/* Result Display */}
                <div className="bg-[#020b18] border border-cyan-500/50 px-6 py-3 rounded-xl text-center sm:text-right shrink-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block">
                    Calculated NDVI
                  </span>
                  <div className="text-3xl font-black font-mono text-cyan-300">
                    {calculatedNdvi > 0 ? `+${calculatedNdvi}` : calculatedNdvi}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400">
                    {calculatedNdvi > 0.6
                      ? '🌿 Dense Healthy Forest Canopy'
                      : calculatedNdvi > 0.3
                      ? '🌱 Moderate Vegetation / Grassland'
                      : calculatedNdvi > 0.1
                      ? '🌾 Sparse Stressed Vegetation'
                      : calculatedNdvi >= 0.0
                      ? '🏜️ Bare Soil / Sand / Concrete'
                      : '💧 Clear Open Water / Deep Ocean'}
                  </span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Near-Infrared Reflectance (NIR)</span>
                    <span className="font-mono text-emerald-400 font-bold">{(nirVal * 100).toFixed(0)}% ({nirVal})</span>
                  </div>
                  <input
                    type="range"
                    min={0.01}
                    max={0.9}
                    step={0.01}
                    value={nirVal}
                    onChange={(e) => setNirVal(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-500">
                    Spongy internal mesophyll cell scattering (high in healthy foliage, near zero in water)
                  </span>
                </div>

                <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Red Band Reflectance (Red)</span>
                    <span className="font-mono text-rose-400 font-bold">{(redVal * 100).toFixed(0)}% ({redVal})</span>
                  </div>
                  <input
                    type="range"
                    min={0.01}
                    max={0.9}
                    step={0.01}
                    value={redVal}
                    onChange={(e) => setRedVal(Number(e.target.value))}
                    className="w-full accent-rose-400 cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-500">
                    Chlorophyll pigment absorption (~5% in healthy leaves, 30%+ in bare dirt)
                  </span>
                </div>
              </div>

              {/* Preset Quick Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-blue-900/60">
                <span className="text-xs text-slate-400 font-mono">Quick Landcover Presets:</span>
                <button
                  type="button"
                  onClick={() => { setNirVal(0.65); setRedVal(0.06); }}
                  className="px-2.5 py-1 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-300 text-xs font-mono border border-emerald-800 transition cursor-pointer"
                >
                  Rainforest (+0.83)
                </button>
                <button
                  type="button"
                  onClick={() => { setNirVal(0.42); setRedVal(0.18); }}
                  className="px-2.5 py-1 rounded bg-lime-950 hover:bg-lime-900 text-lime-300 text-xs font-mono border border-lime-800 transition cursor-pointer"
                >
                  Wheat Crops (+0.40)
                </button>
                <button
                  type="button"
                  onClick={() => { setNirVal(0.32); setRedVal(0.28); }}
                  className="px-2.5 py-1 rounded bg-amber-950 hover:bg-amber-900 text-amber-300 text-xs font-mono border border-amber-800 transition cursor-pointer"
                >
                  Bare Soil (+0.07)
                </button>
                <button
                  type="button"
                  onClick={() => { setNirVal(0.01); setRedVal(0.06); }}
                  className="px-2.5 py-1 rounded bg-cyan-950 hover:bg-cyan-900 text-cyan-300 text-xs font-mono border border-cyan-800 transition cursor-pointer"
                >
                  Deep Lake (-0.71)
                </button>
              </div>
            </section>

            {/* Wien's Displacement Law Simulator */}
            <section className="bg-gradient-to-r from-[#031024] via-[#061e44] to-[#031024] border border-purple-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-blue-900">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                    <Compass className="w-4 h-4 text-purple-400" />
                    <span>Blackbody Thermal Radiation Simulator</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Wien’s Displacement Law (λ_max = 2898 / T)
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">
                    Adjust the absolute surface temperature to see where the peak radiation wavelength falls on the EM spectrum!
                  </p>
                </div>

                <div className="bg-[#020b18] border border-purple-500/50 px-6 py-3 rounded-xl text-center sm:text-right shrink-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block">
                    Peak Wavelength (λ_max)
                  </span>
                  <div className="text-3xl font-black font-mono text-purple-300">
                    {peakWavelengthUm} μm
                  </div>
                  <span className="text-[10px] font-bold text-purple-400">
                    {peakWavelengthUm < 0.4
                      ? 'Ultraviolet (UV)'
                      : peakWavelengthUm <= 0.7
                      ? 'Visible Light (Sun-like)'
                      : peakWavelengthUm <= 3.0
                      ? 'Near / Shortwave Infrared (Fire)'
                      : 'Thermal Infrared (Earth-like)'}
                  </span>
                </div>
              </div>

              <div className="space-y-3 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900 max-w-xl">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Surface Temperature (Kelvin)</span>
                  <span className="font-mono text-purple-400 font-bold">{tempK} K ({tempK - 273}°C)</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={6000}
                  step={50}
                  value={tempK}
                  onChange={(e) => setTempK(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>100 K (Deep Space/Moon Night)</span>
                  <span>288 K (Earth Avg)</span>
                  <span>1000 K (Wildfire)</span>
                  <span>5778 K (The Sun)</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 4: 3D FLASHCARDS */}
        {activeTab === 'flashcards' && (
          <div className="space-y-6">
            <RemoteSensingFlashcardDeck
              flashcards={topic.flashcards}
              topicTitle={topic.title}
            />
          </div>
        )}

        {/* TAB 5: 20-QUESTION EXAM */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <RemoteSensingQuiz
              questions={topic.quiz}
              topicTitle={topic.title}
            />
          </div>
        )}
      </main>

      {/* Modal for Resource Submission */}
      <AddResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cadetHandle={cadetHandle}
        onResourceAdded={() => {}}
      />
    </div>
  );
}
