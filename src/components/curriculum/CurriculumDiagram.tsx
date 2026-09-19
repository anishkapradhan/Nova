'use client';

import React from 'react';
import { DiagramConfig } from '@/types/curriculum';

interface CurriculumDiagramProps {
  config: DiagramConfig;
}

export function CurriculumDiagram({ config }: CurriculumDiagramProps): React.JSX.Element {
  return (
    <div className="bg-[#030d1d] border border-blue-900/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
      <div className="border-b border-blue-900/60 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-semibold block">
            Scientific Visualization
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white">{config.title}</h4>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-950 text-cyan-300 border border-cyan-500/30 font-mono">
          Interactive Vector Diagram
        </span>
      </div>

      <div className="w-full flex justify-center items-center py-4 overflow-x-auto">
        {renderDiagramSvg(config.type)}
      </div>

      <p className="text-xs text-slate-300 font-mono text-center max-w-2xl mx-auto pt-2 border-t border-blue-900/40 leading-relaxed">
        ✦ {config.caption}
      </p>
    </div>
  );
}

function renderDiagramSvg(type: DiagramConfig['type']): React.JSX.Element {
  switch (type) {
    case 'celestial-sphere':
      return (
        <svg viewBox="0 0 600 360" className="w-full max-w-xl h-auto select-none">
          {/* Outer Celestial Sphere */}
          <circle cx="300" cy="180" r="140" fill="#041228" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Earth at center */}
          <circle cx="300" cy="180" r="30" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <ellipse cx="300" cy="180" rx="30" ry="10" fill="none" stroke="#22d3ee" strokeWidth="1" />
          <text x="300" y="184" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Earth</text>

          {/* Earth and Celestial Axis */}
          <line x1="300" y1="20" x2="300" y2="340" stroke="#f59e0b" strokeWidth="2" />
          <text x="300" y="15" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">North Celestial Pole (Polaris)</text>
          <text x="300" y="355" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">South Celestial Pole</text>

          {/* Celestial Equator */}
          <ellipse cx="300" cy="180" rx="140" ry="40" fill="none" stroke="#22c55e" strokeWidth="2" />
          <text x="445" y="185" fill="#22c55e" fontSize="11" fontWeight="bold">Celestial Equator (Dec = 0°)</text>

          {/* Ecliptic tilted at 23.5° */}
          <ellipse cx="300" cy="180" rx="140" ry="50" fill="none" stroke="#f43f5e" strokeWidth="2" transform="rotate(-23.5 300 180)" strokeDasharray="6 3" />
          <text x="180" y="100" fill="#f43f5e" fontSize="11" fontWeight="bold">Ecliptic (23.5° Tilt)</text>

          {/* Zenith pointer */}
          <line x1="300" y1="180" x2="360" y2="60" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="360" cy="60" r="4" fill="#a855f7" />
          <text x="370" y="58" fill="#a855f7" fontSize="11" fontWeight="bold">Observer&apos;s Zenith (90°)</text>
        </svg>
      );

    case 'kepler-orbits':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          {/* Ellipse */}
          <ellipse cx="300" cy="160" rx="220" ry="110" fill="#041228" stroke="#38bdf8" strokeWidth="2" />
          
          {/* Major axis */}
          <line x1="80" y1="160" x2="520" y2="160" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Foci */}
          {/* Focus 1: Sun */}
          <circle cx="200" cy="160" r="18" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <text x="200" y="195" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Sun (Focus F1)</text>

          {/* Focus 2: Empty */}
          <circle cx="400" cy="160" r="4" fill="#94a3b8" />
          <text x="400" y="180" textAnchor="middle" fill="#94a3b8" fontSize="10">Empty Focus F2</text>

          {/* Perihelion (closest) */}
          <circle cx="80" cy="160" r="8" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
          <text x="75" y="145" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Perihelion (Fastest: v_max)</text>

          {/* Aphelion (farthest) */}
          <circle cx="520" cy="160" r="8" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
          <text x="515" y="145" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold">Aphelion (Slowest: v_min)</text>

          {/* Equal Areas Sector 1 */}
          <path d="M 200 160 L 80 160 A 220 110 0 0 1 110 80 Z" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="135" y="130" fill="#38bdf8" fontSize="11" fontWeight="bold">Area A1 (Δt)</text>

          {/* Equal Areas Sector 2 */}
          <path d="M 200 160 L 490 100 A 220 110 0 0 1 520 160 Z" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="420" y="135" fill="#38bdf8" fontSize="11" fontWeight="bold">Area A2 (Δt)</text>

          <text x="300" y="300" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">
            Kepler Law 2: Area A1 = Area A2 in equal times Δt • Kepler Law 3: P² = a³
          </text>
        </svg>
      );

    case 'em-spectrum':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="spectrumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="20%" stopColor="#f97316" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="60%" stopColor="#22c55e" />
              <stop offset="80%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* EM Spectrum full bar */}
          <text x="20" y="35" fill="#94a3b8" fontSize="11" fontWeight="bold">Long Wavelength / Low Energy</text>
          <text x="580" y="35" textAnchor="end" fill="#94a3b8" fontSize="11" fontWeight="bold">Short Wavelength / High Energy</text>

          {/* Boxes for bands */}
          <g transform="translate(10, 50)">
            <rect x="0" y="0" width="80" height="40" fill="#1e293b" stroke="#475569" />
            <text x="40" y="24" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">Radio</text>

            <rect x="85" y="0" width="80" height="40" fill="#1e293b" stroke="#475569" />
            <text x="125" y="24" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">Microwave</text>

            <rect x="170" y="0" width="75" height="40" fill="#7f1d1d" stroke="#ef4444" />
            <text x="207" y="24" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">Infrared</text>

            <rect x="250" y="0" width="80" height="40" fill="url(#spectrumGradient)" stroke="#ffffff" strokeWidth="2" />
            <text x="290" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="black">Visible</text>

            <rect x="335" y="0" width="75" height="40" fill="#581c87" stroke="#a855f7" />
            <text x="372" y="24" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontWeight="bold">UV</text>

            <rect x="415" y="0" width="80" height="40" fill="#1e1b4b" stroke="#6366f1" />
            <text x="455" y="24" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold">X-Ray</text>

            <rect x="500" y="0" width="80" height="40" fill="#0f172a" stroke="#38bdf8" />
            <text x="540" y="24" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Gamma</text>
          </g>

          {/* Expanded Visible Spectrum */}
          <path d="M 260 90 L 100 160 L 500 160 L 320 90 Z" fill="#0f172a" fillOpacity="0.5" stroke="#64748b" strokeDasharray="3 3" />
          <rect x="100" y="160" width="400" height="45" fill="url(#spectrumGradient)" rx="6" stroke="#ffffff" strokeWidth="1.5" />
          
          <text x="105" y="225" fill="#ef4444" fontSize="11" fontWeight="bold">700 nm (Red)</text>
          <text x="300" y="225" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">550 nm (Green)</text>
          <text x="495" y="225" textAnchor="end" fill="#a855f7" fontSize="11" fontWeight="bold">400 nm (Violet)</text>

          {/* Kirchhoff's spectra summary */}
          <g transform="translate(100, 245)">
            <text x="0" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold">✦ Continuous:</text>
            <text x="95" y="20" fill="#cbd5e1" fontSize="11">Solid/dense gas rainbow</text>

            <text x="0" y="40" fill="#22c55e" fontSize="11" fontWeight="bold">✦ Emission:</text>
            <text x="95" y="40" fill="#cbd5e1" fontSize="11">Hot thin gas bright lines</text>

            <text x="0" y="60" fill="#f43f5e" fontSize="11" fontWeight="bold">✦ Absorption:</text>
            <text x="95" y="60" fill="#cbd5e1" fontSize="11">Cool gas dark gap lines</text>
          </g>
        </svg>
      );

    case 'solar-interior':
      return (
        <svg viewBox="0 0 600 340" className="w-full max-w-xl h-auto select-none">
          {/* Sun layers cutaway */}
          <g transform="translate(300, 170)">
            {/* Corona */}
            <circle cx="0" cy="0" r="150" fill="none" stroke="#fef08a" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
            <text x="0" y="-155" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">Corona (1–3 Million K)</text>

            {/* Chromosphere */}
            <circle cx="0" cy="0" r="130" fill="none" stroke="#f87171" strokeWidth="3" />
            
            {/* Photosphere surface */}
            <circle cx="0" cy="0" r="120" fill="#f59e0b" stroke="#fbbf24" strokeWidth="3" />
            <text x="0" y="-125" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Photosphere (5,800 K)</text>

            {/* Convective Zone */}
            <circle cx="0" cy="0" r="90" fill="#ea580c" stroke="#f97316" strokeWidth="2" />
            <text x="0" y="-70" textAnchor="middle" fill="#fed7aa" fontSize="10" fontWeight="bold">Convective Zone (Boiling)</text>

            {/* Radiative Zone */}
            <circle cx="0" cy="0" r="55" fill="#dc2626" stroke="#ef4444" strokeWidth="2" />
            <text x="0" y="-35" textAnchor="middle" fill="#fee2e2" fontSize="10" fontWeight="bold">Radiative Zone</text>

            {/* Fusion Core */}
            <circle cx="0" cy="0" r="25" fill="#fef08a" stroke="#ffffff" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="black">CORE</text>
            <text x="0" y="15" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold">15M K</text>

            {/* Prominence Loop */}
            <path d="M 90 -80 Q 140 -160 120 -60" fill="none" stroke="#ef4444" strokeWidth="4" />
            <text x="145" y="-110" fill="#ef4444" fontSize="10" fontWeight="bold">Magnetic Prominence</text>

            {/* Sunspot */}
            <circle cx="-100" cy="40" r="6" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
            <text x="-160" y="45" fill="#fed7aa" fontSize="10" fontWeight="bold">Sunspot (4,000 K)</text>
          </g>

          <text x="300" y="325" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
            p-p Chain: 4 ¹H → ⁴He + 2e⁺ + 2ν_e + 2γ (E = mc²)
          </text>
        </svg>
      );

    case 'hr-diagram':
      return (
        <svg viewBox="0 0 600 340" className="w-full max-w-xl h-auto select-none">
          {/* Axes */}
          <line x1="80" y1="280" x2="550" y2="280" stroke="#94a3b8" strokeWidth="2" />
          <line x1="80" y1="280" x2="80" y2="30" stroke="#94a3b8" strokeWidth="2" />

          {/* Axis Labels */}
          <text x="315" y="325" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">
            Surface Temperature (K) & Spectral Type (O B A F G K M) → Decreasing
          </text>
          <text x="30" y="155" fill="#f59e0b" fontSize="12" fontWeight="bold" transform="rotate(-90 30 155)" textAnchor="middle">
            Luminosity (L / L_Sun)
          </text>

          {/* Spectral Labels */}
          <g transform="translate(0, 298)" fontSize="11" fontWeight="bold">
            <text x="110" y="0" fill="#38bdf8">O</text>
            <text x="170" y="0" fill="#60a5fa">B</text>
            <text x="240" y="0" fill="#ffffff">A</text>
            <text x="310" y="0" fill="#fef08a">F</text>
            <text x="380" y="0" fill="#fde047">G</text>
            <text x="450" y="0" fill="#fb923c">K</text>
            <text x="510" y="0" fill="#ef4444">M</text>
          </g>

          {/* Main Sequence S-Curve */}
          <path d="M 120 50 Q 280 170 520 260" fill="none" stroke="#38bdf8" strokeWidth="18" strokeLinecap="round" opacity="0.3" />
          <path d="M 120 50 Q 280 170 520 260" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
          <text x="220" y="125" fill="#38bdf8" fontSize="12" fontWeight="black">MAIN SEQUENCE (V)</text>

          {/* Supergiants Region */}
          <ellipse cx="320" cy="55" rx="140" ry="25" fill="#f43f5e" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="320" y="60" textAnchor="middle" fill="#fda4af" fontSize="12" fontWeight="bold">SUPERGIANTS (I)</text>

          {/* Red Giants Region */}
          <ellipse cx="440" cy="115" rx="70" ry="30" fill="#ea580c" fillOpacity="0.25" stroke="#ea580c" strokeWidth="1.5" />
          <text x="440" y="120" textAnchor="middle" fill="#fed7aa" fontSize="12" fontWeight="bold">GIANTS (III)</text>

          {/* White Dwarfs Region */}
          <ellipse cx="160" cy="240" rx="45" ry="25" fill="#a855f7" fillOpacity="0.25" stroke="#a855f7" strokeWidth="1.5" />
          <text x="160" y="245" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontWeight="bold">WHITE DWARFS</text>

          {/* Sun marker */}
          <circle cx="380" cy="190" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
          <text x="390" y="195" fill="#facc15" fontSize="11" fontWeight="bold">Sun (G2V, L=1)</text>
        </svg>
      );

    case 'star-formation':
    case 'stellar-evolution':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          {/* Sequence nodes */}
          <g transform="translate(20, 120)">
            {/* Step 1: Molecular cloud */}
            <circle cx="45" cy="40" r="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
            <text x="45" y="38" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">Giant Molecular</text>
            <text x="45" y="50" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">Cloud (10 K)</text>

            {/* Arrow */}
            <path d="M 90 40 L 125 40" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Step 2: Bok Globule */}
            <circle cx="160" cy="40" r="25" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="160" y="44" textAnchor="middle" fill="#fcd34d" fontSize="9" fontWeight="bold">Bok Globule</text>

            {/* Arrow */}
            <path d="M 195 40 L 230 40" stroke="#38bdf8" strokeWidth="2" />

            {/* Step 3: Protostar with Jets */}
            <g transform="translate(270, 40)">
              <line x1="0" y1="-35" x2="0" y2="35" stroke="#ec4899" strokeWidth="3" />
              <ellipse cx="0" cy="0" rx="20" ry="8" fill="#f97316" fillOpacity="0.5" stroke="#f97316" />
              <circle cx="0" cy="0" r="8" fill="#fbbf24" />
            </g>
            <text x="270" y="70" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">Protostar &</text>
            <text x="270" y="82" textAnchor="middle" fill="#ec4899" fontSize="9" fontWeight="bold">HH Jets</text>

            {/* Arrow */}
            <path d="M 310 40 L 345 40" stroke="#38bdf8" strokeWidth="2" />

            {/* Step 4: T Tauri */}
            <circle cx="380" cy="40" r="18" fill="#ea580c" stroke="#f59e0b" strokeWidth="2" />
            <ellipse cx="380" cy="40" rx="30" ry="8" fill="none" stroke="#94a3b8" strokeDasharray="3 2" />
            <text x="380" y="70" textAnchor="middle" fill="#fed7aa" fontSize="9" fontWeight="bold">T Tauri Disk</text>

            {/* Arrow */}
            <path d="M 420 40 L 460 40" stroke="#38bdf8" strokeWidth="2" />

            {/* Step 5: ZAMS Main Sequence */}
            <circle cx="505" cy="40" r="22" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
            <text x="505" y="44" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="black">ZAMS Star</text>
            <text x="505" y="75" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Stable Fusion</text>
          </g>

          <text x="300" y="270" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">
            Jeans Collapse (M &gt; M_J) → Kelvin-Helmholtz Heating → Core Hydrogen Ignition (ZAMS)
          </text>
        </svg>
      );

    case 'stellar-death':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          {/* Main Sequence Star at left */}
          <circle cx="80" cy="160" r="30" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
          <text x="80" y="164" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Main Sequence</text>

          {/* Branch Top: Low-Mass */}
          <path d="M 120 140 L 220 70" stroke="#38bdf8" strokeWidth="2" />
          <g transform="translate(260, 70)">
            <circle cx="0" cy="0" r="24" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Red Giant</text>
          </g>

          <path d="M 290 70 L 360 70" stroke="#38bdf8" strokeWidth="2" />
          <g transform="translate(410, 70)">
            <ellipse cx="0" cy="0" rx="35" ry="20" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="0" cy="0" r="6" fill="#38bdf8" />
            <text x="0" y="32" textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="bold">Planetary Nebula</text>
          </g>

          <path d="M 450 70 L 510 70" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="535" cy="70" r="8" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
          <text x="535" y="95" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">White Dwarf (&le;1.44M_☉)</text>

          {/* Branch Bottom: High-Mass */}
          <path d="M 120 180 L 220 250" stroke="#f59e0b" strokeWidth="2" />
          <g transform="translate(260, 250)">
            <circle cx="0" cy="0" r="32" fill="#dc2626" stroke="#fca5a5" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Supergiant (Fe Core)</text>
          </g>

          <path d="M 300 250 L 370 250" stroke="#f59e0b" strokeWidth="2" />
          <g transform="translate(420, 250)">
            <circle cx="0" cy="0" r="28" fill="#facc15" stroke="#f97316" strokeWidth="3" />
            <text x="0" y="4" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="black">Type II SN</text>
          </g>

          <path d="M 455 250 L 510 230" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 455 250 L 510 270" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="555" y="235" fill="#38bdf8" fontSize="9" fontWeight="bold">Neutron Star (&le;2.3M_☉)</text>
          <text x="555" y="275" fill="#a855f7" fontSize="9" fontWeight="bold">Black Hole (&gt;2.3M_☉)</text>
        </svg>
      );

    case 'pulsar-lighthouse':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          <g transform="translate(300, 160)">
            {/* Spinning Neutron Star */}
            <circle cx="0" cy="0" r="35" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="black">Neutron Star</text>

            {/* Rotational Axis */}
            <line x1="0" y1="-120" x2="0" y2="120" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
            <text x="0" y="-125" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Rotation Axis</text>

            {/* Magnetic Axis tilted at 35° */}
            <g transform="rotate(35)">
              <line x1="0" y1="-130" x2="0" y2="130" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="-135" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Magnetic Axis</text>

              {/* Top Jet Beam Cone */}
              <polygon points="0,0 -40,-130 40,-130" fill="#38bdf8" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Bottom Jet Beam Cone */}
              <polygon points="0,0 -40,130 40,130" fill="#38bdf8" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Magnetic field loops */}
              <ellipse cx="-45" cy="0" rx="35" ry="70" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
              <ellipse cx="45" cy="0" rx="35" ry="70" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
            </g>

            {/* Observer Line of Sight */}
            <line x1="180" y1="-80" x2="80" y2="-50" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="210" y="-80" fill="#ec4899" fontSize="11" fontWeight="bold">Earth Line of Sight (Pulse!)</text>
          </g>
        </svg>
      );

    case 'black-hole-anatomy':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          <g transform="translate(300, 160)">
            {/* Accretion Disk */}
            <ellipse cx="0" cy="0" rx="220" ry="50" fill="none" stroke="#f97316" strokeWidth="16" opacity="0.7" />
            <ellipse cx="0" cy="0" rx="180" ry="38" fill="none" stroke="#facc15" strokeWidth="8" opacity="0.9" />

            {/* Ergosphere (Kerr) */}
            <ellipse cx="0" cy="0" rx="95" ry="75" fill="#7e22ce" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="0" y="-85" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">Ergosphere (Frame Dragging)</text>

            {/* Photon Sphere */}
            <circle cx="0" cy="0" r="60" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="65" y="-45" fill="#38bdf8" fontSize="10" fontWeight="bold">Photon Sphere (1.5 R_s)</text>

            {/* Event Horizon (Black) */}
            <circle cx="0" cy="0" r="40" fill="#000000" stroke="#ffffff" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Event Horizon</text>
            <text x="0" y="16" textAnchor="middle" fill="#94a3b8" fontSize="8">R_s = 2GM/c²</text>

            {/* Central Singularity */}
            <circle cx="0" cy="0" r="2" fill="#ef4444" />

            {/* Relativistic Jets */}
            <polygon points="0,0 -12,-140 12,-140" fill="#38bdf8" fillOpacity="0.5" stroke="#38bdf8" />
            <polygon points="0,0 -12,140 12,140" fill="#38bdf8" fillOpacity="0.5" stroke="#38bdf8" />
          </g>
        </svg>
      );

    case 'milky-way':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          {/* Top: Face-on View */}
          <g transform="translate(180, 160)">
            <ellipse cx="0" cy="0" rx="140" ry="140" fill="#041126" stroke="#1e3a8a" strokeWidth="1" />
            {/* Spiral Arms */}
            <path d="M 0 0 Q 60 -40 110 -20" fill="none" stroke="#38bdf8" strokeWidth="4" opacity="0.8" />
            <path d="M 0 0 Q -60 40 -110 20" fill="none" stroke="#38bdf8" strokeWidth="4" opacity="0.8" />
            <path d="M 0 0 Q 40 60 70 105" fill="none" stroke="#38bdf8" strokeWidth="3" opacity="0.8" />
            <path d="M 0 0 Q -40 -60 -70 -105" fill="none" stroke="#38bdf8" strokeWidth="3" opacity="0.8" />

            {/* Central Bar & Bulge */}
            <rect x="-35" y="-12" width="70" height="24" rx="10" fill="#fbbf24" opacity="0.9" />
            <circle cx="0" cy="0" r="10" fill="#ffffff" />
            <text x="0" y="4" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="black">Sgr A*</text>

            {/* Sun position */}
            <circle cx="65" cy="45" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
            <text x="75" y="48" fill="#ef4444" fontSize="10" fontWeight="bold">Sun (26,000 ly)</text>

            <text x="0" y="150" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Face-On: Barred Spiral (100,000 ly)</text>
          </g>

          {/* Bottom/Right: Edge-On View */}
          <g transform="translate(460, 160)">
            {/* Halo circle */}
            <circle cx="0" cy="0" r="100" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <text x="0" y="-105" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">Dark Matter Halo</text>

            {/* Bulge */}
            <ellipse cx="0" cy="0" rx="30" ry="25" fill="#f59e0b" opacity="0.8" />

            {/* Thin Disk */}
            <ellipse cx="0" cy="0" rx="110" ry="6" fill="#38bdf8" opacity="0.9" />
            <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Disk (1,000 ly thick)</text>

            {/* Globular clusters in halo */}
            <circle cx="45" cy="-55" r="3" fill="#fde047" />
            <circle cx="-55" cy="-40" r="3" fill="#fde047" />
            <circle cx="60" cy="50" r="3" fill="#fde047" />
            <circle cx="-40" cy="65" r="3" fill="#fde047" />
            <text x="65" y="-55" fill="#fde047" fontSize="8">Globular Cluster</text>
          </g>
        </svg>
      );

    case 'hubble-tuning-fork':
      return (
        <svg viewBox="0 0 600 320" className="w-full max-w-xl h-auto select-none">
          {/* Tuning Fork Handle: Ellipticals */}
          <g transform="translate(30, 160)">
            <circle cx="20" cy="0" r="18" fill="#f59e0b" opacity="0.8" />
            <text x="20" y="28" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">E0</text>

            <ellipse cx="80" cy="0" rx="22" ry="16" fill="#f59e0b" opacity="0.8" />
            <text x="80" y="28" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">E3</text>

            <ellipse cx="140" cy="0" rx="26" ry="12" fill="#f59e0b" opacity="0.8" />
            <text x="140" y="28" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">E7</text>

            <line x1="170" y1="0" x2="200" y2="0" stroke="#64748b" strokeWidth="2" />
          </g>

          {/* Fork Center: Lenticular S0 */}
          <g transform="translate(245, 160)">
            <ellipse cx="0" cy="0" rx="20" ry="12" fill="#e2e8f0" opacity="0.9" />
            <circle cx="0" cy="0" r="6" fill="#f59e0b" />
            <text x="0" y="28" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">S0 / SB0</text>
          </g>

          {/* Fork Split lines */}
          <path d="M 270 150 C 310 130, 330 90, 360 90" fill="none" stroke="#64748b" strokeWidth="2" />
          <path d="M 270 170 C 310 190, 330 230, 360 230" fill="none" stroke="#64748b" strokeWidth="2" />

          {/* Top Prong: Normal Spirals (Sa, Sb, Sc) */}
          <g transform="translate(360, 90)">
            {/* Sa */}
            <circle cx="20" cy="0" r="14" fill="#38bdf8" opacity="0.8" />
            <circle cx="20" cy="0" r="7" fill="#fbbf24" />
            <text x="20" y="26" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Sa</text>

            {/* Sb */}
            <circle cx="100" cy="0" r="16" fill="#38bdf8" opacity="0.8" />
            <circle cx="100" cy="0" r="5" fill="#fbbf24" />
            <text x="100" y="26" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Sb</text>

            {/* Sc */}
            <circle cx="180" cy="0" r="18" fill="#38bdf8" opacity="0.8" />
            <circle cx="180" cy="0" r="3" fill="#fbbf24" />
            <text x="180" y="26" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Sc</text>
            <text x="100" y="-22" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Normal Spirals (S)</text>
          </g>

          {/* Bottom Prong: Barred Spirals (SBa, SBb, SBc) */}
          <g transform="translate(360, 230)">
            {/* SBa */}
            <rect x="8" y="-4" width="24" height="8" rx="3" fill="#fbbf24" />
            <circle cx="20" cy="0" r="14" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <text x="20" y="26" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">SBa</text>

            {/* SBb */}
            <rect x="88" y="-4" width="24" height="8" rx="3" fill="#fbbf24" />
            <circle cx="100" cy="0" r="16" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <text x="100" y="26" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">SBb (Milky Way)</text>

            {/* SBc */}
            <rect x="170" y="-3" width="20" height="6" rx="2" fill="#fbbf24" />
            <circle cx="180" cy="0" r="18" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <text x="180" y="26" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">SBc</text>
            <text x="100" y="48" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold">Barred Spirals (SB)</text>
          </g>
        </svg>
      );

    default:
      return (
        <div className="text-center p-8 text-slate-400 font-mono text-xs">
          Diagram visualization active.
        </div>
      );
  }
}
