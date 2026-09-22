import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-36 relative border-t border-white/[0.06] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Main Two-Column Editorial Intro Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Title & Editorial Headline */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light">
              About
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.12]">
              A little about <br />
              <span className="italic font-serif font-normal text-[#C99E75]">
                who I am.
              </span>
            </h2>
          </div>

          {/* Right Column: Three Clean Readable Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed lg:pt-8">
            <p>
              I'm a Computer Science student interested in backend engineering and building practical software systems.
            </p>
            <p>
              My current focus is Java, Spring Boot, REST APIs, database design, and strengthening my problem-solving skills through Data Structures & Algorithms.
            </p>
            <p>
              I enjoy turning ideas into working products and continuously exploring areas like system design and Spring AI.
            </p>
          </div>
        </div>

        {/* Information Row */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
            {/* Column 1: Education */}
            <div className="space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Education
              </span>
              <p className="text-sm font-sans text-neutral-300 font-light leading-relaxed">
                B.Tech Computer Science <br />
                <span className="text-neutral-400 text-xs">2027</span>
              </p>
            </div>

            {/* Column 2: Focus */}
            <div className="space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Focus
              </span>
              <p className="text-sm font-sans text-neutral-300 font-light leading-relaxed">
                Java · Spring Boot <br />
                REST APIs · Backend · DSA
              </p>
            </div>

            {/* Column 3: Building */}
            <div className="space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Building
              </span>
              <div className="text-sm font-sans text-neutral-300 font-light space-y-1">
                <p>ParkEase</p>
                <p>TransitOps</p>
                <p>MediScanAI</p>
                <p>Sorting Visualizer</p>
              </div>
            </div>

            {/* Column 4: Learning */}
            <div className="space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Learning
              </span>
              <p className="text-sm font-sans text-neutral-300 font-light leading-relaxed">
                System Design <br />
                Spring AI · Advanced DSA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
