import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.06] bg-[#07070A] relative text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <p className="text-xs font-mono text-neutral-400">
          © {new Date().getFullYear()} {portfolioData.personal.name}. Designed & engineered with curiosity.
        </p>
      </div>
    </footer>
  );
}
