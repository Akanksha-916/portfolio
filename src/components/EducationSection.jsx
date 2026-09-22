import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle, Award } from 'lucide-react';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-28 relative border-t border-white/[0.08] bg-[#0C0C10]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <span className="font-mono text-xs text-[#E28743] tracking-widest uppercase block mb-1">
              05 // Academics
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              Education & Foundations
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
            Computer Science & Engineering
          </span>
        </div>

        {/* Education Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Degree & Institution Card (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#121218] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#E28743]/10 text-[#E28743] border border-[#E28743]/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#E28743] block">
                      Undergraduate Degree
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {education.duration}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.06] text-neutral-300">
                  {education.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-base text-neutral-300 font-sans mb-1">
                Specialization in <span className="text-[#E28743]">{education.major}</span>
              </p>
              <p className="text-xs font-mono text-neutral-500 mb-8">
                {education.institution}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-sans">
                    <CheckCircle className="w-4 h-4 text-[#E28743] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Coursework Badges (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#14141E] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E28743] mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Core Computer Science Disciplines</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-white mb-4">
                Theoretical & Applied Disciplines
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">
                Rigorous grounding across computation theory, software modeling, database systems, and networking protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-xl bg-[#1A1A26] border border-white/[0.05] text-xs font-mono text-neutral-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E28743]" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Foundation Status:</span>
              <span className="text-emerald-400">Validated through Projects & Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
