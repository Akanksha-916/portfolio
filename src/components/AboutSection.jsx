import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28 relative border-t border-white/[0.06] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-16 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C99E75] tracking-widest uppercase">
              01 // Profile
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              About Me
            </h2>
          </div>
          <span className="text-xs font-sans text-neutral-400 uppercase tracking-[0.2em] font-light hidden sm:inline">
            Engineering & Growth
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Personal Philosophy Quote (5 cols) */}
          <div className="lg:col-span-5">
            <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-neutral-400 block mb-5 font-light">
              Personal Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-neutral-100 leading-snug tracking-tight">
              "Turning algorithmic <span className="italic text-[#C99E75]">complexity</span> into elegant, reliable software products."
            </h3>
          </div>

          {/* Right Column: Genuine Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-300 font-sans font-light leading-relaxed">
            <p>
              I’m a Computer Science student with a strong interest in backend engineering and building practical software systems.
            </p>
            <p>
              My current focus is on Java, Spring Boot, REST APIs, database design, and strengthening my problem-solving skills through Data Structures & Algorithms.
            </p>
            <p className="text-neutral-400 text-base">
              I enjoy turning ideas into working products and continuously exploring areas like system design and Spring AI.
            </p>
          </div>
        </div>

        {/* Currently Information Area (Editorial Typography Layout) */}
        <div className="pt-10 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Currently */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C99E75] block font-medium">
                Currently
              </span>
              <p className="text-sm font-sans text-neutral-200 font-normal leading-relaxed">
                B.Tech Computer Science <br />
                <span className="text-xs text-neutral-400">2027</span>
              </p>
            </div>

            {/* Focus */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C99E75] block font-medium">
                Focus
              </span>
              <p className="text-sm font-sans text-neutral-200 font-normal leading-relaxed">
                Java · Spring Boot · REST APIs <br />
                <span className="text-xs text-neutral-400">Backend Development · DSA</span>
              </p>
            </div>

            {/* Building */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C99E75] block font-medium">
                Building
              </span>
              <p className="text-sm font-sans text-neutral-200 font-normal leading-relaxed">
                ParkEase · TransitOps <br />
                <span className="text-xs text-neutral-400">MediScanAI · Sorting Visualizer</span>
              </p>
            </div>

            {/* Learning */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C99E75] block font-medium">
                Learning
              </span>
              <p className="text-sm font-sans text-neutral-200 font-normal leading-relaxed">
                System Design · Spring AI <br />
                <span className="text-xs text-neutral-400">Advanced DSA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
