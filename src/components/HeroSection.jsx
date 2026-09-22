import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-8 bg-[#09090B] overflow-hidden"
    >
      {/* Main Asymmetric Grid Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Primary Content Area (~60% width) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center pr-0 lg:pr-6">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-5 h-[1px] bg-neutral-700" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.26em] text-neutral-400 font-light">
                Computer Science Student · Developer
              </span>
            </div>

            {/* Large Editorial Headline */}
            <div className="max-w-xl mb-8 sm:mb-10">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] font-serif text-white tracking-tight leading-[1.05] sm:leading-[1.02]">
                Building ideas into <br />
                <span className="italic font-serif font-normal text-[#C99E75] inline-block mt-1">
                  digital experiences.
                </span>
              </h1>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-lg font-sans font-light leading-relaxed mb-8 sm:mb-10">
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

          {/* Right Column: Editorial Portrait Treatment with Original Photo (~40% width) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
              {/* Warm Muted Beige Circular Backdrop Shape (CSS) */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-[#C99E75]/15 blur-sm -z-10" />
              <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-[#C99E75]/25 -z-10" />

              {/* Original Photograph of Akanksha */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#121217]">
                <img
                  src="/images/akanksha.jpg"
                  alt="Akanksha — Computer Science Student"
                  className="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.01] transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Subtle Handwritten Editorial Accent */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 pointer-events-none select-none">
                <span className="font-serif italic text-xs tracking-wider text-[#C99E75]/90 block leading-tight text-right">
                  ideas<br />to<br />impact
                </span>
                <span className="w-6 h-[1px] bg-[#C99E75]/40 block ml-auto mt-1" />
              </div>
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
