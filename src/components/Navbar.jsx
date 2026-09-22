import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'work', 'journey', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Selected Work' },
    { id: 'journey', label: 'Journey' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0B0E]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E28743] to-[#C99E75] flex items-center justify-center text-black font-serif font-bold text-lg shadow-lg shadow-[#E28743]/20 transition-transform duration-300 group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider uppercase font-sans text-neutral-200 group-hover:text-white transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 font-mono uppercase">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#14141A]/70 backdrop-blur-md border border-white/[0.07] px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 font-medium ${
                  activeSection === link.id
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Socials & Resume CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors border border-transparent hover:border-white/[0.08]"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-[#E28743] hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#E28743]/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-10 px-8 animate-fadeIn">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E28743]">
              Navigation
            </span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-neutral-200 hover:text-[#E28743] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#E28743] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume / CV</span>
            </button>
            <div className="flex items-center justify-center gap-6 pt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white text-sm flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-neutral-400 hover:text-white text-sm flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
