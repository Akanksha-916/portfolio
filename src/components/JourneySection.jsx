import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Trophy, Calendar, CheckCircle2 } from 'lucide-react';

export default function JourneySection() {
  return (
    <section id="journey" className="py-28 relative border-t border-white/[0.08] bg-[#0A0A0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <span className="font-mono text-xs text-[#E28743] tracking-widest uppercase block mb-1">
              04 // Timeline
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              Experience & Journey
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono max-w-md">
            Hackathon milestones, industry internships, and practical engineering leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#E28743] before:via-white/10 before:to-transparent">
          {portfolioData.journey.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[29px] sm:-left-[45px] top-1.5 w-6 h-6 rounded-full bg-[#0E0E14] border-2 border-[#E28743] flex items-center justify-center shadow-lg shadow-[#E28743]/20 group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-[#E28743]" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121218] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#E28743]/10 text-[#E28743] border border-[#E28743]/20">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {item.organization}
                    </span>
                  </div>

                  {index === 0 && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      <Trophy className="w-3 h-3" /> National Level
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[#E28743] mb-4 font-mono">
                  {item.role}
                </p>

                <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#181822] text-neutral-400 border border-white/[0.05]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
