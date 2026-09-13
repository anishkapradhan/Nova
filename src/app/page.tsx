'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Bookmark,
  ExternalLink,
  Flame,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { useCadetSession } from '@/lib/session/CadetSessionContext';
import { CANONICAL_RESOURCES } from '@/app/api/v1/fundamentals/resources/route';
import { FundamentalResource } from '@/types/fundamentals';
import { AddResourceModal } from '@/components/fundamentals/AddResourceModal';
import { WebMDNavbar } from '@/components/layout/WebMDNavbar';

export default function HomePage(): React.JSX.Element {
  const { cadetHandle, bookmarks, toggleBookmark } = useCadetSession();

  const [resources, setResources] = useState<FundamentalResource[]>(CANONICAL_RESOURCES);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Disciplines');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Tsiolkovsky Rocket Equation Sandbox State
  const [dryMass, setDryMass] = useState<number>(1200); // kg
  const [propellantMass, setPropellantMass] = useState<number>(8500); // kg
  const [isp, setIsp] = useState<number>(310); // seconds

  const g0 = 9.80665;
  const initialMass = dryMass + propellantMass;
  const deltaV = useMemo(() => {
    return Math.round(isp * g0 * Math.log(initialMass / dryMass));
  }, [isp, initialMass, dryMass]);

  // Filtered resources
  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      const matchesCategory =
        selectedCategory === 'All Disciplines' || res.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        res.title.toLowerCase().includes(q) ||
        res.summary.toLowerCase().includes(q) ||
        res.publisherOrSource.toLowerCase().includes(q) ||
        res.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [resources, selectedCategory, searchQuery]);

  const handleResourceAdded = (newResource: FundamentalResource): void => {
    setResources((prev) => [newResource, ...prev]);
  };

  const featuredResource = resources[0]!;

  return (
    <div className="min-h-screen flex flex-col bg-[#060813] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* WebMD-style Mega-Menu Dropdown Navbar */}
      <WebMDNavbar
        cadetHandle={cadetHandle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={setSelectedCategory}
        onOpenAddModal={() => setIsModalOpen(true)}
      />

      {/* WebMD-style Trust Bar / Editorial Disclaimer */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-2 text-xs">
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

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12 flex-1 w-full">
        {/* WebMD-style Featured Editorial Split (Headline Story + Trending List) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Editorial Card (60% width) */}
          <article className="lg:col-span-8 glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group relative border border-slate-800 hover:border-cyan-500/40">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <Image
                src="/images/milky_way_header.jpg"
                alt="Milky Way over Observatory"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Featured Space Guide
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono backdrop-blur-md">
                  NASA Glenn Research
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 -mt-6 relative z-10 bg-slate-950/90">
              <h1 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition">
                {featuredResource.title}
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                {featuredResource.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>Prerequisites:</span>
                  {featuredResource.prerequisites.map((p) => (
                    <span key={p} className="px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                      {p}
                    </span>
                  ))}
                </div>

                <a
                  href={featuredResource.targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition shadow-md shadow-cyan-500/20"
                >
                  <span>Launch NASA Lab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* Trending & Quick Access Panel (WebMD sidebar style) */}
          <aside className="lg:col-span-4 flex flex-col justify-between glass-panel rounded-2xl p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Trending Study Guides</span>
              </h2>
              <span className="text-[10px] text-slate-500 font-mono">Peer-Reviewed</span>
            </div>

            <div className="space-y-3.5 divide-y divide-slate-800/60 flex-1">
              {resources.slice(1, 5).map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 group">
                  <div className="flex items-center justify-between text-[11px] text-purple-300 font-mono mb-1">
                    <span>{item.category.split('&')[0]?.trim()}</span>
                    <span className="text-slate-500 text-[10px]">{item.difficultyLevel.split('(')[0]?.trim()}</span>
                  </div>
                  <a
                    href={item.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition line-clamp-2"
                  >
                    {item.title}
                  </a>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition"
              >
                + Submit a New Guide
              </button>
            </div>
          </aside>
        </section>

        {/* WebMD-Style "Interactive Tool" Banner: Rocket Equation Diagnostic */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>SpaceMD Interactive Tool: Physics Diagnostic</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Tsiolkovsky Rocket Trajectory & Orbit Calculator
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Δv = Isp · g₀ · ln(m₀ / mf)
              </p>
            </div>

            <div className="bg-slate-950 border border-cyan-500/40 px-5 py-3 rounded-xl text-center sm:text-right shrink-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wide">
                Computed Δv Budget
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-300">
                {deltaV.toLocaleString()} <span className="text-sm text-slate-400 font-sans">m/s</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-400">
                {deltaV >= 9300 ? '🚀 Low Earth Orbit (LEO) Capable' : '⚡ Suborbital Trajectory'}
              </span>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
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
              <span className="text-[10px] text-slate-500">Payload + empty structure</span>
            </div>

            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
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
              <span className="text-[10px] text-slate-500">Usable fuel & oxidizer</span>
            </div>

            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
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
              <span className="text-[10px] text-slate-500">Engine nozzle efficiency</span>
            </div>
          </div>
        </section>

        {/* Resources Catalog by Topic */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">
                  {selectedCategory === 'All Disciplines' ? 'Complete Resource Directory' : selectedCategory}
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Showing {filteredResources.length} verified open educational resources
              </p>
            </div>

            {selectedCategory !== 'All Disciplines' && (
              <button
                onClick={() => setSelectedCategory('All Disciplines')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 text-xs text-slate-300 hover:text-cyan-300 border border-slate-700"
              >
                <Filter className="w-3.5 h-3.5 text-cyan-400" />
                <span>Reset to All Disciplines</span>
              </button>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => {
              const isBookmarked = bookmarks.includes(res.id);
              return (
                <article
                  key={res.id}
                  className="glass-panel rounded-2xl p-5 flex flex-col justify-between group border border-slate-800/80 hover:border-cyan-500/40"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-purple-950/70 border border-purple-500/30 text-purple-300 text-[10px] font-medium tracking-wide">
                        {res.category}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">
                        100% Free OER
                      </span>
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
                          className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/40"
                        >
                          📐 {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
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
      </main>

      {/* WebMD-style Structured Footer */}
      <footer className="border-t border-slate-800 bg-[#050711] text-slate-400 text-xs py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px]">
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-mono">Disciplines</h4>
              <ul className="space-y-1 text-slate-400">
                <li><button onClick={() => setSelectedCategory('Aerodynamics & Fluid Dynamics')} className="hover:text-cyan-300">Aerodynamics</button></li>
                <li><button onClick={() => setSelectedCategory('Astronomy & Planetary Science')} className="hover:text-cyan-300">Astronomy</button></li>
                <li><button onClick={() => setSelectedCategory('Physics & Classical Mechanics')} className="hover:text-cyan-300">Classical Physics</button></li>
                <li><button onClick={() => setSelectedCategory('Aerospace Engineering & Propulsion')} className="hover:text-cyan-300">Propulsion</button></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-mono">Space Competitions</h4>
              <ul className="space-y-1 text-slate-400">
                <li><a href="https://rocketcontest.org/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">TARC Rocketry</a></li>
                <li><a href="https://www.nasa.gov/learning-resources/app-development-challenge/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">NASA App Challenge</a></li>
                <li><a href="https://www.nasa.gov/cubesat-launch-initiative/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">CubeSat Initiative</a></li>
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
                <li><a href="https://github.com/anishkapradhan/Nova" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub Repository</a></li>
                <li><button onClick={() => setIsModalOpen(true)} className="hover:text-cyan-300">Submit Study Guide</button></li>
                <li><a href="/api/v1/health" target="_blank" className="hover:text-cyan-300">API Health Diagnostics</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
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
