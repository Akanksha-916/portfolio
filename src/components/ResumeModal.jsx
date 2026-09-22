import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Github, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white">
      {/* Modal Wrapper */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#101017] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col print:border-0 print:rounded-none print:max-h-full print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#161622] border-b border-white/[0.08] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E28743]" />
            <span className="text-xs font-mono uppercase tracking-widest text-white">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E28743] transition-colors flex items-center gap-1.5 shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-8 text-neutral-200 print:text-black print:p-8 custom-scrollbar">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 print:border-black/20">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white print:text-black mb-1">
              {portfolioData.personal.fullName}
            </h1>
            <p className="text-sm font-mono text-[#E28743] print:text-neutral-700 uppercase tracking-wider mb-3">
              {portfolioData.personal.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 print:text-neutral-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {portfolioData.personal.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" /> github.com/Akanksha-916
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {portfolioData.personal.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E28743] print:text-neutral-800 mb-2 font-bold">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-800 leading-relaxed font-sans">
              Computer Science student with strong foundations in Data Structures, Backend Microservices (Spring Boot, Node.js), and modern Frontend architectures (React, Tailwind CSS). Proven track record in rapid prototyping, national hackathons (Smart India Hackathon 2024), and developing full-stack web platforms with robust database modeling.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E28743] print:text-neutral-800 mb-3 font-bold">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-white print:text-black">
                  {portfolioData.education.degree} in {portfolioData.education.major}
                </h3>
                <p className="text-xs text-neutral-400 print:text-neutral-700">
                  {portfolioData.education.institution}
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-400 print:text-neutral-600">
                {portfolioData.education.duration}
              </span>
            </div>
            <p className="text-xs text-neutral-400 print:text-neutral-700 mt-2 font-mono">
              Core Coursework: {portfolioData.education.coursework.join(', ')}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E28743] print:text-neutral-800 mb-3 font-bold">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
              <div>
                <span className="font-mono text-neutral-400 print:text-neutral-600">Languages: </span>
                <span className="text-neutral-200 print:text-black">Java, JavaScript (ES6+), SQL</span>
              </div>
              <div>
                <span className="font-mono text-neutral-400 print:text-neutral-600">Frontend: </span>
                <span className="text-neutral-200 print:text-black">React.js, Tailwind CSS, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-mono text-neutral-400 print:text-neutral-600">Backend & APIs: </span>
                <span className="text-neutral-200 print:text-black">Spring Boot, RESTful APIs, JWT, Spring Data JPA</span>
              </div>
              <div>
                <span className="font-mono text-neutral-400 print:text-neutral-600">Databases & Tools: </span>
                <span className="text-neutral-200 print:text-black">PostgreSQL, MySQL, MongoDB, Git, GitHub, Postman, Vercel, AWS</span>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E28743] print:text-neutral-800 mb-4 font-bold">
              Key Engineering Projects
            </h2>
            <div className="space-y-5">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-white print:text-black text-sm">
                      {proj.title} <span className="font-normal text-neutral-400 print:text-neutral-600 text-xs">| {proj.techStack.join(', ')}</span>
                    </span>
                    <span className="font-mono text-neutral-400 print:text-neutral-600">{proj.year}</span>
                  </div>
                  <p className="text-neutral-300 print:text-neutral-800 mb-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-neutral-400 print:text-neutral-700 space-y-0.5">
                    {proj.highlights.slice(0, 2).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Hackathons */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E28743] print:text-neutral-800 mb-3 font-bold">
              Experience & Achievements
            </h2>
            <div className="space-y-4">
              {portfolioData.journey.map((item) => (
                <div key={item.id} className="text-xs">
                  <div className="flex items-baseline justify-between mb-0.5">
                    <span className="font-bold text-white print:text-black">
                      {item.title} — {item.role}
                    </span>
                    <span className="font-mono text-neutral-400 print:text-neutral-600">{item.period}</span>
                  </div>
                  <p className="text-neutral-400 print:text-neutral-700">{item.organization}</p>
                  <p className="text-neutral-300 print:text-neutral-800 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
