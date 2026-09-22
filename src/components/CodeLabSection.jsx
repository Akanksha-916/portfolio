import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Code2, Terminal, Check, Copy, ArrowUpRight, GitBranch, Star } from 'lucide-react';

export default function CodeLabSection() {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeSnippet = portfolioData.codeLab[activeSnippetIndex];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="codelab" className="py-28 relative border-t border-white/[0.08] bg-[#0A0A0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <span className="font-mono text-xs text-[#E28743] tracking-widest uppercase block mb-1">
              06 // Open Source & Code
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              Built in Public
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono max-w-md">
            Algorithms, concurrency patterns, and open-source software experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* GitHub Identity Card (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#121218] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white">
                  <Github className="w-6 h-6" />
                </div>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#E28743] block mb-1">
                GitHub Profile
              </span>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                @Akanksha-916
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">
                Open-source repositories, system architecture experiments, and full-stack project codebases.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-[#E28743]" /> Repositories
                  </span>
                  <span className="text-white font-medium">Public & Active</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400" /> Focus Stack
                  </span>
                  <span className="text-white font-medium">Java · React · Python</span>
                </div>
              </div>
            </div>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-white text-black font-semibold text-center text-xs uppercase tracking-wider hover:bg-[#E28743] transition-colors flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repos</span>
            </a>
          </div>

          {/* Interactive Code Snippet Inspector (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-[#0E0E14] border border-white/[0.1] overflow-hidden shadow-2xl">
            {/* Top Snippet Tabs */}
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-[#14141C] border-b border-white/[0.08] gap-3">
              <div className="flex items-center gap-2">
                {portfolioData.codeLab.map((snippet, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSnippetIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-2 ${
                      activeSnippetIndex === idx
                        ? 'bg-[#E28743]/15 text-[#E28743] border border-[#E28743]/30'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{snippet.title}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs sm:text-sm text-neutral-200 overflow-x-auto leading-relaxed bg-[#0A0A0E]">
              <pre className="text-amber-100/90 whitespace-pre-wrap">
                <code>{activeSnippet.snippet}</code>
              </pre>
            </div>

            <div className="px-6 py-3 bg-[#111118] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>Language: {activeSnippet.language.toUpperCase()}</span>
              <span>Production Pattern Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
