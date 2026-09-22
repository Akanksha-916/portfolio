import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function HighlightsStrip() {
  return (
    <section className="py-12 border-y border-white/[0.08] bg-[#09090C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {portfolioData.metrics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start border-l-2 border-[#E28743]/40 pl-5"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-1 tracking-tight">
                {item.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 mb-0.5">
                {item.label}
              </span>
              <span className="text-[11px] text-neutral-500 font-sans">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
