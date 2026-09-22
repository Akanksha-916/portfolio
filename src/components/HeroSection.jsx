import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-8 bg-[#09090B] overflow-hidden"
    >
      {/* Main Editorial Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10">
        {/* Small Identity Line */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-[1px] bg-neutral-800" />
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.26em] text-neutral-400 font-light">
            Computer Science Student · Developer
          </span>
        </div>

        {/* Large Editorial Headline - Scaled Proportionately with Intentional Max Width */}
        <div className="max-w-4xl mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif text-white tracking-tight leading-[1.05] sm:leading-[1.02]">
            Building ideas into <br />
            <span className="italic font-serif font-normal text-[#C99E75] inline-block mt-1">
              digital experiences.
            </span>
          </h1>
        </div>

        {/* Lower Left Editorial Grouping: Short Description + Connected CTAs */}
        <div className="max-w-xl space-y-8">
          <p className="text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed">
            Computer Science student exploring software development, technology, and creative problem solving.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#work"
              className="px-7 py-3 rounded-full bg-white text-black font-sans font-medium text-xs uppercase tracking-[0.16em] hover:bg-[#C99E75] hover:text-black transition-all duration-300 shadow-sm"
            >
              View My Work
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-200 py-1 font-light"
            >
              <span>About</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Bottom Metadata Row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full pt-12 relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-neutral-400 font-light">
        <span>Selected Work · 01</span>

        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-light"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>

        <span>India · 2026</span>
      </div>
    </section>
  );
}
