import React, { useState } from 'react';
import { ArrowUpRight, X, Maximize2 } from 'lucide-react';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 'infosys-springboard',
      number: '01',
      tag: '01 / 03 · INTERNSHIP COMPLETION',
      type: 'Certificate of Completion',
      title: 'Infosys Springboard Internship',
      subtitle: 'Intelligent Parking Availability Detection & Reservation Systems',
      provider: 'Infosys Springboard',
      date: 'February 5, 2026 – April 5, 2026',
      description:
        'Completed the Infosys Springboard internship assignment focused on intelligent parking availability detection and reservation systems.',
      image: '/images/cert-infosys.jpg',
      featured: true,
    },
    {
      id: 'udemy-chatgpt',
      number: '02',
      tag: '02 / 03 · ONLINE COURSE',
      type: 'Certificate of Completion',
      title: 'ChatGPT for Data Science and Machine Learning',
      subtitle: 'Practical AI & Machine Learning Workflows',
      provider: 'Udemy · 365 Careers',
      instructor: '365 Careers',
      date: 'June 30, 2026',
      description:
        'Completed a practical course focused on applying ChatGPT to data science and machine learning workflows.',
      image: '/images/cert-udemy.jpg',
      featured: false,
    },
    {
      id: 'adobe-hackathon',
      number: '03',
      tag: '03 / 03 · HACKATHON PARTICIPATION',
      type: 'Certificate of Participation',
      title: 'Adobe University Hackathon',
      subtitle: 'National Competitive Engineering Hackathon',
      provider: 'Adobe × Unstop',
      date: '9 August 2026',
      description:
        'Participated in the Adobe University Hackathon organized by Adobe.',
      image: '/images/cert-adobe.jpg',
      featured: false,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-28 sm:py-36 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24 sm:mb-28">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light">
              04 // Certifications
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif text-white tracking-tight leading-[1.08] uppercase">
              Certifications
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed max-w-lg">
              Milestones from internships, learning, and hands-on experiences.
            </p>
          </div>
        </div>

        {/* Editorial Certificate Stories */}
        <div className="space-y-28 sm:space-y-36">
          {/* =========================================================================
              CERTIFICATE 01 — INFOSYS SPRINGBOARD (Featured: Left Info / Right Visual)
             ========================================================================= */}
          <div className="group pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Info (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-[#C99E75] font-normal">01</span>
                  <span className="w-6 h-[1px] bg-white/[0.1]" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                    {certificates[0].tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif text-white tracking-tight leading-tight group-hover:text-[#C99E75] transition-colors">
                    {certificates[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.16em] text-[#C99E75] mt-1.5 font-light">
                    {certificates[0].type} · {certificates[0].provider}
                  </p>
                </div>

                <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  {certificates[0].description}
                </p>

                <div className="pt-1 text-xs font-sans text-neutral-400 font-light">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-widest block font-medium mb-0.5">
                    Period
                  </span>
                  <span className="text-neutral-300">{certificates[0].date}</span>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedCert(certificates[0])}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-[#C99E75] transition-colors py-1.5 border-b border-white hover:border-[#C99E75] font-medium group/btn"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Right Visual (7 cols) */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setSelectedCert(certificates[0])}
                  className="relative cursor-pointer rounded-lg overflow-hidden bg-white/5 border border-white/[0.08] shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-white/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                >
                  <img
                    src={certificates[0].image}
                    alt={certificates[0].title}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                  {/* Subtle Hover Lens Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-white text-xs font-sans uppercase tracking-widest flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C99E75]" />
                      Expand Certificate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              CERTIFICATE 02 — UDEMY (Reversed: Left Visual / Right Info)
             ========================================================================= */}
          <div className="group pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Visual (6 cols) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div
                  onClick={() => setSelectedCert(certificates[1])}
                  className="relative cursor-pointer rounded-lg overflow-hidden bg-white/5 border border-white/[0.08] shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-white/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                >
                  <img
                    src={certificates[1].image}
                    alt={certificates[1].title}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-white text-xs font-sans uppercase tracking-widest flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C99E75]" />
                      Expand Certificate
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Info (6 cols) */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-[#C99E75] font-normal">02</span>
                  <span className="w-6 h-[1px] bg-white/[0.1]" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                    {certificates[1].tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif text-white tracking-tight leading-tight group-hover:text-[#C99E75] transition-colors">
                    {certificates[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.16em] text-[#C99E75] mt-1.5 font-light">
                    {certificates[1].provider}
                  </p>
                </div>

                <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  {certificates[1].description}
                </p>

                <div className="pt-1 text-xs font-sans text-neutral-400 font-light">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-widest block font-medium mb-0.5">
                    Completed
                  </span>
                  <span className="text-neutral-300">{certificates[1].date}</span>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedCert(certificates[1])}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-[#C99E75] transition-colors py-1.5 border-b border-white hover:border-[#C99E75] font-medium group/btn"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              CERTIFICATE 03 — ADOBE HACKATHON (Clean Natural Composition)
             ========================================================================= */}
          <div className="group pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Info (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-[#C99E75] font-normal">03</span>
                  <span className="w-6 h-[1px] bg-white/[0.1]" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                    {certificates[2].tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif text-white tracking-tight leading-tight group-hover:text-[#C99E75] transition-colors">
                    {certificates[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.16em] text-[#C99E75] mt-1.5 font-light">
                    {certificates[2].type} · {certificates[2].provider}
                  </p>
                </div>

                <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  {certificates[2].description}
                </p>

                <div className="pt-1 text-xs font-sans text-neutral-400 font-light">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-widest block font-medium mb-0.5">
                    Date
                  </span>
                  <span className="text-neutral-300">{certificates[2].date}</span>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedCert(certificates[2])}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-[#C99E75] transition-colors py-1.5 border-b border-white hover:border-[#C99E75] font-medium group/btn"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Right Visual (7 cols) */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setSelectedCert(certificates[2])}
                  className="relative cursor-pointer rounded-lg overflow-hidden bg-white/5 border border-white/[0.08] shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-white/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                >
                  <img
                    src={certificates[2].image}
                    alt={certificates[2].title}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-white text-xs font-sans uppercase tracking-widest flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C99E75]" />
                      Expand Certificate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section End Understated Statement */}
        <div className="mt-28 sm:mt-36 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.35em] text-neutral-400 font-light">
            Learn · Build · Participate · Grow
          </p>
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR HIGH-RES CERTIFICATE VIEWING
         ========================================================================= */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#101014] border border-white/[0.15] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#14141A] border-b border-white/[0.08]">
              <div>
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#C99E75] block">
                  {selectedCert.tag}
                </span>
                <h4 className="text-sm sm:text-base font-serif text-white font-medium">
                  {selectedCert.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-8 flex items-center justify-center bg-[#070709] max-h-[80vh] overflow-y-auto">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded shadow-2xl border border-white/[0.06]"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="px-6 py-3 bg-[#14141A] border-t border-white/[0.08] flex items-center justify-between text-xs font-sans text-neutral-400">
              <span>{selectedCert.provider}</span>
              <span>{selectedCert.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
