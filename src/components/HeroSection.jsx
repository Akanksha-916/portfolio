import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-40 pb-10 bg-[#09090B] overflow-hidden"
    >
      {/* Delicate Watermark Monogram Background - Faint & Printed into Canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[35vw] font-serif font-light text-white/[0.02] tracking-tighter leading-none block">
          A
        </span>
      </div>

      {/* Main Editorial Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto relative z-10">
        {/* Top Eyebrow with Delicate Line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="w-8 h-[1px] bg-neutral-700 hidden sm:inline-block" />
          <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.28em] text-neutral-400 font-light">
            Computer Science Student · Developer
          </span>
        </div>

        {/* Large Wide-Span Editorial Statement Headline */}
        <div className="max-w-6xl mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] font-serif text-white tracking-tight leading-[1.02] sm:leading-[0.98]">
            Building ideas into <br />
            <span className="italic font-serif font-normal text-[#C99E75] inline-block mt-1 sm:mt-2">
              digital experiences.
            </span>
          </h1>
        </div>

        {/* Offset Lower Content Row: Short Human Intro + Minimalist CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-4 sm:pt-6 border-t border-white/[0.05]">
          {/* 2-Line Human Description (7 cols) */}
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-sans font-light leading-relaxed">
              Computer Science student exploring software development, technology, and creative problem solving.
            </p>
          </div>

          {/* Clean Actions (5 cols) */}
          <div className="lg:col-span-5 flex items-center lg:justify-end gap-8">
            <a
              href="#work"
              className="px-8 py-3.5 rounded-full bg-white text-black font-sans font-medium text-xs uppercase tracking-[0.18em] hover:bg-[#C99E75] hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              View My Work
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-200 py-2 border-b border-transparent hover:border-neutral-500 font-light"
            >
              <span>About</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Bottom Metadata Row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full pt-10 sm:pt-12 relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-neutral-400 font-light">
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
