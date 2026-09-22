import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Compass, GraduationCap, Target, Copy, CheckCircle2, ArrowUpRight, Code2 } from 'lucide-react';

export default function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-28 relative border-t border-white/[0.08] bg-[#0C0C10]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E28743] tracking-widest uppercase">
              01 // Profile
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              About Me
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
            Engineering & Growth
          </span>
        </div>

        {/* Editorial Double-Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Typography Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-4">
                Personal Philosophy
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-neutral-100 leading-snug tracking-tight mb-6">
                "Turning algorithmic <span className="italic text-[#E28743]">complexity</span> into elegant, reliable software products."
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                I believe software engineering is at its best when strong theoretical foundations in data structures and system design meet intuitive user interaction.
              </p>
            </div>

            {/* Quick Skills Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-[#14141C] border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="w-5 h-5 text-[#E28743]" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">
                  Core Engineering Strengths
                </span>
              </div>
              <ul className="text-xs text-neutral-300 space-y-2 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E28743]" />
                  Stateless REST API Design with Spring Boot & Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E28743]" />
                  Modular, Accessible Frontend Architectures with React
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E28743]" />
                  Relational Schema Modeling & SQL Performance Optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative Story & Metadata Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Story Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#E28743] first-letter:float-left first-letter:mr-3 first-letter:font-bold">
                {portfolioData.personal.aboutStory[0]}
              </p>
              <p>
                {portfolioData.personal.aboutStory[1]}
              </p>
              <p className="text-neutral-400 text-base">
                {portfolioData.personal.aboutStory[2]}
              </p>
            </div>

            {/* Metadata Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
              <div className="p-4 rounded-xl bg-[#13131A] border border-white/[0.06] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.05] text-[#E28743]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Based In
                  </span>
                  <span className="text-sm font-medium text-white">
                    {portfolioData.personal.meta.location}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#13131A] border border-white/[0.06] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.05] text-indigo-400">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Core Focus
                  </span>
                  <span className="text-sm font-medium text-white">
                    {portfolioData.personal.meta.focus}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#13131A] border border-white/[0.06] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.05] text-emerald-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Current Pursuit
                  </span>
                  <span className="text-sm font-medium text-white">
                    {portfolioData.personal.meta.education}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#13131A] border border-white/[0.06] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.05] text-amber-400">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Target Role
                  </span>
                  <span className="text-sm font-medium text-white">
                    {portfolioData.personal.meta.goal}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#181822] to-[#121217] border border-white/[0.08]">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-[#E28743]">
                  Direct Inquiries
                </span>
                <span className="text-sm font-medium text-white">
                  {portfolioData.personal.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-mono text-white transition-colors flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E28743] transition-colors flex items-center gap-1.5"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
