import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 bg-[#09090B] overflow-hidden"
    >
      {/* Extremely subtle ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C99E75]/8 via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Introduction & Headline (approx 5-6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center pr-0 lg:pr-6">
            {/* Eyebrow */}
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C99E75] mb-5 font-normal">
              Computer Science Student
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-serif text-white tracking-tight leading-[1.05] mb-6">
              Building ideas <br />
              into digital <br />
              <span className="italic font-serif font-normal text-[#C99E75]">
                experiences.
              </span>
            </h1>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-md font-sans font-light leading-relaxed mb-10">
              Computer Science student exploring software development, technology, and creative problem solving.
            </p>

            {/* Two Clean Minimal Actions */}
            <div className="flex items-center gap-6">
              <a
                href="#work"
                className="px-7 py-3 rounded-full bg-white text-black font-sans font-medium text-xs uppercase tracking-[0.16em] hover:bg-[#C99E75] hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                View My Work
              </a>

              <a
                href="#about"
                className="text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-white transition-colors duration-200 py-2 border-b border-neutral-700 hover:border-white font-medium"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right Column: One Dominant Personal Portrait (approx 6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] group">
              {/* Soft frame with clean editorial aspect ratio */}
              <div className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#121217]">
                <img
                  src="/images/akanksha.jpg"
                  alt="Akanksha — Computer Science Student"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                />

                {/* Subtle cinematic gradient vignette along the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Minimalist corner tag */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-4 py-2 rounded-xl bg-[#121217]/90 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono uppercase tracking-widest text-neutral-400 shadow-xl">
                <span>Akanksha · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calm Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full pt-8 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
        <span>Portfolio · 01</span>
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
        <span>Explore</span>
      </div>
    </section>
  );
}
