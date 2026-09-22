import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Code, Database, Sparkles, Terminal, Cpu, Layers, CheckCircle2, Copy } from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-grain"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-br from-[#E28743]/15 via-[#C99E75]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-950/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 my-auto">
        {/* Top Live Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181820]/90 border border-white/[0.09] text-xs text-neutral-300 mb-8 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] tracking-wider uppercase text-neutral-300">
            Open to Software Engineering Roles & Internships
          </span>
        </div>

        {/* Hero Grid: Editorial Typography + Interactive Architecture Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#E28743] mb-4">
              Computer Science Student · Software Developer
            </span>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif text-white tracking-tight leading-[1.08] mb-6">
              Building scalable <br />
              <span className="italic font-serif font-normal text-[#E28743]">
                digital systems
              </span>{' '}
              with <br />
              code & curiosity.
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-sans leading-relaxed mb-8">
              I'm a Computer Science student engineering resilient full-stack web applications,
              high-throughput backend microservices, and intelligent digital products that solve
              real-world challenges.
            </p>

            {/* CTA Buttons & Email snippet */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E28743] hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#E28743]/20 group"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#16161E] text-neutral-200 border border-white/[0.1] hover:border-white/30 font-medium text-xs uppercase tracking-wider hover:bg-[#1E1E28] transition-all duration-200"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.08] transition-all text-xs font-mono"
                title="Click to copy email"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{portfolioData.personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/[0.08] w-full max-w-lg">
              <div>
                <span className="block text-2xl font-serif font-bold text-white">05+</span>
                <span className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
                  Full-Stack Projects
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/[0.08]" />
              <div>
                <span className="block text-2xl font-serif font-bold text-white">SIH '24</span>
                <span className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
                  Hackathon Finalist
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/[0.08]" />
              <div>
                <span className="block text-2xl font-serif font-bold text-[#E28743]">Spring + React</span>
                <span className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
                  Core Architecture
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Console (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#121218]/90 border border-white/[0.1] shadow-2xl overflow-hidden backdrop-blur-xl group">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181822] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <Terminal className="w-3.5 h-3.5 text-[#E28743]" />
                  <span>system_architecture.java</span>
                </div>
                <div className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.06] text-neutral-400">
                  JDK 21
                </div>
              </div>

              {/* Code Preview Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-neutral-300 bg-[#0E0E14] overflow-x-auto">
                <div className="text-neutral-500 italic mb-2">
                  // Core full-stack developer profile contract
                </div>
                <p>
                  <span className="text-[#E28743]">public record</span>{' '}
                  <span className="text-neutral-100 font-semibold">SoftwareEngineer</span>(
                </p>
                <div className="pl-4 space-y-1 text-neutral-300">
                  <p>
                    <span className="text-neutral-400">String</span> name = <span className="text-emerald-400">"{portfolioData.personal.name}"</span>,
                  </p>
                  <p>
                    <span className="text-neutral-400">String</span> focus = <span className="text-emerald-400">"Full-Stack & Systems"</span>,
                  </p>
                  <p>
                    <span className="text-neutral-400">List&lt;String&gt;</span> stack = List.of(
                  </p>
                  <p className="pl-4 text-amber-200">
                    "Spring Boot", "React.js", "PostgreSQL", "Java", "Docker"
                  </p>
                  <p>),</p>
                  <p>
                    <span className="text-neutral-400">boolean</span> isReadyToShip = <span className="text-[#E28743]">true</span>
                  </p>
                </div>
                <p>);</p>

                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Continuous Build: Passed
                  </span>
                  <span className="font-mono text-neutral-500">Coverage: 98.4%</span>
                </div>
              </div>

              {/* Interactive Architecture Badges Grid */}
              <div className="p-4 bg-[#14141C] border-t border-white/[0.08] grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#1A1A24] border border-white/[0.06] flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#E28743]/15 text-[#E28743]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">Full-Stack Web</span>
                    <span className="text-[10px] text-neutral-400">Modular Component Architecture</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1A1A24] border border-white/[0.06] flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">Backend Systems</span>
                    <span className="text-[10px] text-neutral-400">Stateless RESTful APIs</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1A1A24] border border-white/[0.06] flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">Data Architecture</span>
                    <span className="text-[10px] text-neutral-400">PostgreSQL & SQL Modeling</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1A1A24] border border-white/[0.06] flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">AI Integrations</span>
                    <span className="text-[10px] text-neutral-400">Intelligent Pipelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-12 flex items-center justify-between text-xs font-mono text-neutral-500">
        <span className="uppercase tracking-widest text-[10px]">
          [01] / INTRODUCTION
        </span>
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
        <span className="uppercase tracking-widest text-[10px] hidden sm:inline">
          EST. 2024 — 2026
        </span>
      </div>
    </section>
  );
}
