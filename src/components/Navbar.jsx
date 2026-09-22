import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#09090B]/80 backdrop-blur-md py-4 border-b border-white/[0.04]'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand / Personal Name */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors"
          >
            <span className="font-serif tracking-widest text-lg uppercase font-medium">
              {portfolioData.personal.name}
            </span>
            <span className="text-[#C99E75] text-xs font-serif italic font-normal opacity-80">
              · CS
            </span>
          </a>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs font-sans uppercase tracking-[0.18em] text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: GitHub & Minimal Resume */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="text-xs uppercase tracking-[0.18em] text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 pb-0.5 border-b border-neutral-600 hover:border-white font-medium"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Minimal Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#09090B]/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-12 px-8 animate-fadeIn">
          <div className="flex flex-col gap-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C99E75]">
              Navigation
            </span>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-neutral-200 hover:text-[#C99E75] transition-colors"
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
              className="w-full py-3 rounded-full bg-white text-black font-medium text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub →
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hover:text-white transition-colors"
              >
                Email →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
