import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, X, Maximize2, ChevronUp, ChevronDown } from 'lucide-react';

export default function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const viewerRef = useRef(null);

  const certificates = [
    {
      id: 'infosys-springboard',
      number: '01',
      indexLabel: '01 / 03',
      category: 'INTERNSHIP',
      title: 'Infosys Springboard',
      credentialType: 'Certificate of Completion',
      organization: 'Infosys Springboard',
      date: 'February 5, 2026 — April 5, 2026',
      description:
        'Completed the Infosys Springboard internship assignment related to intelligent parking availability detection and reservation systems.',
      image: '/images/cert-infosys.jpg',
    },
    {
      id: 'udemy-chatgpt',
      number: '02',
      indexLabel: '02 / 03',
      category: 'ONLINE COURSE',
      title: 'ChatGPT for Data Science and Machine Learning',
      credentialType: 'Certificate of Completion',
      organization: 'Udemy · 365 Careers',
      date: 'June 30, 2026',
      description:
        'Completed a course focused on using ChatGPT across data science and machine learning workflows.',
      image: '/images/cert-udemy.jpg',
    },
    {
      id: 'adobe-hackathon',
      number: '03',
      indexLabel: '03 / 03',
      category: 'HACKATHON',
      title: 'Adobe University Hackathon',
      credentialType: 'Certificate of Participation',
      organization: 'Adobe × Unstop',
      date: 'August 9, 2026',
      description:
        'Participated in the Adobe University Hackathon organized by Adobe.',
      image: '/images/cert-adobe.jpg',
    },
  ];

  const handleSelect = (index) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 350);
  };

  const handleNext = () => {
    handleSelect((activeIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    handleSelect((activeIndex - 1 + certificates.length) % certificates.length);
  };

  // Keyboard navigation when viewer is focused or in section
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') setIsModalOpen(false);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const activeCert = certificates[activeIndex];

  return (
    <section
      id="certifications"
      className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light">
              04 // Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif text-white tracking-tight leading-[1.08] uppercase">
              Certifications
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed max-w-lg">
              Milestones from learning, internships, and hands-on experiences.
            </p>
          </div>
        </div>

        {/* =========================================================================
            COMPACT EDITORIAL SHOWCASE (Viewer on Left / Information on Right)
           ========================================================================= */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT SIDE: Interactive Certificate Archive Viewer with Vertical Rail */}
            <div className="lg:col-span-7 flex gap-4 sm:gap-6 items-stretch">
              
              {/* Vertical Thumbnail / Index Rail */}
              <div className="flex flex-col justify-between py-2 items-center select-none border-r border-white/[0.06] pr-4 sm:pr-6">
                <button
                  onClick={handlePrev}
                  className="p-1 text-neutral-500 hover:text-white transition-colors"
                  aria-label="Previous certificate"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-6 my-auto">
                  {certificates.map((cert, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={cert.id}
                        onClick={() => handleSelect(idx)}
                        className="group flex flex-col items-center gap-1.5 transition-all text-left"
                        aria-label={`Select Certificate ${cert.number}`}
                      >
                        <span
                          className={`font-serif text-sm sm:text-base transition-colors duration-300 ${
                            isActive
                              ? 'text-[#C99E75] font-semibold scale-110'
                              : 'text-neutral-500 group-hover:text-neutral-300 font-normal'
                          }`}
                        >
                          {cert.number}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'bg-[#C99E75] scale-125'
                              : 'bg-white/10 group-hover:bg-white/30'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  className="p-1 text-neutral-500 hover:text-white transition-colors"
                  aria-label="Next certificate"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Main Certificate Display Frame */}
              <div className="flex-1 flex flex-col justify-center">
                <div
                  ref={viewerRef}
                  onClick={() => setIsModalOpen(true)}
                  className="group relative cursor-pointer aspect-[1.38/1] rounded-xl overflow-hidden bg-[#101015] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                >
                  {/* Active Certificate Image with smooth cross-fade */}
                  <img
                    key={activeCert.id}
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="w-full h-full object-contain p-2 transition-all duration-500 ease-out group-hover:scale-[1.015] animate-fadeIn"
                  />

                  {/* Hover Overlay Lens */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-white text-xs font-sans uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C99E75]" />
                      Expand Certificate
                    </span>
                  </div>

                  {/* Corner Index Indicator */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/[0.06] text-[10px] font-sans tracking-widest uppercase text-neutral-400">
                    {activeCert.indexLabel}
                  </div>
                </div>

                {/* Subtitle Hint */}
                <div className="flex items-center justify-between mt-3 px-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-neutral-500">
                    Interactive Document Archive
                  </span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C99E75] hover:text-white transition-colors flex items-center gap-1 font-medium"
                  >
                    <span>Click to Enlarge</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Dynamic Certificate Information */}
            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              {/* Category & Index */}
              <div className="flex items-center gap-3">
                <span className="font-serif text-sm text-[#C99E75] font-normal">
                  {activeCert.indexLabel}
                </span>
                <span className="w-6 h-[1px] bg-white/[0.1]" />
                <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                  {activeCert.category}
                </span>
              </div>

              {/* Title & Credential Details */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif text-white tracking-tight leading-tight transition-colors duration-300">
                  {activeCert.title}
                </h3>
                <p className="text-sm font-serif italic text-neutral-300">
                  {activeCert.credentialType}
                </p>
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-[#C99E75] font-light pt-0.5">
                  {activeCert.organization}
                </p>
              </div>

              {/* Factual Description */}
              <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
                "{activeCert.description}"
              </p>

              {/* Date */}
              <div className="pt-1 text-xs font-sans text-neutral-400 font-light">
                <span className="text-neutral-400 text-[10px] uppercase tracking-widest block font-medium mb-0.5">
                  Date
                </span>
                <span className="text-neutral-300">{activeCert.date}</span>
              </div>

              {/* Actions & Next Switcher */}
              <div className="pt-4 flex items-center gap-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-[#C99E75] transition-colors py-1 border-b border-white hover:border-[#C99E75] font-medium group"
                >
                  <span>View Full Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={handleNext}
                  className="text-xs font-sans uppercase tracking-[0.18em] text-neutral-500 hover:text-white transition-colors py-1 font-light"
                >
                  Next Credential →
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Understated Section End */}
        <div className="mt-20 sm:mt-24 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.35em] text-neutral-400 font-light">
            Learn · Build · Participate · Grow
          </p>
        </div>
      </div>

      {/* =========================================================================
          FULLSCREEN / LIGHTBOX MODAL PREVIEW
         ========================================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#101014] border border-white/[0.15] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#14141A] border-b border-white/[0.08]">
              <div>
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#C99E75] block">
                  {activeCert.indexLabel} · {activeCert.category}
                </span>
                <h4 className="text-sm sm:text-base font-serif text-white font-medium">
                  {activeCert.title}
                </h4>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-sans uppercase tracking-widest text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors flex items-center gap-1.5"
                aria-label="Close certificate preview"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-8 flex items-center justify-center bg-[#070709] max-h-[80vh] overflow-y-auto">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded shadow-2xl border border-white/[0.06]"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="px-6 py-3.5 bg-[#14141A] border-t border-white/[0.08] flex items-center justify-between text-xs font-sans text-neutral-400">
              <div className="flex items-center gap-4">
                <span>{activeCert.organization}</span>
                <span>·</span>
                <span>{activeCert.date}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="px-2.5 py-1 rounded border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors text-[11px] uppercase tracking-wider"
                >
                  ← Prev
                </button>
                <span className="text-neutral-400 font-mono text-[11px]">
                  {activeIndex + 1} / {certificates.length}
                </span>
                <button
                  onClick={handleNext}
                  className="px-2.5 py-1 rounded border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors text-[11px] uppercase tracking-wider"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
