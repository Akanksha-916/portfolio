import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'work', label: 'WORK' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-5">
        {/* Floating Glass Capsule Navbar */}
        <div className="max-w-7xl mx-auto bg-[#121217]/75 backdrop-blur-md border border-white/[0.08] rounded-2xl px-6 sm:px-10 py-4 flex items-center justify-between shadow-2xl shadow-black/40">
          {/* Left Brand */}
          <a
            href="#home"
            className="flex flex-col group text-neutral-200 hover:text-white transition-colors"
          >
            <span className="font-serif tracking-[0.22em] text-sm uppercase font-normal text-white">
              {portfolioData.personal.name}
            </span>
            <span className="text-[9px] font-sans tracking-[0.28em] text-neutral-400 uppercase font-light">
              Developer
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs font-sans uppercase tracking-[0.2em] text-neutral-300 hover:text-white transition-colors duration-200 font-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: GitHub Icon & Resume ↗ */}
          <div className="hidden md:flex items-center gap-7">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="text-xs font-sans uppercase tracking-[0.2em] text-neutral-200 hover:text-white transition-colors flex items-center gap-1 font-light"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#09090B]/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-12 px-8 animate-fadeIn">
          <div className="flex flex-col gap-8">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-neutral-400">
              Menu
            </span>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-neutral-200 hover:text-[#C99E75] transition-colors tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-8 border-t border-white/[0.06]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-full bg-white text-black font-sans text-xs uppercase tracking-[0.2em] font-medium"
            >
              View Resume ↗
            </button>
            <div className="flex items-center justify-between text-xs font-sans text-neutral-400 pt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hover:text-white transition-colors"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
