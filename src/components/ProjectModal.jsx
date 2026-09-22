import React, { useEffect } from 'react';
import { X, Github, ExternalLink, ArrowRight, Layers, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0E14] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 bg-[#14141C] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#E28743] px-2.5 py-1 rounded bg-[#E28743]/10 border border-[#E28743]/20">
              {project.number}
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {project.title}
              </h2>
              <span className="text-xs text-neutral-400 font-mono">
                {project.category} · {project.year}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
          {/* Tagline & Overview */}
          <div>
            <h3 className="text-base sm:text-lg font-serif text-[#E28743] mb-2">
              {project.tagline}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#181824] border border-white/[0.08] text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deep-Dive Grid: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#13131A] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Problem Statement
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#13131A] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Engineering Solution
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          <div className="p-6 rounded-2xl bg-[#13131E] border border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E28743] flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4" /> System Architecture & Data Pipeline
            </span>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
              {project.caseStudy.architecture}
            </p>
            <div className="p-4 rounded-xl bg-[#09090C] border border-white/[0.05] font-mono text-xs text-neutral-400">
              <span className="text-neutral-500">// Client-Server Contract</span>
              <p className="text-emerald-400 mt-1">
                Client (React SPA) ➔ RESTful Endpoints (JWT Guard) ➔ Service Layer ➔ DB Persistence
              </p>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Key Engineering Highlights
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#14141C] border border-white/[0.05] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E28743] shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#13131A] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4" /> Technical Challenges
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {project.caseStudy.challenges}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#13131A] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4" /> Measurable Outcome
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#14141C] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span>Role:</span>
            <span className="text-white font-medium">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-mono text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E28743] transition-colors flex items-center gap-1.5"
            >
              <span>Live System</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
