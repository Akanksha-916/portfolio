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

          {/* Right Column: Editorial Portrait with Exact Solid Circle, Rings, Sparks, and Handwritten Text */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[370px] flex items-center justify-center">
              
              {/* Three Spark Strokes at Top-Left */}
              <div className="absolute top-2 -left-2 sm:top-4 sm:-left-4 z-10 pointer-events-none">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#C2956E]"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <line x1="28" y1="28" x2="36" y2="20" />
                  <line x1="25" y1="22" x2="33" y2="12" />
                  <line x1="19" y1="18" x2="23" y2="8" />
                </svg>
              </div>

              {/* Offset Thin Concentric Outline Ring */}
              <div className="absolute w-[265px] h-[265px] sm:w-[315px] sm:h-[315px] lg:w-[340px] lg:h-[340px] rounded-full border border-[#C2956E]/75 top-5 sm:top-6 left-[52%] -translate-x-1/2 -z-10 pointer-events-none" />

              {/* Exact Warm Caramel/Tan Solid Circle Backdrop Shape */}
              <div className="absolute w-[245px] h-[245px] sm:w-[290px] sm:h-[290px] lg:w-[315px] lg:h-[315px] rounded-full bg-[#C2956E] top-8 sm:top-10 left-1/2 -translate-x-1/2 -z-10 shadow-2xl shadow-black/40" />

              {/* Real Transparent Photograph of Akanksha Extending Naturally Beyond the Circle */}
              <img
                src="/images/akanksha-cutout.png"
                alt="Akanksha — Computer Science Student"
                className="w-full h-auto object-contain select-none transition-transform duration-700 ease-out hover:scale-[1.015] z-0"
                loading="eager"
              />

              {/* Handwritten 'ideas to impact' with Underline at Bottom-Right */}
              <div className="absolute bottom-10 -right-2 sm:bottom-14 sm:-right-6 lg:bottom-16 lg:-right-8 pointer-events-none select-none text-left rotate-[-4deg] text-[#C2956E] z-10">
                <span className="block font-['Caveat'] text-2xl sm:text-3xl lg:text-[2.1rem] leading-[0.92] italic font-medium tracking-tight">
                  ideas
                </span>
                <span className="block font-['Caveat'] text-2xl sm:text-3xl lg:text-[2.1rem] leading-[0.92] italic font-medium tracking-tight pl-1.5 my-0.5">
                  to
                </span>
                <span className="block font-['Caveat'] text-2xl sm:text-3xl lg:text-[2.1rem] leading-[0.92] italic font-medium tracking-tight">
                  impact
                </span>
                {/* Hand-drawn Underline Stroke */}
                <svg
                  className="w-14 sm:w-16 h-2 mt-1 text-[#C2956E]"
                  viewBox="0 0 60 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M2 3 Q 30 7, 58 2" />
                </svg>
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
