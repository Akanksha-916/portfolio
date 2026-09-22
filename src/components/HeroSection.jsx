import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 bg-[#09090B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Personal Introduction & Headline (approx 7 cols for natural text flow) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center pr-0 lg:pr-8">
            {/* Small Eyebrow */}
            <span className="text-[11px] font-sans uppercase tracking-[0.26em] text-neutral-400 mb-6 font-light">
              Computer Science Student · Developer
            </span>

            {/* 3-Line Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif text-white tracking-tight leading-[1.12] mb-6">
              Building ideas <br />
              into digital <br />
              <span className="italic font-serif font-normal text-[#C99E75]">
                experiences.
              </span>
            </h1>

            {/* Human & Personal 2-Line Description */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-lg font-sans font-light leading-relaxed mb-10">
              Computer Science student exploring software development, technology, and creative problem solving.
            </p>

            {/* Two Clean Actions */}
            <div className="flex items-center gap-8">
              <a
                href="#work"
                className="px-7 py-3 rounded-full bg-white text-black font-sans font-medium text-xs uppercase tracking-[0.16em] hover:bg-[#C99E75] hover:text-black transition-all duration-300"
              >
                View My Work
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-200 py-1 border-b border-transparent hover:border-neutral-500 font-light"
              >
                <span>About</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: One Dominant Personal Portrait (approx 5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
              {/* Clean rectangular portrait frame with subtle rounding and breathing room */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/[0.06] bg-[#121217]">
                <img
                  src="/images/akanksha.jpg"
                  alt="Akanksha"
                  className="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.01] transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle & Quiet Scroll Indicator */}
      <div className="w-full text-center pt-6">
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-[0.24em] text-neutral-400 hover:text-white transition-colors font-light"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
