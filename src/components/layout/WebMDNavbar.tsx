'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Rocket,
  Search,
  ChevronDown,
  ShieldCheck,
  Plus,
  Compass,
  Atom,
  Flame,
  Binary,
  Trophy,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export interface TopicDropdownItem {
  name: string;
  description: string;
  categoryFilter?: string;
  searchFilter?: string;
  isExternal?: boolean;
  url?: string;
  badge?: string;
}

export interface NavTopicMenu {
  title: string;
  icon: React.ReactNode;
  categoryFilter?: string;
  items: TopicDropdownItem[];
}

interface WebMDNavbarProps {
  cadetHandle: string;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectCategory: (category: string) => void;
  onOpenAddModal: () => void;
}

export function WebMDNavbar({
  cadetHandle,
  searchQuery,
  onSearchChange,
  onSelectCategory,
  onOpenAddModal,
}: WebMDNavbarProps): React.JSX.Element {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const topics: NavTopicMenu[] = [
    {
      title: 'Aerodynamics & Fluids',
      icon: <Compass className="w-4 h-4 text-cyan-400" />,
      categoryFilter: 'Aerodynamics & Fluid Dynamics',
      items: [
        {
          name: "NASA Beginner's Guide to Aeronautics",
          description: 'Foundational lift, drag, airfoils, and wind-tunnel testing guides.',
          categoryFilter: 'Aerodynamics & Fluid Dynamics',
          badge: 'NASA Glenn',
        },
        {
          name: 'NASA FoilSim Airfoil Simulator',
          description: 'Interactive camber, angle of attack, and pressure distribution sandbox.',
          categoryFilter: 'Aerodynamics & Fluid Dynamics',
          badge: 'Interactive Lab',
        },
        {
          name: 'Supersonic Flight & Mach Numbers',
          description: 'Compressible flow, shockwaves, and sound barrier physics.',
          categoryFilter: 'Aerodynamics & Fluid Dynamics',
        },
        {
          name: 'Boundary Layers & Reynolds Number',
          description: 'Laminar to turbulent fluid dynamics transitions.',
          categoryFilter: 'Aerodynamics & Fluid Dynamics',
        },
      ],
    },
    {
      title: 'Astronomy & Planetary',
      icon: <Atom className="w-4 h-4 text-purple-400" />,
      categoryFilter: 'Astronomy & Planetary Science',
      items: [
        {
          name: 'OpenStax Astronomy 2e Textbook',
          description: 'Comprehensive, peer-reviewed solar system and astrophysics text.',
          categoryFilter: 'Astronomy & Planetary Science',
          badge: 'Open Textbook',
        },
        {
          name: 'MIT OCW Introduction to Astronomy',
          description: 'Collegiate lecture series (8.282J) on stellar evolution and orbits.',
          categoryFilter: 'Astronomy & Planetary Science',
          badge: 'MIT 8.282J',
        },
        {
          name: 'Keplerian Planetary Orbits',
          description: 'Elliptical orbits, semi-major axis, and gravitational laws.',
          categoryFilter: 'Astronomy & Planetary Science',
        },
        {
          name: 'Exoplanet Transit Photometry',
          description: 'Light curve dips and planetary radius determinations.',
          categoryFilter: 'Astronomy & Planetary Science',
        },
      ],
    },
    {
      title: 'Physics & Mechanics',
      icon: <Atom className="w-4 h-4 text-emerald-400" />,
      categoryFilter: 'Physics & Classical Mechanics',
      items: [
        {
          name: 'OpenStax University Physics Vol 1 & 2',
          description: 'Calculus-based kinematics, dynamics, rotational energy, and gravity.',
          categoryFilter: 'Physics & Classical Mechanics',
          badge: 'AP Physics C',
        },
        {
          name: 'HyperPhysics Concept Mind-Map',
          description: 'Interactive concept map with real-time numeric calculations.',
          categoryFilter: 'Physics & Classical Mechanics',
          badge: 'GSU Lab',
        },
        {
          name: "Newton's Laws of Motion & Gravitation",
          description: 'Fundamental mechanics applied to orbital vehicles.',
          categoryFilter: 'Physics & Classical Mechanics',
        },
        {
          name: 'Rotational Inertia & Gyroscopic Stability',
          description: 'Spacecraft reaction wheels and spin stabilization.',
          categoryFilter: 'Physics & Classical Mechanics',
        },
      ],
    },
    {
      title: 'Propulsion & Rocketry',
      icon: <Flame className="w-4 h-4 text-orange-400" />,
      categoryFilter: 'Aerospace Engineering & Propulsion',
      items: [
        {
          name: 'NASA Basics of Space Flight',
          description: 'JPL manual on rocket propulsion, telecommunications, and deep space.',
          categoryFilter: 'Aerospace Engineering & Propulsion',
          badge: 'NASA JPL',
        },
        {
          name: 'OpenRocket Flight Simulator Guide',
          description: 'Full 6-DOF rocket trajectory, stability margin, and motor curves.',
          categoryFilter: 'Aerospace Engineering & Propulsion',
          badge: 'TARC Rocketry',
        },
        {
          name: 'Tsiolkovsky Rocket Equation & Δv',
          description: 'Mass ratio and specific impulse calculations.',
          categoryFilter: 'Aerospace Engineering & Propulsion',
        },
        {
          name: 'Solid vs Liquid vs Ion Propulsion',
          description: 'Chemical engines, Hall-effect thrusters, and nuclear thermal.',
          categoryFilter: 'Aerospace Engineering & Propulsion',
        },
      ],
    },
    {
      title: 'Applied Space Math',
      icon: <Binary className="w-4 h-4 text-sky-400" />,
      categoryFilter: 'Applied Space Mathematics',
      items: [
        {
          name: "Paul's Online Math Notes",
          description: 'Calculus I, II, III, vector algebra, and differential equations.',
          categoryFilter: 'Applied Space Mathematics',
          badge: 'Lamar Univ',
        },
        {
          name: 'Vector Cross-Products & Torque',
          description: 'Orbital plane vectors, angular momentum, and state vectors.',
          categoryFilter: 'Applied Space Mathematics',
        },
        {
          name: 'Differential Equations in Orbital Mechanics',
          description: 'Two-body problem and numerical trajectory integration.',
          categoryFilter: 'Applied Space Mathematics',
        },
      ],
    },
    {
      title: 'Competitions & Radar',
      icon: <Trophy className="w-4 h-4 text-amber-400" />,
      items: [
        {
          name: 'The American Rocketry Challenge (TARC)',
          description: 'Nationwide model rocketry competition for high school teams.',
          badge: 'Grades 9-12',
          url: 'https://rocketcontest.org/',
          isExternal: true,
        },
        {
          name: 'NASA App Development Challenge (ADC)',
          description: 'Code a 3D visualization app for Artemis Moon missions.',
          badge: 'NASA Artemis',
          url: 'https://www.nasa.gov/learning-resources/app-development-challenge/',
          isExternal: true,
        },
        {
          name: 'High School CubeSat Initiatives',
          description: 'Guidelines to build, program, and launch 1U CubeSats.',
          badge: 'CubeSat',
          url: 'https://www.nasa.gov/cubesat-launch-initiative/',
          isExternal: true,
        },
      ],
    },
  ];

  const handleItemClick = (item: TopicDropdownItem): void => {
    if (item.isExternal && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.categoryFilter) {
      onSelectCategory(item.categoryFilter);
      if (item.searchFilter) {
        onSearchChange(item.searchFilter);
      }
    }
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#060813] border-b border-slate-800 shadow-xl" ref={navRef}>
      {/* Top Brand & Utility Header (WebMD style top-tier) */}
      <div className="border-b border-slate-800/80 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#060813] rounded-[10px] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-300 via-sky-100 to-purple-300 bg-clip-text text-transparent">
                  NOVA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                  SpaceMD
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
                Pre-College Aerospace & Astronomy Portal
              </p>
            </div>
          </div>

          {/* WebMD-style Central Prominent Search Bar */}
          <div className="flex-1 max-w-xl mx-2 hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search topics, NASA guides, airfoils, orbits, formulas..."
                className="w-full pl-10 pr-24 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <button
                type="button"
                className="absolute right-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded text-xs font-semibold transition"
              >
                Search
              </button>
            </div>
          </div>

          {/* Right Cadet Badge & Contribute Action */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="hidden lg:block text-left">
                <span className="block text-[10px] text-slate-400 uppercase font-mono leading-none">
                  Authenticated Cadet
                </span>
                <span className="font-mono font-bold text-cyan-300 text-xs">{cadetHandle}</span>
              </div>
              <span className="lg:hidden font-mono text-cyan-300 font-semibold">{cadetHandle}</span>
            </div>

            <button
              onClick={onOpenAddModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs transition shadow-md shadow-cyan-500/20"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Resource</span>
            </button>
          </div>
        </div>
      </div>

      {/* WebMD-style Mega-Menu Dropdown Tab Bar */}
      <nav className="border-b border-slate-800 bg-[#080b18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between overflow-x-auto scrollbar-none">
          <ul className="flex items-center gap-1 sm:gap-2 text-xs font-medium py-1">
            {/* "All Topics" Direct Button */}
            <li>
              <button
                onClick={() => {
                  onSelectCategory('All Disciplines');
                  setOpenDropdown(null);
                }}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition whitespace-nowrap flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>All Topics</span>
              </button>
            </li>

            {/* Topic Tabs with Dropdown Menu */}
            {topics.map((topic) => {
              const isOpen = openDropdown === topic.title;

              return (
                <li key={topic.title} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : topic.title)}
                    onMouseEnter={() => setOpenDropdown(topic.title)}
                    className={`px-3 py-2 rounded-md transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                      isOpen
                        ? 'bg-slate-800 text-cyan-300 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {topic.icon}
                    <span>{topic.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-500'
                      }`}
                    />
                  </button>

                  {/* WebMD Dropdown Menu Panel */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute left-0 top-full mt-1 w-80 sm:w-96 bg-slate-900/95 border border-cyan-500/30 rounded-xl shadow-2xl p-3 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
                    >
                      <div className="pb-2 mb-2 border-b border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                          {topic.title} Guides
                        </span>
                        {topic.categoryFilter && (
                          <button
                            onClick={() => {
                              onSelectCategory(topic.categoryFilter!);
                              setOpenDropdown(null);
                            }}
                            className="text-[11px] text-slate-400 hover:text-cyan-300 underline"
                          >
                            View All &rarr;
                          </button>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        {topic.items.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => handleItemClick(item)}
                            className="p-2.5 rounded-lg hover:bg-slate-800/90 transition cursor-pointer group border border-transparent hover:border-slate-700"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition text-xs">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 shrink-0 font-mono">
                                  {item.badge}
                                </span>
                              )}
                              {item.isExternal && (
                                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
