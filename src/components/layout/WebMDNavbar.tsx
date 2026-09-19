'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  ArrowRight,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import { SPACE_TOPICS, TopicDefinition } from '@/data/topics';
import { CURRICULUM_TOPICS } from '@/data/curriculum';

interface WebMDNavbarProps {
  cadetHandle: string;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectCategory?: (category: string) => void;
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
  const router = useRouter();

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

  const getTopicIcon = (iconName: string): React.ReactNode => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-4 h-4 text-cyan-400" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'Atom':
        return <Atom className="w-4 h-4 text-purple-400" />;
      case 'Binary':
        return <Binary className="w-4 h-4 text-sky-400" />;
      case 'Trophy':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  const handleSubtopicClick = (url?: string, category?: string): void => {
    if (url && url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-[100] shadow-2xl w-full min-w-full" ref={navRef}>
      {/* 1. WebMD-Style Top Tier: Deep Navy Header with Brand, Search & Cadet Status */}
      <div className="bg-[#041126] border-b border-[#0f2e5a] w-full min-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition">
              <div className="w-full h-full bg-[#030d1d] rounded-[10px] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-wider text-white group-hover:text-cyan-300 transition">
                  NOVA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-900/80 text-cyan-300 border border-cyan-400/40">
                  SpaceMD
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
                Pre-College Aerospace & Astronomy Portal
              </p>
            </div>
          </Link>

          {/* WebMD-Style Central Prominent Search Bar */}
          <div className="flex-1 max-w-xl mx-2 hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search topics, black holes, Kepler laws, spectra, quizzes..."
                className="w-full pl-10 pr-24 py-2 bg-[#020b18] border border-[#1b3d6d] rounded-lg text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <button
                type="button"
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    router.push(`/?search=${encodeURIComponent(searchQuery)}`);
                  }
                }}
                className="absolute right-1 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded text-xs font-semibold transition"
              >
                Search
              </button>
            </div>
          </div>

          {/* Right Cadet Badge & Contribute Action */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#071d3a] border border-[#1b3d6d] text-xs">
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
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition shadow-md shadow-cyan-500/20"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Resource</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. WebMD-Style Signature Dark Blue Horizontal Navigation Bar */}
      <nav className="bg-[#002855] border-b border-[#003b7a] relative z-50 w-full min-w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 overflow-x-auto lg:overflow-visible scrollbar-thin">
          <ul className="flex items-center justify-start gap-1 py-1 text-xs font-medium relative z-50">
            {/* Direct Link to All Topics / Home Directory */}
            <li>
              <Link
                href="/"
                onClick={() => {
                  if (onSelectCategory) {
                    onSelectCategory('All Disciplines');
                  }
                  setOpenDropdown(null);
                }}
                className="px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-[#003774] transition whitespace-nowrap flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
                <span className="font-semibold">All Topics</span>
              </Link>
            </li>

            {/* ASTRONOMY 2026-27 CURRICULUM MEGA DROPDOWN (12 Chapters) */}
            <li
              className="relative group z-50"
              onMouseEnter={() => setOpenDropdown('curriculum')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'curriculum' ? null : 'curriculum')}
                  className={`px-3.5 py-2 rounded-md transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer font-bold ${
                    openDropdown === 'curriculum'
                      ? 'bg-[#003f88] text-cyan-300 shadow-inner'
                      : 'text-amber-300 hover:text-white hover:bg-[#003774]'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Astronomy</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === 'curriculum' ? 'rotate-180 text-cyan-300' : 'text-amber-300'
                    }`}
                  />
                </button>
              </div>

              {openDropdown === 'curriculum' && (
                <div
                  className="absolute left-0 top-full mt-1 w-[92vw] max-w-[620px] max-h-[80vh] overflow-y-auto bg-[#040d1e]/98 border border-amber-500/60 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-amber-400/40 p-3 sm:p-4 z-[9999] pointer-events-auto backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 text-slate-100"
                >
                  <div className="pb-2.5 mb-2.5 border-b border-blue-900/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        2026–2027 Presentation Schedule
                      </span>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        12 Comprehensive Freshman Study Guides with 20-Question Quizzes & Flashcards
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CURRICULUM_TOPICS.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/topic/${c.slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="p-2.5 rounded-lg bg-[#071730] hover:bg-[#0f2c58] border border-blue-800/60 hover:border-cyan-400 transition group block shadow-sm"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-cyan-300 group-hover:text-white transition">
                            Ch {c.chapterNumber}: {c.title}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-950 text-amber-400 border border-amber-500/40 font-mono font-semibold">
                            20Q Quiz
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 line-clamp-1 mt-1">
                          {c.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Existing Horizontal Main Discipline Tabs */}
            {SPACE_TOPICS.map((topic: TopicDefinition) => {
              const isOpen = openDropdown === topic.slug;

              return (
                <li
                  key={topic.slug}
                  className="relative group z-50"
                  onMouseEnter={() => setOpenDropdown(topic.slug)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : topic.slug)}
                      className={`px-3 py-2 rounded-md transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer font-semibold ${
                        isOpen
                          ? 'bg-[#003f88] text-white shadow-inner'
                          : 'text-slate-100 hover:text-white hover:bg-[#003774]'
                      }`}
                    >
                      {getTopicIcon(topic.iconName)}
                      <span>{topic.webmdTabLabel}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-cyan-300' : 'text-blue-300'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expanded Sub-Topics Mega Dropdown Panel */}
                  {isOpen && (
                    <div
                      className="absolute left-0 top-full mt-1 w-[92vw] max-w-[480px] bg-[#040d1e]/98 border border-cyan-500/60 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-cyan-400/40 p-3 sm:p-4 z-[9999] pointer-events-auto backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 text-slate-100"
                    >
                      <div className="pb-2.5 mb-2.5 border-b border-blue-900/80 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 font-mono">
                            {topic.title} Hub
                          </span>
                          <p className="text-[11px] text-slate-300 line-clamp-1">{topic.shortDescription}</p>
                        </div>

                        <Link
                          href={`/topic/${topic.slug}`}
                          onClick={() => setOpenDropdown(null)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-white px-2.5 py-1 rounded bg-blue-900/90 border border-cyan-500/50 hover:border-cyan-300 transition shadow-sm"
                        >
                          <span>Explore Page</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="space-y-2">
                        {topic.subtopics.map((sub) => (
                          <div
                            key={sub.id}
                            onClick={() => handleSubtopicClick(sub.externalUrl, topic.categoryFilter)}
                            className="p-2.5 rounded-lg bg-[#071730]/60 hover:bg-[#0f2c58] transition cursor-pointer group border border-blue-900/50 hover:border-cyan-400"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-slate-200 group-hover:text-cyan-200 transition text-xs">
                                {sub.name}
                              </span>
                              {sub.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-950 text-cyan-400 border border-cyan-500/40 shrink-0 font-mono">
                                  {sub.badge}
                                </span>
                              )}
                              {sub.externalUrl && (
                                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-300" />
                              )}
                            </div>
                            <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-snug">
                              {sub.description}
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

      {/* 3. Nova Milky Way 1-Inch Stripe Ribbon Running Right Under the Top Bar */}
      <div className="relative z-0 h-11 sm:h-12 w-full min-w-full overflow-hidden border-b border-cyan-500/30 shadow-md">
        <Image
          src="/images/milky_way_header.jpg"
          alt="Nova Milky Way Cosmic Ribbon"
          fill
          priority
          className="object-cover object-center brightness-90 saturate-125 pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020b18]/90 via-[#071b3d]/40 to-[#020b18]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between text-xs pointer-events-none">
          <div className="flex items-center gap-2 text-white font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-[11px] text-cyan-200">
              Nova AstroSpace Ribbon
            </span>
            <span className="hidden md:inline text-slate-300 text-[10px]">
              • High School to Collegiate Aerospace & Astrophysics Hub
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono text-cyan-300/90 hidden sm:flex">
            <span>✦ 2026–27 Presentation Curriculum</span>
            <span className="hidden lg:inline">✦ 12 Interactive Astronomy Chapters</span>
            <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
              100% Free OER
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
