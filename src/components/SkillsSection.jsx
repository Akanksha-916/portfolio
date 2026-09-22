import React from 'react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-28 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Header Area - Preserved Exactly */}
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

        {/* Editorial Typographic Skills Listing - No Boxes/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* 01: Languages (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between min-h-[320px]">
            <div>
              {/* Category Header with Thin Rule */}
              <div className="flex items-center gap-2 mb-6 pb-2.5 border-b border-white/[0.08]">
                <span className="font-serif text-xs text-[#C99E75] font-normal">01</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                  Languages
                </span>
                <span className="w-8 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              {/* Typographic Skills Hierarchy */}
              <div className="space-y-3 font-serif">
                <p className="text-3xl sm:text-4xl text-white font-bold tracking-tight hover:text-[#C99E75] transition-colors cursor-default">
                  Java
                </p>
                <p className="text-2xl sm:text-3xl text-neutral-200 font-normal hover:text-white transition-colors cursor-default">
                  JavaScript
                </p>
                <p className="text-2xl sm:text-3xl italic text-neutral-300 font-normal hover:text-[#C99E75] transition-colors cursor-default">
                  Python
                </p>
                <p className="text-xl sm:text-2xl text-neutral-300 font-light hover:text-white transition-colors cursor-default">
                  C / C++
                </p>
                <p className="text-xl sm:text-2xl text-neutral-400 font-light tracking-wide hover:text-white transition-colors cursor-default">
                  SQL
                </p>
              </div>
            </div>

            <span className="text-[9px] font-sans uppercase tracking-[0.24em] text-neutral-400 pt-8 block font-light">
              The building blocks of my ideas.
            </span>
          </div>

          {/* 02: Frontend (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between min-h-[320px]">
            <div>
              {/* Category Header with Thin Rule */}
              <div className="flex items-center gap-2 mb-6 pb-2.5 border-b border-white/[0.08]">
                <span className="font-serif text-xs text-[#C99E75] font-normal">02</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                  Frontend
                </span>
                <span className="w-8 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              {/* Typographic Skills Hierarchy */}
              <div className="space-y-3 font-serif">
                <p className="text-3xl sm:text-4xl text-white font-bold tracking-tight hover:text-[#C99E75] transition-colors cursor-default">
                  React.js
                </p>
                <p className="text-2xl sm:text-3xl text-neutral-200 font-normal hover:text-white transition-colors cursor-default">
                  Next.js
                </p>
                <p className="text-2xl sm:text-3xl italic text-[#C99E75] font-normal hover:text-white transition-colors cursor-default">
                  Tailwind CSS
                </p>
                <p className="text-base font-sans text-neutral-300 font-light pt-1 hover:text-white transition-colors cursor-default">
                  HTML5
                </p>
                <p className="text-base font-sans text-neutral-400 font-light hover:text-white transition-colors cursor-default">
                  CSS3
                </p>
              </div>
            </div>

            <span className="text-[9px] font-sans uppercase tracking-[0.24em] text-neutral-400 pt-8 block font-light">
              Crafting interfaces people enjoy.
            </span>
          </div>

          {/* 03: Backend (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between min-h-[320px]">
            <div>
              {/* Category Header with Thin Rule */}
              <div className="flex items-center gap-2 mb-6 pb-2.5 border-b border-white/[0.08]">
                <span className="font-serif text-xs text-[#C99E75] font-normal">03</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                  Backend
                </span>
                <span className="w-8 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              {/* Typographic Skills Hierarchy */}
              <div className="space-y-3 font-serif">
                <p className="text-3xl sm:text-4xl text-white font-bold tracking-tight hover:text-[#C99E75] transition-colors cursor-default">
                  Spring Boot
                </p>
                <p className="text-2xl sm:text-3xl text-neutral-200 font-normal hover:text-white transition-colors cursor-default">
                  Node.js
                </p>
                <p className="text-2xl sm:text-3xl italic text-neutral-300 font-normal hover:text-[#C99E75] transition-colors cursor-default">
                  Express.js
                </p>
                <p className="text-xl sm:text-2xl text-neutral-300 font-light hover:text-white transition-colors cursor-default">
                  REST APIs
                </p>
              </div>
            </div>

            <span className="text-[9px] font-sans uppercase tracking-[0.24em] text-neutral-400 pt-8 block font-light">
              Logic that makes things work.
            </span>
          </div>

          {/* 04 & 05 Right Stack (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            {/* 04: Databases & Tools */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-white/[0.08]">
                <span className="font-serif text-xs text-[#C99E75] font-normal">04</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-neutral-400 font-light">
                  Databases & Tools
                </span>
                <span className="w-6 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 font-serif">
                  <p className="text-xl sm:text-2xl text-white font-bold hover:text-[#C99E75] transition-colors cursor-default">
                    PostgreSQL
                  </p>
                  <p className="text-lg sm:text-xl text-neutral-200 hover:text-white transition-colors cursor-default">
                    MySQL
                  </p>
                  <p className="text-lg sm:text-xl italic text-[#C99E75] hover:text-white transition-colors cursor-default">
                    MongoDB
                  </p>
                </div>
                <div className="space-y-1.5 text-xs font-sans text-neutral-400 font-light pt-1">
                  <p className="hover:text-white transition-colors cursor-default">Git & GitHub</p>
                  <p className="hover:text-white transition-colors cursor-default">Docker</p>
                  <p className="hover:text-white transition-colors cursor-default">Postman</p>
                  <p className="hover:text-white transition-colors cursor-default">Vercel</p>
                  <p className="hover:text-white transition-colors cursor-default">AWS</p>
                </div>
              </div>

              <span className="text-[9px] font-sans uppercase tracking-[0.24em] text-neutral-400 pt-4 block font-light">
                Store. Deploy. Collaborate.
              </span>
            </div>

            {/* 05: Currently Exploring */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-white/[0.08]">
                <span className="font-serif text-xs text-[#C99E75] font-normal">05</span>
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-neutral-400 font-light">
                  Currently Exploring
                </span>
                <span className="w-6 h-[1px] bg-white/[0.08] ml-auto" />
              </div>

              <div className="space-y-2.5 font-serif text-base sm:text-lg text-neutral-200">
                <p>
                  <span className="font-semibold text-white hover:text-[#C99E75] transition-colors cursor-default">
                    System Design
                  </span>{' '}
                  <span className="text-neutral-400 font-light">/</span>{' '}
                  <span className="italic text-[#C99E75] hover:text-white transition-colors cursor-default">
                    Spring AI
                  </span>
                </p>
                <p>
                  <span className="text-neutral-300 hover:text-white transition-colors cursor-default">
                    Advanced DSA
                  </span>{' '}
                  <span className="text-neutral-400 font-light">/</span>{' '}
                  <span className="text-neutral-400 text-xs font-sans hover:text-neutral-200 transition-colors cursor-default">
                    Cloud Technologies
                  </span>
                </p>
              </div>

              <span className="text-[9px] font-sans uppercase tracking-[0.24em] text-neutral-400 pt-4 block font-light">
                Learning today. Building tomorrow.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Strip */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-light text-neutral-400">
          <p className="italic font-serif text-neutral-400 text-sm">
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
