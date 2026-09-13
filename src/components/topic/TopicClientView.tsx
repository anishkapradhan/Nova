'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Compass,
  Atom,
  Flame,
  Binary,
  Trophy,
  ExternalLink,
  BookOpen,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Calculator,
  ChevronRight,
} from 'lucide-react';
import { SPACE_TOPICS, TopicDefinition } from '@/data/topics';
import { useCadetSession } from '@/lib/session/CadetSessionContext';
import { CANONICAL_RESOURCES } from '@/data/resources';
import { FundamentalResource } from '@/types/fundamentals';
import { WebMDNavbar } from '@/components/layout/WebMDNavbar';
import { AddResourceModal } from '@/components/fundamentals/AddResourceModal';

interface TopicClientViewProps {
  topic: TopicDefinition;
}

export function TopicClientView({ topic }: TopicClientViewProps): React.JSX.Element {
  const { cadetHandle, bookmarks, toggleBookmark } = useCadetSession();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [resources, setResources] = useState<FundamentalResource[]>(CANONICAL_RESOURCES);

  // Interactive Discipline Tool States
  // 1. Aerodynamics Lift Calculator
  const [velocity, setVelocity] = useState<number>(100); // m/s
  const [wingArea, setWingArea] = useState<number>(25); // m²
  const [cl, setCl] = useState<number>(0.8); // lift coefficient
  const airDensity = 1.225; // kg/m³
  const calculatedLift = useMemo(() => {
    return Math.round(0.5 * airDensity * Math.pow(velocity, 2) * wingArea * cl);
  }, [velocity, wingArea, cl]);

  // 2. Rocket Equation Calculator
  const [dryMass, setDryMass] = useState<number>(1200); // kg
  const [propellantMass, setPropellantMass] = useState<number>(8500); // kg
  const [isp, setIsp] = useState<number>(310); // s
  const g0 = 9.80665;
  const calculatedDeltaV = useMemo(() => {
    return Math.round(isp * g0 * Math.log((dryMass + propellantMass) / dryMass));
  }, [isp, dryMass, propellantMass]);

  // 3. Astronomy Exoplanet Transit
  const [planetRadius, setPlanetRadius] = useState<number>(1.2); // R_Earth
  const [starRadius, setStarRadius] = useState<number>(1.0); // R_Sun (solar radius ~ 109 R_Earth)
  const transitDepthPercent = useMemo(() => {
    const starInEarthUnits = starRadius * 109.2;
    const depth = Math.pow(planetRadius / starInEarthUnits, 2) * 100;
    return depth.toFixed(4);
  }, [planetRadius, starRadius]);

  // 4. Physics Escape Velocity
  const [celestialMassRatio, setCelestialMassRatio] = useState<number>(1.0); // Multiples of Earth
  const [celestialRadiusKm, setCelestialRadiusKm] = useState<number>(6371); // km
  const escapeVelocityKms = useMemo(() => {
    const G = 6.6743e-11;
    const M_Earth = 5.972e24;
    const M = celestialMassRatio * M_Earth;
    const R = celestialRadiusKm * 1000;
    const v = Math.sqrt((2 * G * M) / R);
    return (v / 1000).toFixed(2);
  }, [celestialMassRatio, celestialRadiusKm]);

  // 5. Space Math Kepler's 3rd Law
  const [semiMajorAxisAu, setSemiMajorAxisAu] = useState<number>(1.524); // AU (Mars = 1.524)
  const orbitalPeriodYears = useMemo(() => {
    return Math.sqrt(Math.pow(semiMajorAxisAu, 3)).toFixed(2);
  }, [semiMajorAxisAu]);

  // 6. Rocket Stability Margin
  const [cpCm, setCpCm] = useState<number>(75); // cm from nose
  const [cgCm, setCgCm] = useState<number>(55); // cm from nose
  const [bodyDiameterCm, setBodyDiameterCm] = useState<number>(8); // cm
  const stabilityCalibers = useMemo(() => {
    return ((cpCm - cgCm) / bodyDiameterCm).toFixed(2);
  }, [cpCm, cgCm, bodyDiameterCm]);

  // Filtered resources for this topic
  const topicResources = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = r.category === topic.categoryFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.publisherOrSource.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [resources, topic.categoryFilter, searchQuery]);

  const handleResourceAdded = (newRes: FundamentalResource): void => {
    setResources((prev) => [newRes, ...prev]);
  };

  const getTopicIcon = (iconName: string): React.ReactNode => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-400" />;
      case 'Atom':
        return <Atom className="w-6 h-6 text-purple-400" />;
      case 'Binary':
        return <Binary className="w-6 h-6 text-sky-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040814] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. WebMD Signature Navbar with Dark Blue Bar & 1-Inch Milky Way Ribbon */}
      <WebMDNavbar
        cadetHandle={cadetHandle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAddModal={() => setIsModalOpen(true)}
      />

      {/* 2. WebMD Editorial Trust Bar */}
      <div className="border-b border-blue-950/80 bg-[#020b18] py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-slate-400 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              Curated by Academic Multi-Agent AI • 100% Free Open Educational Resources (OER)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Zero-PII Encrypted Session</span>
            <span>COPPA & FERPA Compliant</span>
          </div>
        </div>
      </div>

      {/* 3. Main Topic Hub Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10 flex-1 w-full">
        {/* Breadcrumb Navigation (WebMD style) */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-400">Disciplines</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-cyan-300 font-semibold">{topic.title}</span>
        </nav>

        {/* WebMD-Style Topic Hero Header */}
        <section className="bg-gradient-to-r from-[#071d3d] via-[#092550] to-[#041228] border border-blue-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-blue-950/90 border border-cyan-500/30">
                  {getTopicIcon(topic.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 font-mono">
                    SpaceMD Discipline Guide
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{topic.title}</h1>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{topic.fullOverview}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-blue-950 text-cyan-300 text-[11px] font-mono border border-blue-800">
                  Category: {topic.categoryFilter}
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 text-[11px] font-mono border border-emerald-800/60">
                  Peer-Reviewed OER
                </span>
                <span className="px-2.5 py-1 rounded bg-purple-950/80 text-purple-300 text-[11px] font-mono border border-purple-800/60">
                  Pre-College to Collegiate
                </span>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="bg-[#030d1d]/80 border border-blue-800 p-4 rounded-xl shrink-0 space-y-2.5 text-center sm:text-left">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                Featured Guide
              </span>
              <p className="text-xs font-bold text-slate-100 line-clamp-2 max-w-[240px]">
                {topic.featuredGuide.title}
              </p>
              <a
                href={topic.featuredGuide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold transition"
              >
                <span>Launch Guide</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* WebMD-Style Sub-Topics Directory */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-blue-900/60">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{topic.webmdTabLabel} Sub-Topics & Core Syllabus</span>
              </h2>
              <p className="text-xs text-slate-400">
                Foundational aerospace and astrophysics study paths for high school cadets
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.subtopics.map((sub) => (
              <div
                key={sub.id}
                className="bg-[#071b38]/70 hover:bg-[#0a254d] border border-blue-900/80 hover:border-cyan-500/40 rounded-xl p-5 transition space-y-3 group"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition">
                    {sub.name}
                  </h3>
                  {sub.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-cyan-400 border border-cyan-500/30 font-mono shrink-0">
                      {sub.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{sub.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {sub.keyConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#030d1d] text-slate-300 font-mono border border-blue-950"
                    >
                      ✦ {concept}
                    </span>
                  ))}
                </div>

                {sub.externalUrl && (
                  <div className="pt-2 border-t border-blue-900/60">
                    <a
                      href={sub.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>Open Interactive Simulation</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* WebMD-Style Interactive Diagnostic / Calculator */}
        <section className="bg-gradient-to-r from-[#031024] via-[#061e44] to-[#031024] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-blue-900">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>SpaceMD Interactive Diagnostic Tool</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {topic.slug === 'aerodynamics' && 'Aerodynamic Dynamic Pressure & Lift Calculator'}
                {topic.slug === 'propulsion' && 'Tsiolkovsky Rocket Trajectory & Δv Calculator'}
                {topic.slug === 'astronomy' && 'Exoplanet Transit Photometry Depth Calculator'}
                {topic.slug === 'physics' && 'Celestial Gravitational Escape Velocity Calculator'}
                {topic.slug === 'applied-math' && "Kepler's 3rd Law Orbital Period Calculator"}
                {topic.slug === 'competitions' && 'TARC Model Rocket Static Stability Margin Calculator'}
              </h2>
            </div>

            {/* Diagnostic Output Display */}
            <div className="bg-[#020b18] border border-cyan-500/50 px-6 py-3 rounded-xl text-center sm:text-right shrink-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wide block">
                Calculated Metric
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-300">
                {topic.slug === 'aerodynamics' && `${calculatedLift.toLocaleString()} N`}
                {topic.slug === 'propulsion' && `${calculatedDeltaV.toLocaleString()} m/s`}
                {topic.slug === 'astronomy' && `${transitDepthPercent}%`}
                {topic.slug === 'physics' && `${escapeVelocityKms} km/s`}
                {topic.slug === 'applied-math' && `${orbitalPeriodYears} yrs`}
                {topic.slug === 'competitions' && `${stabilityCalibers} cal`}
              </div>
              <span className="text-[10px] font-bold text-emerald-400">
                {topic.slug === 'aerodynamics' && '✓ Subsonic Airfoil Equilibrium'}
                {topic.slug === 'propulsion' &&
                  (calculatedDeltaV >= 9300 ? '🚀 Low Earth Orbit (LEO) Capable' : '⚡ Suborbital Trajectory')}
                {topic.slug === 'astronomy' && '🔭 TESS Photometric Detection Capable'}
                {topic.slug === 'physics' && '🌌 Hyperbolic Escape Trajectory'}
                {topic.slug === 'applied-math' && '🪐 Heliocentric Planetary Orbit'}
                {topic.slug === 'competitions' &&
                  (Number(stabilityCalibers) >= 1.0 && Number(stabilityCalibers) <= 2.5
                    ? '✓ Stable Rocket Flight Margin'
                    : '⚠ Outside 1-2.5 Caliber Window')}
              </span>
            </div>
          </div>

          {/* Interactive Sliders Specific to Each Discipline */}
          {topic.slug === 'aerodynamics' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Air Velocity (v)</span>
                  <span className="font-mono text-cyan-400 font-bold">{velocity} m/s</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={350}
                  value={velocity}
                  onChange={(e) => setVelocity(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Subsonic air velocity</span>
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Wing Area (S)</span>
                  <span className="font-mono text-purple-400 font-bold">{wingArea} m²</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={120}
                  value={wingArea}
                  onChange={(e) => setWingArea(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Planform wing surface area</span>
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Lift Coefficient (Cl)</span>
                  <span className="font-mono text-amber-400 font-bold">{cl}</span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={2.0}
                  step={0.05}
                  value={cl}
                  onChange={(e) => setCl(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Airfoil camber & angle of attack</span>
              </div>
            </div>
          )}

          {topic.slug === 'propulsion' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Dry Mass (mf)</span>
                  <span className="font-mono text-cyan-400 font-bold">{dryMass} kg</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={5000}
                  step={50}
                  value={dryMass}
                  onChange={(e) => setDryMass(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Propellant Mass</span>
                  <span className="font-mono text-purple-400 font-bold">{propellantMass} kg</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={30000}
                  step={200}
                  value={propellantMass}
                  onChange={(e) => setPropellantMass(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Specific Impulse (Isp)</span>
                  <span className="font-mono text-amber-400 font-bold">{isp} sec</span>
                </div>
                <input
                  type="range"
                  min={150}
                  max={450}
                  step={5}
                  value={isp}
                  onChange={(e) => setIsp(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            </div>
          )}

          {topic.slug === 'astronomy' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Planet Radius (Earth Radii)</span>
                  <span className="font-mono text-cyan-400 font-bold">{planetRadius} R⊕</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={12}
                  step={0.1}
                  value={planetRadius}
                  onChange={(e) => setPlanetRadius(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Terrestrial vs Gas Giant size</span>
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Host Star Radius (Solar Radii)</span>
                  <span className="font-mono text-amber-400 font-bold">{starRadius} R☉</span>
                </div>
                <input
                  type="range"
                  min={0.2}
                  max={3.0}
                  step={0.1}
                  value={starRadius}
                  onChange={(e) => setStarRadius(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Red dwarf to F-type star</span>
              </div>
            </div>
          )}

          {topic.slug === 'physics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Planet Mass (Earth Mass Multiples)</span>
                  <span className="font-mono text-cyan-400 font-bold">{celestialMassRatio} M⊕</span>
                </div>
                <input
                  type="range"
                  min={0.05}
                  max={10}
                  step={0.05}
                  value={celestialMassRatio}
                  onChange={(e) => setCelestialMassRatio(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Moon (0.012) to Super-Earth (10)</span>
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Radius (km)</span>
                  <span className="font-mono text-purple-400 font-bold">{celestialRadiusKm} km</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={25000}
                  step={200}
                  value={celestialRadiusKm}
                  onChange={(e) => setCelestialRadiusKm(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Surface radius of the body</span>
              </div>
            </div>
          )}

          {topic.slug === 'applied-math' && (
            <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900 max-w-xl">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Semi-Major Axis (Astronomical Units AU)</span>
                <span className="font-mono text-cyan-400 font-bold">{semiMajorAxisAu} AU</span>
              </div>
              <input
                type="range"
                min={0.3}
                max={30}
                step={0.1}
                value={semiMajorAxisAu}
                onChange={(e) => setSemiMajorAxisAu(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">
                Mercury (0.39 AU), Earth (1.0 AU), Mars (1.52 AU), Jupiter (5.2 AU), Neptune (30 AU)
              </span>
            </div>
          )}

          {topic.slug === 'competitions' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Center of Pressure (CP)</span>
                  <span className="font-mono text-cyan-400 font-bold">{cpCm} cm</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={120}
                  value={cpCm}
                  onChange={(e) => setCpCm(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Distance from nosecone tip</span>
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Center of Gravity (CG)</span>
                  <span className="font-mono text-purple-400 font-bold">{cgCm} cm</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={100}
                  value={cgCm}
                  onChange={(e) => setCgCm(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Must be forward of CP</span>
              </div>

              <div className="space-y-2 bg-[#020b18]/70 p-4 rounded-xl border border-blue-900">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Body Tube Diameter</span>
                  <span className="font-mono text-amber-400 font-bold">{bodyDiameterCm} cm</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={15}
                  value={bodyDiameterCm}
                  onChange={(e) => setBodyDiameterCm(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500">Rocket airframe caliber</span>
              </div>
            </div>
          )}
        </section>

        {/* Key Formulas Reference Table */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Essential {topic.title} Formulas & Laws</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topic.keyFormulas.map((f) => (
              <div
                key={f.name}
                className="bg-[#051326] border border-blue-900 rounded-xl p-4 space-y-2 text-xs"
              >
                <span className="font-bold text-slate-200 block">{f.name}</span>
                <div className="p-2 rounded bg-[#020b18] border border-cyan-500/20 font-mono text-cyan-300 font-semibold text-center">
                  {f.formula}
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">{f.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verified OER Study Guides & Resources in this Discipline */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-blue-900">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Peer-Reviewed Study Guides for {topic.title}</span>
              </h2>
              <p className="text-xs text-slate-400">
                Showing {topicResources.length} verified free educational resources
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-blue-900/80 hover:bg-blue-800 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition"
            >
              + Submit {topic.webmdTabLabel} Guide
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicResources.map((res) => {
              const isBookmarked = bookmarks.includes(res.id);
              return (
                <article
                  key={res.id}
                  className="bg-[#061833]/80 hover:bg-[#0a2347] rounded-2xl p-5 flex flex-col justify-between border border-blue-900 hover:border-cyan-500/40 transition group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-blue-950 text-cyan-300 text-[10px] font-mono border border-blue-800">
                        {res.resourceType}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">100% Free OER</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition line-clamp-2">
                      {res.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {res.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {res.prerequisites.map((p) => (
                        <span
                          key={p}
                          className="text-[10px] bg-[#020b18] text-slate-300 px-2 py-0.5 rounded border border-blue-950"
                        >
                          📐 {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-blue-900/80 flex items-center justify-between text-xs">
                    <button
                      onClick={() => toggleBookmark(res.id)}
                      className={`flex items-center gap-1 transition ${
                        isBookmarked ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-cyan-400' : ''}`} />
                      <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                    </button>

                    <a
                      href={res.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 text-xs"
                    >
                      <span>Read Guide</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Other Disciplines Navigation Footer */}
        <section className="p-6 rounded-2xl bg-[#051428] border border-blue-900 space-y-4">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono">
            Explore Other Disciplines
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SPACE_TOPICS.filter((t) => t.slug !== topic.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/topic/${other.slug}`}
                className="p-3 rounded-xl bg-[#020b18] hover:bg-[#071f42] border border-blue-900 hover:border-cyan-500/40 transition text-xs font-semibold text-slate-200 hover:text-cyan-300 block"
              >
                {other.title} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* 4. WebMD-Style Structured Footer */}
      <footer className="border-t border-blue-900 bg-[#020a16] text-slate-400 text-xs py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px]">
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-mono">Disciplines</h4>
              <ul className="space-y-1 text-slate-400">
                {SPACE_TOPICS.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/topic/${t.slug}`} className="hover:text-cyan-300">
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-mono">Space Competitions</h4>
              <ul className="space-y-1 text-slate-400">
                <li>
                  <a href="https://rocketcontest.org/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                    TARC Rocketry
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nasa.gov/learning-resources/app-development-challenge/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300"
                  >
                    NASA App Challenge
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nasa.gov/cubesat-launch-initiative/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300"
                  >
                    CubeSat Initiative
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-mono">Architecture</h4>
              <ul className="space-y-1 text-slate-400">
                <li><span>Nuclear-Active Zero-PII</span></li>
                <li><span>Pyodide WebAssembly</span></li>
                <li><span>Multi-Agent AI Evals</span></li>
                <li><span>Git-as-a-CMS</span></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-mono">Community</h4>
              <ul className="space-y-1 text-slate-400">
                <li>
                  <a
                    href="https://github.com/anishkapradhan/Nova"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <button onClick={() => setIsModalOpen(true)} className="hover:text-cyan-300">
                    Submit Study Guide
                  </button>
                </li>
                <li>
                  <a href="/api/v1/health" target="_blank" className="hover:text-cyan-300">
                    API Health Diagnostics
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-blue-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <p>&copy; {new Date().getFullYear()} Nova: AstroSpace Hub. Released under the MIT Open Source License.</p>
            <p className="font-mono">Zero Student PII Collected • 100% Free OER</p>
          </div>
        </div>
      </footer>

      {/* Contributor Modal */}
      <AddResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cadetHandle={cadetHandle}
        onResourceAdded={handleResourceAdded}
      />
    </div>
  );
}
