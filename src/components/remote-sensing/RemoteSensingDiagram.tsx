'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { RemoteSensingDiagramConfig } from '@/types/remote-sensing';

interface RemoteSensingDiagramProps {
  config: RemoteSensingDiagramConfig;
}

export function RemoteSensingDiagram({ config }: RemoteSensingDiagramProps): React.JSX.Element {
  const [activeCurve, setActiveCurve] = useState<'vegetation' | 'soil' | 'water'>('vegetation');

  // Interactive sample values for the 3 curves
  const curves = {
    vegetation: {
      name: 'Healthy Photosynthetic Vegetation',
      color: '#10b981', // emerald-500
      redVal: 0.06,
      nirVal: 0.62,
      description:
        'Chlorophyll absorbs Blue & Red light for photosynthesis. Spongy mesophyll cells scatter and bounce Near-Infrared light, causing a dramatic 10x jump at the "Red Edge" (0.7 μm).',
    },
    soil: {
      name: 'Dry Agricultural Soil / Sand',
      color: '#f59e0b', // amber-500
      redVal: 0.28,
      nirVal: 0.36,
      description:
        'Bare soil exhibits a steady, gradual upward slope across visible and near-infrared bands, without any abrupt "Red Edge" step.',
    },
    water: {
      name: 'Clear Deep Water Body',
      color: '#06b6d4', // cyan-500
      redVal: 0.05,
      nirVal: 0.01,
      description:
        'Water absorbs almost all infrared radiation within the top millimeter of depth, appearing jet black in NIR satellite imagery.',
    },
  };

  const current = curves[activeCurve];
  const calculatedNdvi = ((current.nirVal - current.redVal) / (current.nirVal + current.redVal)).toFixed(3);

  return (
    <div className="bg-[#030e20] border border-cyan-500/40 rounded-2xl p-5 sm:p-7 space-y-6 shadow-2xl">
      {/* Header with Title and Mode Switchers */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-blue-900/80">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Spectral Reflectance Laboratory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{config.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">{config.caption}</p>
        </div>

        {/* Feature Curve Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          {(['vegetation', 'soil', 'water'] as const).map((key) => {
            const isActive = activeCurve === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCurve(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? key === 'vegetation'
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                      : key === 'soil'
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                      : 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: curves[key].color }}
                />
                <span className="capitalize">{key}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SVG Canvas for Spectral Signatures */}
      <div className="w-full bg-[#020712] border border-blue-950 rounded-xl p-4 sm:p-6 overflow-x-auto">
        <svg
          viewBox="0 0 800 420"
          className="w-full min-w-[640px] max-w-[800px] mx-auto select-none font-sans"
        >
          <defs>
            {/* Gradients for Band Regions */}
            <linearGradient id="visGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="nirGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="swirGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Grid lines and axes */}
          <g stroke="#1e293b" strokeDasharray="3,3" strokeWidth="1">
            <line x1="80" y1="60" x2="750" y2="60" />
            <line x1="80" y1="130" x2="750" y2="130" />
            <line x1="80" y1="200" x2="750" y2="200" />
            <line x1="80" y1="270" x2="750" y2="270" />
            <line x1="80" y1="340" x2="750" y2="340" />
          </g>

          {/* Band Region Background Shading */}
          {/* Visible Light (0.4 to 0.7 um) -> x: 80 to 220 */}
          <rect x="80" y="50" width="140" height="290" fill="url(#visGrad)" />
          <text x="150" y="40" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">
            VISIBLE (0.4–0.7 μm)
          </text>

          {/* Near-Infrared (0.7 to 1.1 um) -> x: 220 to 420 */}
          <rect x="220" y="50" width="200" height="290" fill="url(#nirGrad)" />
          <text x="320" y="40" fill="#f472b6" fontSize="11" textAnchor="middle" fontWeight="bold">
            NEAR-INFRARED / NIR (0.7–1.1 μm)
          </text>

          {/* Shortwave-Infrared (1.1 to 2.2 um) -> x: 420 to 750 */}
          <rect x="420" y="50" width="330" height="290" fill="url(#swirGrad)" />
          <text x="585" y="40" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="bold">
            SHORTWAVE-INFRARED / SWIR (1.1–2.2 μm)
          </text>

          {/* Red Edge Highlight Bar */}
          <rect x="210" y="50" width="20" height="290" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
          <text x="220" y="25" fill="#f87171" fontSize="10" textAnchor="middle" fontWeight="bold">
            THE RED EDGE (~0.7 μm)
          </text>

          {/* Solid Axes */}
          <line x1="80" y1="340" x2="750" y2="340" stroke="#64748b" strokeWidth="2" />
          <line x1="80" y1="50" x2="80" y2="340" stroke="#64748b" strokeWidth="2" />

          {/* Y Axis Labels (Reflectance %) */}
          <text x="70" y="344" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">0%</text>
          <text x="70" y="274" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">20%</text>
          <text x="70" y="204" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">40%</text>
          <text x="70" y="134" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">60%</text>
          <text x="70" y="64" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">80%</text>
          <text x="35" y="195" fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="middle" transform="rotate(-90 35 195)">
            Reflectance (%)
          </text>

          {/* X Axis Labels (Wavelength in um) */}
          <text x="80" y="360" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">0.4</text>
          <text x="150" y="360" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">0.55</text>
          <text x="220" y="360" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">0.7</text>
          <text x="320" y="360" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">0.9</text>
          <text x="420" y="360" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">1.1</text>
          <text x="560" y="360" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">1.6</text>
          <text x="700" y="360" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">2.2</text>
          <text x="415" y="385" fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="middle">
            Wavelength λ (micrometers μm)
          </text>

          {/* Sensor Band Tick Indicators at Top */}
          {/* Red Band (Landsat B4 / Sentinel B4 ~0.66 um -> x: 200) */}
          <g>
            <rect x="195" y="300" width="16" height="40" fill="#ef4444" fillOpacity="0.4" stroke="#ef4444" strokeWidth="1" />
            <text x="203" y="318" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">RED</text>
          </g>
          {/* NIR Band (Landsat B5 / Sentinel B8 ~0.84 um -> x: 290) */}
          <g>
            <rect x="282" y="100" width="20" height="240" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="1" />
            <text x="292" y="120" fill="#fbcfe8" fontSize="8" fontWeight="bold" textAnchor="middle">NIR</text>
          </g>

          {/* CURVE 1: CLEAR WATER (Cyan) */}
          <path
            d="M 80 305 Q 150 290 200 325 T 300 338 T 750 339"
            fill="none"
            stroke="#06b6d4"
            strokeWidth={activeCurve === 'water' ? '4' : '2'}
            strokeOpacity={activeCurve === 'water' ? '1.0' : '0.35'}
            className="transition-all duration-300"
          />
          <text
            x="240"
            y="332"
            fill="#06b6d4"
            fontSize="10"
            fontWeight="bold"
            opacity={activeCurve === 'water' ? '1.0' : '0.4'}
          >
            Clear Water (Absorbs NIR)
          </text>

          {/* CURVE 2: DRY BARE SOIL (Amber) */}
          <path
            d="M 80 310 Q 150 270 220 245 T 400 185 T 600 145 T 750 135"
            fill="none"
            stroke="#f59e0b"
            strokeWidth={activeCurve === 'soil' ? '4' : '2'}
            strokeOpacity={activeCurve === 'soil' ? '1.0' : '0.35'}
            className="transition-all duration-300"
          />
          <text
            x="480"
            y="170"
            fill="#f59e0b"
            fontSize="10"
            fontWeight="bold"
            opacity={activeCurve === 'soil' ? '1.0' : '0.4'}
          >
            Dry Bare Soil / Sand
          </text>

          {/* CURVE 3: HEALTHY GREEN VEGETATION (Emerald) */}
          {/* Note the Chlorophyll dip in Blue (x:100, y:320), slight Green peak (x:150, y:295), Chlorophyll dip in Red (x:200, y:320), dramatic Red Edge jump (x:230, y:125), High NIR plateau (x:290, y:125), water absorption dips (x:500, y:230) */}
          <path
            d="M 80 325 Q 120 325 150 295 T 205 320 Q 220 280 240 135 T 320 125 Q 400 130 450 180 T 520 240 T 590 170 T 670 250 T 750 240"
            fill="none"
            stroke="#10b981"
            strokeWidth={activeCurve === 'vegetation' ? '4' : '2'}
            strokeOpacity={activeCurve === 'vegetation' ? '1.0' : '0.35'}
            className="transition-all duration-300"
          />
          <text
            x="330"
            y="110"
            fill="#10b981"
            fontSize="11"
            fontWeight="bold"
            opacity={activeCurve === 'vegetation' ? '1.0' : '0.4'}
          >
            Healthy Green Canopy (NIR Plateau ~60%)
          </text>

          {/* Active Curve Measurement Points at Red & NIR */}
          {activeCurve === 'vegetation' && (
            <g>
              {/* Red Point */}
              <circle cx="203" cy="320" r="5" fill="#ef4444" stroke="#fff" strokeWidth="2" />
              <text x="180" y="310" fill="#fca5a5" fontSize="10" fontWeight="bold">Red ≈ 6%</text>

              {/* NIR Point */}
              <circle cx="292" cy="125" r="5" fill="#10b981" stroke="#fff" strokeWidth="2" />
              <text x="295" y="145" fill="#6ee7b7" fontSize="10" fontWeight="bold">NIR ≈ 62%</text>
            </g>
          )}

          {activeCurve === 'soil' && (
            <g>
              <circle cx="203" cy="250" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
              <text x="175" y="240" fill="#fde68a" fontSize="10" fontWeight="bold">Red ≈ 28%</text>

              <circle cx="292" cy="225" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
              <text x="295" y="215" fill="#fde68a" fontSize="10" fontWeight="bold">NIR ≈ 36%</text>
            </g>
          )}

          {activeCurve === 'water' && (
            <g>
              <circle cx="203" cy="325" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="2" />
              <text x="175" y="315" fill="#a5f3fc" fontSize="10" fontWeight="bold">Red ≈ 5%</text>

              <circle cx="292" cy="338" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="2" />
              <text x="295" y="330" fill="#a5f3fc" fontSize="10" fontWeight="bold">NIR ≈ 1%</text>
            </g>
          )}
        </svg>
      </div>

      {/* Dynamic Diagnostic Breakdown for the Active Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#020b18] border border-blue-900/80 p-4 sm:p-5 rounded-xl">
        <div className="space-y-1.5 md:col-span-2">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: current.color }}
            />
            <h4 className="text-base font-bold text-white">{current.name}</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{current.description}</p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-slate-400">
              Red Band Reflectance:{' '}
              <strong className="text-rose-400">{(current.redVal * 100).toFixed(0)}%</strong>
            </span>
            <span className="text-slate-400">
              NIR Band Reflectance:{' '}
              <strong className="text-emerald-400">{(current.nirVal * 100).toFixed(0)}%</strong>
            </span>
          </div>
        </div>

        {/* Live Calculated NDVI Banner */}
        <div className="bg-[#041228] border border-cyan-500/40 p-4 rounded-xl flex flex-col justify-center items-center text-center">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
            Calculated NDVI Index
          </span>
          <span
            className="text-3xl font-black font-mono my-1"
            style={{ color: current.color }}
          >
            {Number(calculatedNdvi) > 0 ? `+${calculatedNdvi}` : calculatedNdvi}
          </span>
          <span className="text-[11px] font-bold text-slate-300">
            {Number(calculatedNdvi) > 0.6
              ? '🌿 Dense Healthy Forest'
              : Number(calculatedNdvi) > 0.1
              ? '🌾 Sparse Flora / Soil'
              : '💧 Clear Deep Water'}
          </span>
        </div>
      </div>
    </div>
  );
}
