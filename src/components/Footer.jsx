import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-white/[0.08] bg-[#07070A] relative text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Monogram */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E28743] to-[#C99E75] flex items-center justify-center text-black font-serif font-bold text-xl shadow-lg">
              A
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-white uppercase tracking-wider">
                {portfolioData.personal.name}
              </h4>
              <p className="text-xs font-mono text-neutral-400">
                {portfolioData.personal.title}
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button
              onClick={onOpenResume}
              className="text-[#E28743] hover:text-white transition-colors underline underline-offset-4"
            >
              Resume
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#14141C] border border-white/[0.08] hover:border-white/20 text-neutral-300 hover:text-white transition-all self-end md:self-auto group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Designed & engineered with curiosity.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
