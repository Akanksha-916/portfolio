import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="work" className="py-28 sm:py-36 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24 sm:mb-28">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light">
              03 // Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif text-white tracking-tight leading-[1.08] uppercase">
              Selected Work
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed max-w-lg">
              A few things I've built while learning, experimenting, and solving real problems.
            </p>
          </div>
        </div>

        {/* Editorial Project Showcase Stories (Vertical Storytelling with Distinct Layouts) */}
        <div className="space-y-32 sm:space-y-40">
          {/* =========================================================================
              PROJECT 01 — PARKEASE (Left-Aligned Visual with Adjacent Narrative)
             ========================================================================= */}
          <div className="group pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Visual Area (7 cols) */}
              <div className="lg:col-span-7">
                <a
                  href="https://park-ease1-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#121217] border border-white/[0.06] shadow-2xl"
                >
                  <img
                    src="/images/project-parkease.png"
                    alt="ParkEase UI Preview"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/30 via-transparent to-transparent pointer-events-none" />
                </a>
              </div>

              {/* Right Narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Meta Number & Category */}
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-[#C99E75] font-normal">01</span>
                  <span className="w-6 h-[1px] bg-white/[0.1]" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                    Full-Stack Web Application
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-white tracking-tight leading-tight group-hover:text-[#C99E75] transition-colors">
                    ParkEase
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-neutral-300 mt-1">
                    Smart Parking Management System
                  </p>
                </div>

                {/* Factual Description */}
                <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  A full-stack parking platform for finding and reserving available parking spaces, with separate user and owner workflows.
                </p>

                {/* Technical Stack (Simple Typography) */}
                <div className="pt-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#C99E75] block mb-2 font-medium">
                    Technologies
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-neutral-300 font-light tracking-wide">
                    React · Java · Spring Boot · PostgreSQL · Groq API
                  </p>
                </div>

                {/* Role */}
                <div className="text-xs font-sans text-neutral-400 font-light">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-widest block font-medium mb-0.5">Role</span>
                  <span>Full-Stack Development</span>
                </div>

                {/* Editorial Action Links */}
                <div className="pt-4 flex items-center gap-7">
                  <a
                    href="https://park-ease1-eight.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-[#C99E75] transition-colors py-1 border-b border-white hover:border-[#C99E75] font-medium"
                  >
                    <span>View Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/Akanksha-916/ParkEase1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors py-1 border-b border-transparent hover:border-neutral-500 font-light"
                  >
                    <span>View Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 02 — MEDISCAN AI (Asymmetric Right Visual Layout)
             ========================================================================= */}
          <div className="group pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                {/* Meta Number & Category */}
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-[#C99E75] font-normal">02</span>
                  <span className="w-6 h-[1px] bg-white/[0.1]" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                    Healthcare Platform
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-white tracking-tight leading-tight group-hover:text-[#C99E75] transition-colors">
                    MediScan AI
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-neutral-300 mt-1">
                    AI-Assisted Healthcare & Report Analysis
                  </p>
                </div>

                {/* Factual Description */}
                <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  A secure healthcare platform for medical report uploads, AI-assisted analysis, doctor appointments, and role-based patient and doctor workflows.
                </p>

                {/* Technical Stack (Simple Typography) */}
                <div className="pt-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#C99E75] block mb-2 font-medium">
                    Technologies
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-neutral-300 font-light tracking-wide">
                    React · TypeScript · Spring Boot · Spring Security · PostgreSQL · Gemini · Cloudinary
                  </p>
                </div>

                {/* Role */}
                <div className="text-xs font-sans text-neutral-400 font-light">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-widest block font-medium mb-0.5">Role</span>
                  <span>Full-Stack & Cloud Integration</span>
                </div>

                {/* Editorial Action Links */}
                <div className="pt-4 flex items-center gap-7">
                  <a
                    href="https://healthcarereport.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-[#C99E75] transition-colors py-1 border-b border-white hover:border-[#C99E75] font-medium"
                  >
                    <span>View Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/Akanksha-916/MediScanAi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors py-1 border-b border-transparent hover:border-neutral-500 font-light"
                  >
                    <span>View Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Visual Area (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <a
                  href="https://healthcarereport.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#121217] border border-white/[0.06] shadow-2xl"
                >
                  <img
                    src="/images/project-mediscan.png"
                    alt="MediScan AI UI Preview"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/30 via-transparent to-transparent pointer-events-none" />
                </a>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 03 — LOGITRACK (Left Visual & Right Narrative Layout)
             ========================================================================= */}
          <div className="group pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Visual Area (7 cols) */}
              <div className="lg:col-span-7">
                <a
                  href="https://logitrack-pi-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#121217] border border-white/[0.06] shadow-2xl"
                >
                  <img
                    src="/images/project-logitrack.png"
                    alt="LogiTrack UI Preview"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/30 via-transparent to-transparent pointer-events-none" />
                </a>
              </div>

              {/* Right Narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Meta Number & Category */}
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-[#C99E75] font-normal">03</span>
                  <span className="w-6 h-[1px] bg-white/[0.1]" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 font-light">
                    Logistics Platform
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-white tracking-tight leading-tight group-hover:text-[#C99E75] transition-colors">
                    LogiTrack
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-neutral-300 mt-1">
                    Last-Mile Logistics Tracking System
                  </p>
                </div>

                {/* Factual Description */}
                <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  An end-to-end logistics platform supporting parcel management, dynamic shipping-rate calculation, live tracking, payments, and real-time status updates.
                </p>

                {/* Technical Stack (Simple Typography) */}
                <div className="pt-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#C99E75] block mb-2 font-medium">
                    Technologies
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-neutral-300 font-light tracking-wide">
                    Java · Spring Boot · MySQL / TiDB · REST APIs · WebSockets · Razorpay
                  </p>
                </div>

                {/* Role */}
                <div className="text-xs font-sans text-neutral-400 font-light">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-widest block font-medium mb-0.5">Role</span>
                  <span>Backend & Systems Development</span>
                </div>

                {/* Editorial Action Links */}
                <div className="pt-4 flex items-center gap-7">
                  <a
                    href="https://logitrack-pi-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-[#C99E75] transition-colors py-1 border-b border-white hover:border-[#C99E75] font-medium"
                  >
                    <span>View Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/Akanksha-916/last_mile_delivery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors py-1 border-b border-transparent hover:border-neutral-500 font-light"
                  >
                    <span>View Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
