'use client';

import React from 'react';
import { GeneticsDiagramConfig, GeneticsDiagramType } from '@/types/designer-genes';

interface GeneticsDiagramProps {
  config: GeneticsDiagramConfig;
}

export function GeneticsDiagram({ config }: GeneticsDiagramProps): React.JSX.Element {
  return (
    <div className="bg-[#030d1d] border border-emerald-900/60 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
      <div className="border-b border-emerald-900/40 pb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold block">
            Genetics Scientific Visualization
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white">{config.title}</h4>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono">
          High School Freshman Vector Schematic
        </span>
      </div>

      <div className="w-full flex justify-center items-center py-4 overflow-x-auto">
        {renderGeneticsSvg(config.type)}
      </div>

      <div className="space-y-2 pt-2 border-t border-emerald-900/40">
        <p className="text-xs text-slate-300 font-mono text-center max-w-3xl mx-auto leading-relaxed">
          ✦ {config.caption}
        </p>
        {config.laymanExplanation && (
          <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-800/30 text-xs text-emerald-200/90 leading-relaxed text-center max-w-3xl mx-auto">
            <span className="font-bold text-emerald-300">Freshman Intuition: </span>
            {config.laymanExplanation}
          </div>
        )}
      </div>
    </div>
  );
}

function renderGeneticsSvg(type: GeneticsDiagramType): React.JSX.Element {
  switch (type) {
    case 'central-dogma-flow':
      return (
        <svg viewBox="0 0 740 340" className="w-full max-w-3xl h-auto select-none font-sans">
          <defs>
            <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="rnaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="protGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#831843" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          {/* Nucleus boundary */}
          <rect x="20" y="20" width="370" height="300" rx="16" fill="#041527" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
          <text x="35" y="45" fill="#38bdf8" fontSize="12" fontWeight="bold">CELL NUCLEUS</text>

          {/* Cytoplasm label */}
          <rect x="420" y="20" width="300" height="300" rx="16" fill="#021020" stroke="#6366f1" strokeWidth="2" opacity="0.6" />
          <text x="435" y="45" fill="#a5b4fc" fontSize="12" fontWeight="bold">CYTOPLASM</text>

          {/* DNA box */}
          <rect x="40" y="70" width="130" height="110" rx="10" fill="url(#dnaGrad)" stroke="#34d399" strokeWidth="2" />
          <text x="105" y="98" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">DNA</text>
          <text x="105" y="118" fill="#d1fae5" fontSize="10" textAnchor="middle">Double-Stranded</text>
          <text x="105" y="134" fill="#a7f3d0" fontSize="9" textAnchor="middle">5′ → 3′ / 3′ → 5′</text>
          <text x="105" y="152" fill="#6ee7b7" fontSize="9" textAnchor="middle">A-T (2H) | G-C (3H)</text>
          <text x="105" y="168" fill="#ffffff" fontSize="8" textAnchor="middle">Master Genetic Archive</text>

          {/* Replication arrow */}
          <path d="M 60 70 C 60 40, 150 40, 150 70" fill="none" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="105" y="38" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Replication (DNA Pol III)</text>

          {/* Transcription Arrow */}
          <line x1="170" y1="125" x2="230" y2="125" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="200" y="115" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">Transcription</text>
          <text x="200" y="140" fill="#fde68a" fontSize="8" textAnchor="middle">(RNA Pol II)</text>

          {/* Pre-mRNA Box */}
          <rect x="230" y="70" width="140" height="110" rx="10" fill="#082f49" stroke="#38bdf8" strokeWidth="2" />
          <text x="300" y="95" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">Pre-mRNA</text>
          <rect x="245" y="108" width="30" height="18" fill="#0284c7" rx="3" />
          <text x="260" y="121" fill="#ffffff" fontSize="8" textAnchor="middle">Exon 1</text>
          <rect x="280" y="110" width="40" height="14" fill="#475569" rx="2" />
          <text x="300" y="121" fill="#cbd5e1" fontSize="8" textAnchor="middle">Intron</text>
          <rect x="325" y="108" width="30" height="18" fill="#0284c7" rx="3" />
          <text x="340" y="121" fill="#ffffff" fontSize="8" textAnchor="middle">Exon 2</text>
          <text x="300" y="145" fill="#bae6fd" fontSize="9" textAnchor="middle">5′ Cap & Poly-A Tail</text>
          <text x="300" y="162" fill="#7dd3fc" fontSize="8" textAnchor="middle">Spliceosome trims introns</text>

          {/* Splicing arrow downward */}
          <line x1="300" y1="180" x2="300" y2="230" stroke="#38bdf8" strokeWidth="3" />
          <text x="305" y="210" fill="#38bdf8" fontSize="9" fontWeight="bold">Splicing</text>

          {/* Mature mRNA */}
          <rect x="220" y="230" width="160" height="60" rx="10" fill="url(#rnaGrad)" stroke="#60a5fa" strokeWidth="2" />
          <text x="300" y="252" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">Mature mRNA</text>
          <text x="300" y="272" fill="#dbeafe" fontSize="9" textAnchor="middle">5′ Cap — Exon1-Exon2 — Poly-A</text>

          {/* Nuclear Pore export */}
          <path d="M 380 260 L 440 260" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 3" />
          <text x="410" y="248" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Nuclear Pore</text>

          {/* Ribosome & Translation in cytoplasm */}
          <ellipse cx="520" cy="180" rx="65" ry="45" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
          <ellipse cx="520" cy="225" rx="50" ry="30" fill="#4338ca" stroke="#a5b4fc" strokeWidth="2" />
          <text x="520" y="175" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">RIBOSOME</text>
          <text x="520" y="195" fill="#c7d2fe" fontSize="9" textAnchor="middle">60S + 40S (80S)</text>
          <text x="520" y="232" fill="#e0e7ff" fontSize="9" textAnchor="middle">A-Site • P-Site • E-Site</text>

          {/* tRNA with amino acid */}
          <rect x="500" y="100" width="40" height="35" rx="5" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
          <text x="520" y="115" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">tRNA</text>
          <text x="520" y="127" fill="#a7f3d0" fontSize="7" textAnchor="middle">Anticodon</text>
          <circle cx="520" cy="90" r="8" fill="#f43f5e" />
          <text x="520" y="93" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Met</text>

          {/* Translation Arrow to protein */}
          <line x1="585" y1="180" x2="625" y2="180" stroke="#ec4899" strokeWidth="3" />
          <text x="605" y="170" fill="#f472b6" fontSize="9" fontWeight="bold" textAnchor="middle">Translate</text>

          {/* Functional protein box */}
          <rect x="625" y="125" width="85" height="110" rx="10" fill="url(#protGrad)" stroke="#f472b6" strokeWidth="2" />
          <text x="667" y="152" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">FOLDED</text>
          <text x="667" y="170" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">PROTEIN</text>
          <circle cx="650" cy="195" r="5" fill="#fbcfe8" />
          <circle cx="665" cy="202" r="5" fill="#fbcfe8" />
          <circle cx="680" cy="195" r="5" fill="#fbcfe8" />
          <text x="667" y="224" fill="#fce7f3" fontSize="8" textAnchor="middle">Enzymes & Traits</text>
        </svg>
      );

    case 'cell-cycle-clock':
      return (
        <svg viewBox="0 0 680 380" className="w-full max-w-2xl h-auto select-none font-sans">
          {/* Main Cycle Wheel */}
          <circle cx="340" cy="190" r="140" fill="#020817" stroke="#1e293b" strokeWidth="36" />
          
          {/* G1 Arc (Cyan) */}
          <circle cx="340" cy="190" r="140" fill="none" stroke="#0ea5e9" strokeWidth="32" strokeDasharray="300 580" strokeDashoffset="0" />
          {/* S Phase Arc (Emerald) */}
          <circle cx="340" cy="190" r="140" fill="none" stroke="#10b981" strokeWidth="32" strokeDasharray="260 620" strokeDashoffset="-300" />
          {/* G2 Arc (Amber) */}
          <circle cx="340" cy="190" r="140" fill="none" stroke="#f59e0b" strokeWidth="32" strokeDasharray="180 700" strokeDashoffset="-560" />
          {/* M Phase Arc (Rose) */}
          <circle cx="340" cy="190" r="140" fill="none" stroke="#f43f5e" strokeWidth="32" strokeDasharray="140 740" strokeDashoffset="-740" />

          {/* Center Hub */}
          <circle cx="340" cy="190" r="85" fill="#041228" stroke="#334155" strokeWidth="3" />
          <text x="340" y="180" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">CELL CYCLE</text>
          <text x="340" y="200" fill="#94a3b8" fontSize="11" textAnchor="middle">Interphase (90%)</text>
          <text x="340" y="215" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">M Phase (Mitosis 10%)</text>

          {/* G1 Phase Label */}
          <text x="450" y="110" fill="#38bdf8" fontSize="13" fontWeight="bold">G1 Phase</text>
          <text x="450" y="126" fill="#bae6fd" fontSize="9">Cell Growth & Organelles</text>

          {/* G1/S Checkpoint Flag */}
          <rect x="475" y="165" width="135" height="34" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
          <text x="542" y="180" fill="#a5b4fc" fontSize="9" fontWeight="bold" textAnchor="middle">G1/S Checkpoint</text>
          <text x="542" y="193" fill="#cbd5e1" fontSize="8" textAnchor="middle">p53 / Retinoblastoma (Rb)</text>

          {/* S Phase Label */}
          <text x="430" y="300" fill="#34d399" fontSize="13" fontWeight="bold">S Phase</text>
          <text x="430" y="316" fill="#a7f3d0" fontSize="9">DNA Replication (2C → 4C)</text>

          {/* G2 Phase Label */}
          <text x="170" y="300" fill="#fbbf24" fontSize="13" fontWeight="bold">G2 Phase</text>
          <text x="170" y="316" fill="#fde68a" fontSize="9">Enzyme Prep & Check</text>

          {/* G2/M Checkpoint Flag */}
          <rect x="70" y="215" width="135" height="34" rx="6" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="137" y="230" fill="#fde68a" fontSize="9" fontWeight="bold" textAnchor="middle">G2/M Checkpoint</text>
          <text x="137" y="243" fill="#cbd5e1" fontSize="8" textAnchor="middle">MPF (Cyclin B + CDK1)</text>

          {/* M Phase Label */}
          <text x="180" y="95" fill="#fb7185" fontSize="13" fontWeight="bold">Mitosis (M)</text>
          <text x="180" y="110" fill="#fecdd3" fontSize="9">Pro, Meta, Ana, Telo</text>

          {/* Spindle Checkpoint Flag */}
          <rect x="235" y="25" width="145" height="32" rx="6" fill="#4c0519" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="307" y="40" fill="#fda4af" fontSize="9" fontWeight="bold" textAnchor="middle">Spindle M-Checkpoint</text>
          <text x="307" y="52" fill="#f1f5f9" fontSize="8" textAnchor="middle">Kinetochore bipolar tension</text>

          {/* G0 Resting State Offshoot */}
          <path d="M 450 70 C 490 40, 560 50, 580 80" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow)" />
          <rect x="570" y="80" width="85" height="36" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
          <text x="612" y="96" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">G0 Phase</text>
          <text x="612" y="110" fill="#64748b" fontSize="8" textAnchor="middle">Neurons/Quiescence</text>
        </svg>
      );

    case 'recombination-map':
      return (
        <svg viewBox="0 0 700 320" className="w-full max-w-2xl h-auto select-none font-sans">
          {/* Chromosome Linkage Map Title */}
          <text x="350" y="30" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
            Chromosome Linkage & Centimorgan (cM) Distance Mapping
          </text>
          
          {/* Sister Chromatids crossing over */}
          <g transform="translate(100, 60)">
            {/* Maternal Chromosome (Blue) */}
            <rect x="50" y="20" width="380" height="24" rx="12" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            {/* Paternal Chromosome (Red) */}
            <rect x="50" y="80" width="380" height="24" rx="12" fill="#be123c" stroke="#fb7185" strokeWidth="2" />

            {/* Gene Locus A */}
            <line x1="90" y1="10" x2="90" y2="120" stroke="#facc15" strokeWidth="3" />
            <circle cx="90" cy="32" r="7" fill="#facc15" />
            <text x="90" y="36" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">A</text>
            <circle cx="90" cy="92" r="7" fill="#facc15" />
            <text x="90" y="96" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">a</text>
            <text x="90" y="5" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle">Locus A</text>

            {/* Gene Locus B */}
            <line x1="250" y1="10" x2="250" y2="120" stroke="#22c55e" strokeWidth="3" />
            <circle cx="250" cy="32" r="7" fill="#22c55e" />
            <text x="250" y="36" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">B</text>
            <circle cx="250" cy="92" r="7" fill="#22c55e" />
            <text x="250" y="96" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">b</text>
            <text x="250" y="5" fill="#22c55e" fontSize="11" fontWeight="bold" textAnchor="middle">Locus B</text>

            {/* Gene Locus C */}
            <line x1="380" y1="10" x2="380" y2="120" stroke="#c084fc" strokeWidth="3" />
            <circle cx="380" cy="32" r="7" fill="#c084fc" />
            <text x="380" y="36" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">C</text>
            <circle cx="380" cy="92" r="7" fill="#c084fc" />
            <text x="380" y="96" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">c</text>
            <text x="380" y="5" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle">Locus C</text>

            {/* Measurement bracket A-B: 12 cM */}
            <line x1="90" y1="135" x2="250" y2="135" stroke="#38bdf8" strokeWidth="2" markerStart="url(#tick)" markerEnd="url(#tick)" />
            <text x="170" y="152" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">12 cM (12% Recombination)</text>

            {/* Measurement bracket B-C: 5 cM */}
            <line x1="250" y1="135" x2="380" y2="135" stroke="#a78bfa" strokeWidth="2" />
            <text x="315" y="152" fill="#a78bfa" fontSize="11" fontWeight="bold" textAnchor="middle">5 cM (5% Recomb)</text>

            {/* Measurement bracket A-C total: 17 cM */}
            <line x1="90" y1="175" x2="380" y2="175" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
            <text x="235" y="192" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">Total Map Distance: 17 cM (17% Recombination)</text>
          </g>

          {/* Gamete Outcomes */}
          <rect x="50" y="270" width="280" height="35" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="190" y="292" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Parental Gametes: AB and ab (83%)</text>

          <rect x="370" y="270" width="280" height="35" rx="6" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="510" y="292" fill="#f472b6" fontSize="10" fontWeight="bold" textAnchor="middle">Recombinant Gametes: Ab and aB (17%)</text>
        </svg>
      );

    case 'punnett-blood-types':
      return (
        <svg viewBox="0 0 680 340" className="w-full max-w-2xl h-auto select-none font-sans">
          <text x="340" y="25" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
            ABO Blood Group System & 2x2 Codominance Punnett Square
          </text>
          
          {/* Punnett Square Mother I^A i x Father I^B i */}
          <g transform="translate(60, 50)">
            <text x="90" y="20" fill="#a5b4fc" fontSize="12" fontWeight="bold">Father Alleles (I^B, i) →</text>
            <text x="20" y="90" fill="#f472b6" fontSize="12" fontWeight="bold" transform="rotate(-90 20 90)">Mother (I^A, i) ↓</text>

            {/* Father Headers */}
            <text x="140" y="45" fill="#60a5fa" fontSize="13" fontWeight="bold" textAnchor="middle">I^B</text>
            <text x="230" y="45" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">i (O)</text>

            {/* Mother Headers */}
            <text x="75" y="95" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">I^A</text>
            <text x="75" y="165" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">i (O)</text>

            {/* Box 1: I^A I^B (Type AB) */}
            <rect x="95" y="60" width="90" height="60" fill="#312e81" stroke="#818cf8" strokeWidth="2" rx="6" />
            <text x="140" y="85" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">I^A I^B</text>
            <text x="140" y="105" fill="#c7d2fe" fontSize="10" textAnchor="middle">Type AB (25%)</text>

            {/* Box 2: I^A i (Type A) */}
            <rect x="185" y="60" width="90" height="60" fill="#064e3b" stroke="#34d399" strokeWidth="2" rx="6" />
            <text x="230" y="85" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">I^A i</text>
            <text x="230" y="105" fill="#a7f3d0" fontSize="10" textAnchor="middle">Type A (25%)</text>

            {/* Box 3: I^B i (Type B) */}
            <rect x="95" y="125" width="90" height="60" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" rx="6" />
            <text x="140" y="150" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">I^B i</text>
            <text x="140" y="170" fill="#bfdbfe" fontSize="10" textAnchor="middle">Type B (25%)</text>

            {/* Box 4: i i (Type O) */}
            <rect x="185" y="125" width="90" height="60" fill="#3f3f46" stroke="#a1a1aa" strokeWidth="2" rx="6" />
            <text x="230" y="150" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">i i</text>
            <text x="230" y="170" fill="#e4e4e7" fontSize="10" textAnchor="middle">Type O (25%)</text>
          </g>

          {/* Antigen Glycoprotein Panel */}
          <g transform="translate(380, 50)">
            <rect x="0" y="10" width="270" height="190" rx="10" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
            <text x="135" y="32" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">RBC Surface Antigens & Compatibility</text>

            <circle cx="35" cy="65" r="14" fill="#dc2626" />
            <polygon points="35,46 40,55 30,55" fill="#22c55e" />
            <text x="60" y="62" fill="#ffffff" fontSize="10" fontWeight="bold">Type A: A Antigen (Circle/Spike)</text>
            <text x="60" y="75" fill="#94a3b8" fontSize="8">Anti-B antibodies in plasma</text>

            <circle cx="35" cy="105" r="14" fill="#dc2626" />
            <rect x="29" y="86" width="12" height="8" fill="#3b82f6" rx="2" />
            <text x="60" y="102" fill="#ffffff" fontSize="10" fontWeight="bold">Type B: B Antigen (Square)</text>
            <text x="60" y="115" fill="#94a3b8" fontSize="8">Anti-A antibodies in plasma</text>

            <circle cx="35" cy="145" r="14" fill="#dc2626" />
            <polygon points="30,126 35,133 25,133" fill="#22c55e" />
            <rect x="36" y="126" width="8" height="7" fill="#3b82f6" rx="1" />
            <text x="60" y="142" fill="#ffffff" fontSize="10" fontWeight="bold">Type AB: Both Antigens (Universal Recipient)</text>
            <text x="60" y="155" fill="#94a3b8" fontSize="8">No ABO antibodies</text>

            <circle cx="35" cy="182" r="14" fill="#dc2626" />
            <text x="60" y="179" fill="#ffffff" fontSize="10" fontWeight="bold">Type O: Naked H-antigen (Universal Donor)</text>
            <text x="60" y="191" fill="#94a3b8" fontSize="8">Both Anti-A and Anti-B in plasma</text>
          </g>

          {/* Bottom takeaway */}
          <rect x="60" y="270" width="560" height="40" rx="8" fill="#14532d" stroke="#22c55e" strokeWidth="1" />
          <text x="340" y="295" fill="#dcfce7" fontSize="11" fontWeight="bold" textAnchor="middle">
            ✦ A cross between heterozygous Type A (I^A i) and Type B (I^B i) can produce all four blood types in equal 25% ratios!
          </text>
        </svg>
      );

    case 'pedigree-epistasis':
      return (
        <svg viewBox="0 0 720 340" className="w-full max-w-3xl h-auto select-none font-sans">
          <text x="360" y="25" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
            Pedigree Conventions & Recessive Epistasis Biochemical Pathway (9:3:4)
          </text>

          {/* Pedigree Chart Left */}
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="290" height="270" rx="10" fill="#040e1d" stroke="#1e3a8a" strokeWidth="1.5" />
            <text x="145" y="24" fill="#60a5fa" fontSize="11" fontWeight="bold" textAnchor="middle">Autosomal Recessive Pedigree</text>

            {/* Generation I: Normal Carrier Male (White Square) and Carrier Female (White Circle) */}
            <text x="20" y="65" fill="#94a3b8" fontSize="10" fontWeight="bold">I</text>
            <rect x="60" y="50" width="30" height="30" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            <text x="75" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">Aa</text>
            <line x1="90" y1="65" x2="160" y2="65" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="175" cy="65" r="15" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            <text x="175" y="69" fill="#cbd5e1" fontSize="9" textAnchor="middle">Aa</text>

            {/* Line to offspring */}
            <line x1="125" y1="65" x2="125" y2="105" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="50" y1="105" x2="230" y2="105" stroke="#cbd5e1" strokeWidth="2" />

            {/* Generation II Offspring */}
            <text x="20" y="145" fill="#94a3b8" fontSize="10" fontWeight="bold">II</text>
            {/* Child 1: Unaffected Girl */}
            <line x1="50" y1="105" x2="50" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="50" cy="145" r="14" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            <text x="50" y="149" fill="#94a3b8" fontSize="8" textAnchor="middle">A_</text>

            {/* Child 2: AFFECTED Boy (Black Square, aa) */}
            <line x1="110" y1="105" x2="110" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="96" y="131" width="28" height="28" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
            <text x="110" y="149" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">aa</text>

            {/* Child 3: Unaffected Boy */}
            <line x1="170" y1="105" x2="170" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="156" y="131" width="28" height="28" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            <text x="170" y="149" fill="#94a3b8" fontSize="8" textAnchor="middle">A_</text>

            {/* Child 4: Carrier Girl married to normal */}
            <line x1="230" y1="105" x2="230" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="230" cy="145" r="14" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            <text x="230" y="149" fill="#94a3b8" fontSize="8" textAnchor="middle">A_</text>

            <rect x="15" y="195" width="260" height="60" rx="6" fill="#020617" stroke="#334155" strokeWidth="1" />
            <text x="145" y="215" fill="#facc15" fontSize="9" fontWeight="bold" textAnchor="middle">Classic 2/3 Carrier Rule:</text>
            <text x="145" y="232" fill="#cbd5e1" fontSize="8" textAnchor="middle">Unaffected siblings of an affected recessive individual (aa)</text>
            <text x="145" y="246" fill="#67e8f9" fontSize="8" textAnchor="middle">have a 2/3 (66.7%) probability of being carriers (Aa)!</text>
          </g>

          {/* Epistasis Biochemical Pathway Right */}
          <g transform="translate(345, 45)">
            <rect x="0" y="0" width="345" height="270" rx="10" fill="#051b14" stroke="#059669" strokeWidth="1.5" />
            <text x="172" y="24" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Labrador Recessive Epistasis (E masks B)</text>

            {/* Step 1: Precursor (Yellow) */}
            <circle cx="60" cy="90" r="30" fill="#ca8a04" stroke="#facc15" strokeWidth="2" />
            <text x="60" y="88" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Colorless</text>
            <text x="60" y="100" fill="#fef08a" fontSize="8" textAnchor="middle">Precursor</text>
            <text x="60" y="135" fill="#facc15" fontSize="10" fontWeight="bold" textAnchor="middle">Yellow (__ee)</text>
            <text x="60" y="148" fill="#fef08a" fontSize="8" textAnchor="middle">4 / 16 (25%)</text>

            {/* Arrow with Enzyme E */}
            <line x1="95" y1="90" x2="160" y2="90" stroke="#34d399" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="127" y="78" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Enzyme E</text>
            <text x="127" y="105" fill="#a7f3d0" fontSize="7" textAnchor="middle">(allele E_)</text>

            {/* Step 2: Intermediate Brown Pigment */}
            <circle cx="195" cy="90" r="30" fill="#78350f" stroke="#b45309" strokeWidth="2" />
            <text x="195" y="93" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Brown</text>
            <text x="195" y="135" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">Chocolate (bbE_)</text>
            <text x="195" y="148" fill="#fed7aa" fontSize="8" textAnchor="middle">3 / 16 (18.75%)</text>

            {/* Arrow with Enzyme B */}
            <line x1="230" y1="90" x2="280" y2="90" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="255" y="78" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Enzyme B</text>
            <text x="255" y="105" fill="#bae6fd" fontSize="7" textAnchor="middle">(allele B_)</text>

            {/* Step 3: Final Black Pigment */}
            <circle cx="310" cy="90" r="26" fill="#09090b" stroke="#ffffff" strokeWidth="2" />
            <text x="310" y="93" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Black</text>
            <text x="310" y="135" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Black (B_E_)</text>
            <text x="310" y="148" fill="#cbd5e1" fontSize="8" textAnchor="middle">9 / 16 (56.25%)</text>

            {/* Summary Box */}
            <rect x="20" y="180" width="305" height="75" rx="6" fill="#022c22" stroke="#10b981" strokeWidth="1" />
            <text x="172" y="200" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">The 9:3:4 Recessive Epistasis Ratio</text>
            <text x="172" y="218" fill="#d1fae5" fontSize="8" textAnchor="middle">If homozygous ee is present, no pigment is deposited into fur.</text>
            <text x="172" y="232" fill="#a7f3d0" fontSize="8" textAnchor="middle">The dog is Yellow regardless of whether it carries BB, Bb, or bb!</text>
            <text x="172" y="246" fill="#facc15" fontSize="8" fontWeight="bold" textAnchor="middle">9 Black (B_E_) : 3 Chocolate (bbE_) : 4 Yellow (__ee)</text>
          </g>
        </svg>
      );

    case 'x-inactivation-epigenetics':
      return (
        <svg viewBox="0 0 700 320" className="w-full max-w-2xl h-auto select-none font-sans">
          <text x="350" y="25" fill="#f43f5e" fontSize="14" fontWeight="bold" textAnchor="middle">
            X-Chromosome Inactivation (Lyonization) & Mosaic Calico Fur Patches
          </text>

          {/* Early Embryo Blastocyst */}
          <g transform="translate(40, 50)">
            <rect x="0" y="0" width="260" height="230" rx="10" fill="#040b18" stroke="#1e3a8a" strokeWidth="1.5" />
            <text x="130" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Early Embryo (Blastocyst ~100 Cells)</text>

            {/* Cell with 2 active X's */}
            <circle cx="130" cy="85" r="40" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="130" y="70" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Embryonic Cell</text>
            {/* Maternal X (Orange) */}
            <rect x="110" y="80" width="12" height="25" rx="3" fill="#f97316" />
            <text x="116" y="96" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">X^O</text>
            {/* Paternal X (Black) */}
            <rect x="138" y="80" width="12" height="25" rx="3" fill="#3b82f6" />
            <text x="144" y="96" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">X^B</text>

            {/* Random Choice Arrows */}
            <path d="M 100 135 L 50 175" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="50" y="160" fill="#f97316" fontSize="8" fontWeight="bold">Inactivates X^B</text>

            <path d="M 160 135 L 210 175" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="175" y="160" fill="#60a5fa" fontSize="8" fontWeight="bold">Inactivates X^O</text>

            {/* Inactivated Cell Left: Expresses Orange */}
            <circle cx="50" cy="200" r="18" fill="#7c2d12" stroke="#ea580c" strokeWidth="1.5" />
            <circle cx="62" cy="192" r="4" fill="#000000" stroke="#f43f5e" strokeWidth="1" />
            <text x="50" y="204" fill="#fed7aa" fontSize="7" fontWeight="bold" textAnchor="middle">Orange Active</text>

            {/* Inactivated Cell Right: Expresses Black */}
            <circle cx="210" cy="200" r="18" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1.5" />
            <circle cx="222" cy="192" r="4" fill="#000000" stroke="#f43f5e" strokeWidth="1" />
            <text x="210" y="204" fill="#bfdbfe" fontSize="7" fontWeight="bold" textAnchor="middle">Black Active</text>
          </g>

          {/* Adult Mosaic Calico Phenotype Right */}
          <g transform="translate(330, 50)">
            <rect x="0" y="0" width="330" height="230" rx="10" fill="#1c0512" stroke="#e11d48" strokeWidth="1.5" />
            <text x="165" y="24" fill="#fb7185" fontSize="11" fontWeight="bold" textAnchor="middle">Adult Female Calico Mosaic Cat</text>

            {/* Cat Fur Mosaic Representation */}
            <rect x="30" y="45" width="270" height="90" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* White belly base */}
            <text x="60" y="65" fill="#64748b" fontSize="8" fontWeight="bold">White Fur (Autosomal S)</text>
            {/* Orange patches */}
            <ellipse cx="110" cy="90" rx="35" ry="25" fill="#ea580c" />
            <text x="110" y="93" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Orange Patch</text>
            <text x="110" y="103" fill="#ffedd5" fontSize="7" textAnchor="middle">(X^O active, X^B Barr)</text>
            {/* Black patches */}
            <ellipse cx="200" cy="90" rx="35" ry="25" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <text x="200" y="93" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Black Patch</text>
            <text x="200" y="103" fill="#cbd5e1" fontSize="7" textAnchor="middle">(X^B active, X^O Barr)</text>

            {/* Barr Body Callout */}
            <rect x="20" y="150" width="290" height="65" rx="6" fill="#09050d" stroke="#f43f5e" strokeWidth="1" />
            <circle cx="45" cy="182" r="10" fill="#4c0519" stroke="#f43f5e" strokeWidth="1.5" />
            <circle cx="48" cy="178" r="3" fill="#f43f5e" />
            <text x="45" y="200" fill="#fda4af" fontSize="7" textAnchor="middle">Barr Body</text>
            <text x="70" y="172" fill="#fda4af" fontSize="9" fontWeight="bold">The N - 1 Rule:</text>
            <text x="70" y="186" fill="#fecdd3" fontSize="8">Barr Bodies = Total X Chromosomes - 1</text>
            <text x="70" y="198" fill="#cbd5e1" fontSize="8">XX = 1 Barr Body | XY = 0 | XXY = 1 | XXX = 2</text>
          </g>

          <text x="350" y="305" fill="#fecdd3" fontSize="10" textAnchor="middle" fontWeight="bold">
            ✦ Xist non-coding RNA coats one X chromosome, epigenetically compacting it into heterochromatin for life!
          </text>
        </svg>
      );

    case 'hardy-weinberg-selection':
      return (
        <svg viewBox="0 0 740 330" className="w-full max-w-3xl h-auto select-none font-sans">
          <text x="370" y="25" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
            Hardy-Weinberg Binomial Model & The 3 Modes of Natural Selection
          </text>

          {/* Left: Hardy Weinberg Equilibrium Box */}
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="270" height="260" rx="10" fill="#040f1f" stroke="#0284c7" strokeWidth="1.5" />
            <text x="135" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Hardy-Weinberg Equilibrium</text>

            <rect x="20" y="45" width="230" height="50" rx="6" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1" />
            <text x="135" y="66" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">p + q = 1  (Alleles)</text>
            <text x="135" y="84" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle">p² + 2pq + q² = 1  (Genotypes)</text>

            <text x="25" y="120" fill="#38bdf8" fontSize="9" fontWeight="bold">p² = Homozygous Dominant (AA)</text>
            <text x="25" y="136" fill="#a5b4fc" fontSize="9" fontWeight="bold">2pq = Heterozygous Carriers (Aa)</text>
            <text x="25" y="152" fill="#f43f5e" fontSize="9" fontWeight="bold">q² = Homozygous Recessive (aa)</text>

            <rect x="15" y="170" width="240" height="80" rx="6" fill="#082f49" stroke="#0369a1" strokeWidth="1" />
            <text x="135" y="188" fill="#facc15" fontSize="9" fontWeight="bold" textAnchor="middle">5 Required Equilibrium Conditions:</text>
            <text x="25" y="204" fill="#e0f2fe" fontSize="8">1. Very Large Population (No Drift)</text>
            <text x="25" y="216" fill="#e0f2fe" fontSize="8">2. Random Mating (No Sexual Selection)</text>
            <text x="25" y="228" fill="#e0f2fe" fontSize="8">3. No Mutations</text>
            <text x="25" y="240" fill="#e0f2fe" fontSize="8">4. No Gene Flow (No Migration)</text>
            <text x="145" y="240" fill="#e0f2fe" fontSize="8">5. No Natural Selection</text>
          </g>

          {/* Right: 3 Selection Bell Curves */}
          <g transform="translate(320, 45)">
            <rect x="0" y="0" width="390" height="260" rx="10" fill="#051622" stroke="#0d9488" strokeWidth="1.5" />
            <text x="195" y="24" fill="#2dd4bf" fontSize="11" fontWeight="bold" textAnchor="middle">3 Classic Selection Curves</text>

            {/* 1. Stabilizing Selection */}
            <g transform="translate(20, 40)">
              <rect x="0" y="0" width="105" height="150" rx="6" fill="#042f2e" stroke="#14b8a6" strokeWidth="1" />
              <text x="52" y="18" fill="#5eead4" fontSize="9" fontWeight="bold" textAnchor="middle">Stabilizing</text>
              {/* Original Bell Curve (dashed) */}
              <path d="M 10 130 Q 52 40 95 130" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Squeezed Higher Middle Curve */}
              <path d="M 25 130 Q 52 10 80 130" fill="none" stroke="#2dd4bf" strokeWidth="2.5" />
              <text x="52" y="142" fill="#ccfbf1" fontSize="7" textAnchor="middle">Favors Middle</text>
              <text x="52" y="152" fill="#99f6e4" fontSize="6" textAnchor="middle">Human Birth Weight</text>
            </g>

            {/* 2. Directional Selection */}
            <g transform="translate(140, 40)">
              <rect x="0" y="0" width="105" height="150" rx="6" fill="#042f2e" stroke="#14b8a6" strokeWidth="1" />
              <text x="52" y="18" fill="#5eead4" fontSize="9" fontWeight="bold" textAnchor="middle">Directional</text>
              {/* Original Curve */}
              <path d="M 10 130 Q 40 40 70 130" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Shifted Right Curve */}
              <path d="M 35 130 Q 65 30 95 130" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="52" y="142" fill="#fef3c7" fontSize="7" textAnchor="middle">Shifts to One Side</text>
              <text x="52" y="152" fill="#fde68a" fontSize="6" textAnchor="middle">Peppered Moths</text>
            </g>

            {/* 3. Disruptive Selection */}
            <g transform="translate(260, 40)">
              <rect x="0" y="0" width="105" height="150" rx="6" fill="#042f2e" stroke="#14b8a6" strokeWidth="1" />
              <text x="52" y="18" fill="#5eead4" fontSize="9" fontWeight="bold" textAnchor="middle">Disruptive</text>
              {/* Original Curve */}
              <path d="M 10 130 Q 52 40 95 130" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Two Humps Curve */}
              <path d="M 10 130 Q 30 30 52 110 Q 75 30 95 130" fill="none" stroke="#ec4899" strokeWidth="2.5" />
              <text x="52" y="142" fill="#fce7f3" fontSize="7" textAnchor="middle">Favors Both Ends</text>
              <text x="52" y="152" fill="#fbcfe8" fontSize="6" textAnchor="middle">Beak Extremes (Speciation)</text>
            </g>

            {/* Bottom summary */}
            <rect x="20" y="205" width="345" height="45" rx="6" fill="#021c1a" stroke="#0f766e" strokeWidth="1" />
            <text x="192" y="222" fill="#5eead4" fontSize="8" fontWeight="bold" textAnchor="middle">
              Genetic Drift (Bottlenecks & Founder Effect) = Random Chance shifts in small populations.
            </text>
            <text x="192" y="238" fill="#99f6e4" fontSize="8" textAnchor="middle">
              Natural Selection = Non-random differential reproductive fitness!
            </text>
          </g>
        </svg>
      );

    case 'pcr-gel-electrophoresis':
      return (
        <svg viewBox="0 0 740 340" className="w-full max-w-3xl h-auto select-none font-sans">
          <text x="370" y="25" fill="#2dd4bf" fontSize="14" fontWeight="bold" textAnchor="middle">
            Polymerase Chain Reaction (PCR) &amp; Agarose Gel Electrophoresis (&quot;Run to the Red&quot;)
          </text>

          {/* Left: PCR Thermal Cycling */}
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="310" height="270" rx="10" fill="#041221" stroke="#0284c7" strokeWidth="1.5" />
            <text x="155" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">3-Step PCR Thermal Cycling</text>

            {/* Step 1: Denaturation */}
            <rect x="15" y="45" width="280" height="50" rx="6" fill="#4c0519" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="25" y="65" fill="#fda4af" fontSize="10" fontWeight="bold">1. Denaturation (94–98°C)</text>
            <text x="25" y="82" fill="#fecdd3" fontSize="8">High heat breaks H-bonds → separates double helix into ssDNA.</text>

            {/* Step 2: Annealing */}
            <rect x="15" y="105" width="280" height="50" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="25" y="125" fill="#c7d2fe" fontSize="10" fontWeight="bold">2. Annealing (55–65°C)</text>
            <text x="25" y="142" fill="#e0e7ff" fontSize="8">Cooling allows forward & reverse primers to bind flanking targets.</text>

            {/* Step 3: Extension */}
            <rect x="15" y="165" width="280" height="50" rx="6" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
            <text x="25" y="185" fill="#a7f3d0" fontSize="10" fontWeight="bold">3. Extension (68–72°C)</text>
            <text x="25" y="202" fill="#d1fae5" fontSize="8">Heat-stable Taq Polymerase builds 5′→3′ using dNTPs (1 min/kb).</text>

            {/* Formula box */}
            <rect x="15" y="225" width="280" height="35" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
            <text x="155" y="247" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
              Exponential Duplication: Yield = Initial × 2ⁿ (n = cycles)
            </text>
          </g>

          {/* Right: Agarose Gel Electrophoresis Tank */}
          <g transform="translate(365, 45)">
            <rect x="0" y="0" width="345" height="270" rx="10" fill="#051e24" stroke="#0d9488" strokeWidth="1.5" />
            <text x="172" y="24" fill="#2dd4bf" fontSize="11" fontWeight="bold" textAnchor="middle">Agarose Gel Separation</text>

            {/* Negative Electrode Cathode (-) */}
            <rect x="25" y="40" width="295" height="18" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
            <text x="172" y="53" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">CATHODE: Negative Electrode (–) [Black]</text>

            {/* Gel Slab with Wells */}
            <rect x="35" y="65" width="275" height="150" rx="6" fill="#083344" stroke="#06b6d4" strokeWidth="1.5" />

            {/* Wells at the top */}
            <rect x="55" y="72" width="25" height="8" rx="2" fill="#021c27" stroke="#38bdf8" strokeWidth="1" />
            <text x="67" y="68" fill="#7dd3fc" fontSize="7" textAnchor="middle">Ladder</text>

            <rect x="110" y="72" width="25" height="8" rx="2" fill="#021c27" stroke="#38bdf8" strokeWidth="1" />
            <text x="122" y="68" fill="#7dd3fc" fontSize="7" textAnchor="middle">PCR 1</text>

            <rect x="165" y="72" width="25" height="8" rx="2" fill="#021c27" stroke="#38bdf8" strokeWidth="1" />
            <text x="177" y="68" fill="#7dd3fc" fontSize="7" textAnchor="middle">PCR 2</text>

            <rect x="220" y="72" width="25" height="8" rx="2" fill="#021c27" stroke="#38bdf8" strokeWidth="1" />
            <text x="232" y="68" fill="#7dd3fc" fontSize="7" textAnchor="middle">Cut Plasmid</text>

            {/* DNA Ladder Bands (Lane 1) */}
            <line x1="57" y1="90" x2="77" y2="90" stroke="#facc15" strokeWidth="2.5" />
            <text x="50" y="93" fill="#facc15" fontSize="6" textAnchor="end">10 kb</text>
            <line x1="57" y1="115" x2="77" y2="115" stroke="#facc15" strokeWidth="2.5" />
            <text x="50" y="118" fill="#facc15" fontSize="6" textAnchor="end">5 kb</text>
            <line x1="57" y1="145" x2="77" y2="145" stroke="#facc15" strokeWidth="2.5" />
            <text x="50" y="148" fill="#facc15" fontSize="6" textAnchor="end">2 kb</text>
            <line x1="57" y1="175" x2="77" y2="175" stroke="#facc15" strokeWidth="2.5" />
            <text x="50" y="178" fill="#facc15" fontSize="6" textAnchor="end">1 kb</text>
            <line x1="57" y1="200" x2="77" y2="200" stroke="#facc15" strokeWidth="2.5" />
            <text x="50" y="203" fill="#facc15" fontSize="6" textAnchor="end">500 bp</text>

            {/* Lane 2: Single Target Band (e.g. 1.2 kb) */}
            <line x1="112" y1="168" x2="132" y2="168" stroke="#34d399" strokeWidth="3.5" />
            <text x="145" y="171" fill="#34d399" fontSize="7">1.2 kb Target</text>

            {/* Lane 3: 2 Bands (Digested) */}
            <line x1="167" y1="115" x2="187" y2="115" stroke="#38bdf8" strokeWidth="3" />
            <line x1="167" y1="195" x2="187" y2="195" stroke="#38bdf8" strokeWidth="3" />

            {/* Lane 4: Vector band */}
            <line x1="222" y1="105" x2="242" y2="105" stroke="#ec4899" strokeWidth="3" />

            {/* Direction of Migration Arrow */}
            <line x1="285" y1="85" x2="285" y2="195" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#arrow)" />
            <text x="295" y="140" fill="#fbbf24" fontSize="8" fontWeight="bold" transform="rotate(90 295 140)">
              Migration →
            </text>

            {/* Positive Electrode Anode (+) [Red] */}
            <rect x="25" y="225" width="295" height="18" rx="4" fill="#991b1b" stroke="#f87171" strokeWidth="1" />
            <text x="172" y="238" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
              ANODE: Positive Electrode (+) [Red] — &quot;Run to the Red!&quot;
            </text>

            <text x="172" y="258" fill="#99f6e4" fontSize="8" textAnchor="middle">
              Small fragments move faster and travel further through agarose mesh!
            </text>
          </g>
        </svg>
      );

    default:
      return (
        <div className="p-8 text-center text-slate-400 font-mono text-sm">
          Visualization diagram active for this genetics topic.
        </div>
      );
  }
}
