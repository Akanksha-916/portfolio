import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-6 bg-[#09090B] overflow-hidden"
    >
      {/* Main Asymmetric Grid Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full pt-1 sm:pt-2 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
          {/* Left Column: Primary Content Area */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start justify-center pr-0 lg:pr-4">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-7">
              <span className="w-5 h-[1px] bg-neutral-700" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.26em] text-neutral-400 font-light">
                Computer Science Student · Developer
              </span>
            </div>

            {/* Exactly 2-Line Headline */}
            <div className="mb-7 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-serif text-white tracking-tight leading-[1.08] sm:leading-[1.04]">
                Building ideas into <br />
                <span className="italic font-serif font-normal text-[#C99E75] inline-block mt-1">
                  digital experiences.
                </span>
              </h1>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-lg font-sans font-light leading-relaxed mb-8 sm:mb-9">
              Computer Science student exploring software development, technology, and creative problem solving.
            </p>

            {/* Two Clean Actions */}
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

          {/* Right Column: Editorial Portrait with Soft Circular Backdrop */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] flex items-center justify-center">
              {/* Subtle Thin Circular Outline Ring */}
              <div className="absolute w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] lg:w-[330px] lg:h-[330px] rounded-full border border-[#C99E75]/30 -z-10" />

              {/* Warm Muted Beige Circular Backdrop Shape */}
              <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#C99E75]/25 -z-10" />

              {/* Real Transparent Photograph of Akanksha Extending Naturally Beyond the Circle */}
              <img
                src="/images/akanksha-cutout.png"
                alt="Akanksha — Computer Science Student"
                className="w-full h-auto object-contain select-none transition-transform duration-700 ease-out hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Centered Minimal Scroll Indicator */}
      <div className="w-full text-center pt-6 relative z-10">
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] text-neutral-400 hover:text-white transition-colors font-light"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
