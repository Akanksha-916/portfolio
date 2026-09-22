import React from 'react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-28 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* Left: Section Label + Large Editorial Headline */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light">
              02 // Skills
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif text-white tracking-tight leading-[1.08]">
              Tools that <br />
              turn ideas into <br />
              <span className="italic font-serif font-normal text-[#C99E75]">
                real solutions.
              </span>
            </h2>
          </div>

          {/* Center/Right: Sub-text */}
          <div className="lg:col-span-4 lg:pt-8 space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 block font-light">
              Continuously Exploring
            </span>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed">
              A blend of languages, frameworks, and tools I use to build, learn, and create. Always learning, always curious.
            </p>
          </div>

          {/* Far Right: Handwritten Editorial Accent */}
          <div className="lg:col-span-2 flex flex-col lg:items-end lg:pt-6">
            <div className="text-left lg:text-right font-serif italic text-sm sm:text-base text-[#C99E75]/90 leading-tight space-y-0.5 select-none">
              <p>Better</p>
              <p>Tools</p>
              <p>Bigger</p>
              <p>Possibilities</p>
              <span className="w-8 h-[1px] bg-[#C99E75]/40 block mt-2 lg:ml-auto" />
            </div>
          </div>
        </div>

        {/* 5 Numbered Skill Blocks Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* 01: Languages (3 cols) */}
          <div className="lg:col-span-3 relative p-6 rounded-2xl bg-transparent border border-white/[0.04] flex flex-col justify-between min-h-[290px]">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/[0.06]">
                <span className="font-serif text-xs text-[#C99E75]">01</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-neutral-400 font-light">
                  Languages
                </span>
                <span className="w-8 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              <div className="space-y-2.5 font-serif">
                <p className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  Java
                </p>
                <p className="text-xl sm:text-2xl text-neutral-200 font-normal">
                  JavaScript
                </p>
                <p className="text-xl sm:text-2xl text-neutral-300 font-light tracking-wide">
                  SQL
                </p>
              </div>
            </div>

            <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-neutral-400 pt-6 block font-light">
              The building blocks of my ideas.
            </span>
          </div>

          {/* 02: Frontend (3 cols) */}
          <div className="lg:col-span-3 relative p-6 rounded-2xl bg-transparent border border-white/[0.04] flex flex-col justify-between min-h-[290px]">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/[0.06]">
                <span className="font-serif text-xs text-[#C99E75]">02</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-neutral-400 font-light">
                  Frontend
                </span>
                <span className="w-8 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              <div className="space-y-2.5 font-serif">
                <p className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  React.js
                </p>
                <p className="text-xl sm:text-2xl italic text-[#C99E75] font-normal">
                  Tailwind CSS
                </p>
                <p className="text-sm font-sans text-neutral-300 font-light pt-1">
                  HTML5 · CSS3
                </p>
              </div>
            </div>

            <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-neutral-400 pt-6 block font-light">
              Crafting interfaces people enjoy.
            </span>
          </div>

          {/* 03: Backend (3 cols) */}
          <div className="lg:col-span-3 relative p-6 rounded-2xl bg-transparent border border-white/[0.04] flex flex-col justify-between min-h-[290px]">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/[0.06]">
                <span className="font-serif text-xs text-[#C99E75]">03</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-neutral-400 font-light">
                  Backend
                </span>
                <span className="w-8 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              <div className="space-y-2.5 font-serif">
                <p className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  Spring Boot
                </p>
                <p className="text-xl sm:text-2xl text-neutral-200 font-normal">
                  REST APIs
                </p>
                <p className="text-sm font-sans text-neutral-400 font-light pt-1">
                  Spring Data JPA · JWT
                </p>
              </div>
            </div>

            <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-neutral-400 pt-6 block font-light">
              Logic that makes things work.
            </span>
          </div>

          {/* 04 & 05 Right Stack (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* 04: Databases & Tools */}
            <div className="p-6 rounded-2xl bg-transparent border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                <span className="font-serif text-xs text-[#C99E75]">04</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-400 font-light">
                  Databases & Tools
                </span>
                <span className="w-6 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 font-serif">
                  <p className="text-base sm:text-lg text-white font-bold">PostgreSQL</p>
                  <p className="text-sm sm:text-base text-neutral-200">MySQL</p>
                  <p className="text-sm sm:text-base italic text-[#C99E75]">MongoDB</p>
                </div>
                <div className="space-y-1 text-xs font-sans text-neutral-400 font-light">
                  <p>Git & GitHub</p>
                  <p>Postman</p>
                  <p>Vercel</p>
                  <p>AWS</p>
                </div>
              </div>

              <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-neutral-400 pt-4 block font-light">
                Store. Deploy. Collaborate.
              </span>
            </div>

            {/* 05: Currently Exploring */}
            <div className="p-6 rounded-2xl bg-transparent border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                <span className="font-serif text-xs text-[#C99E75]">05</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-400 font-light">
                  Currently Exploring
                </span>
                <span className="w-6 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              <div className="space-y-2 font-serif text-sm sm:text-base text-neutral-200">
                <p>
                  <span className="font-semibold text-white">System Design</span>{' '}
                  <span className="text-neutral-400 font-light">/</span>{' '}
                  <span className="italic text-[#C99E75]">Spring AI</span>
                </p>
                <p>
                  <span className="text-neutral-300">Advanced DSA</span>{' '}
                  <span className="text-neutral-400 font-light">/</span>{' '}
                  <span className="text-neutral-400 text-xs font-sans">Cloud Technologies</span>
                </p>
              </div>

              <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-neutral-400 pt-4 block font-light">
                Learning today. Building tomorrow.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-light text-neutral-400">
          <p className="italic font-serif text-neutral-400">
            "Good tools don't just make development easier, they make{' '}
            <span className="italic text-[#C99E75]">better ideas possible.</span>"
          </p>
          <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-neutral-400">
            Learn · Build · Improve · Repeat
          </span>
        </div>
      </div>
    </section>
  );
}
