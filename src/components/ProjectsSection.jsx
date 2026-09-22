import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, Terminal, Compass, Eye } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-28 relative border-t border-white/[0.08] bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <span className="font-mono text-xs text-[#E28743] tracking-widest uppercase block mb-1">
              03 // Portfolio
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              Selected Work
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono max-w-md">
            Production-grade systems, distributed architectures, and interactive digital products.
          </p>
        </div>

        {/* Editorial Project Cards Stack */}
        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-[#121218] border border-white/[0.07] hover:border-[#E28743]/40 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#E28743]/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Preview / Tech Mockup (5 cols) */}
                <div
                  className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${project.previewGradient} min-h-[300px] lg:min-h-[380px]`}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

                  {/* Top Meta Tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-3xl sm:text-4xl font-serif font-bold text-white/30 group-hover:text-white transition-colors">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/[0.1] text-neutral-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Visual Interface Graphic Mockup */}
                  <div className="relative z-10 my-6 p-5 rounded-2xl bg-[#0C0C10]/85 border border-white/[0.1] shadow-2xl backdrop-blur-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {project.id}.app.local
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-4 bg-white/[0.08] rounded-md w-3/4" />
                      <div className="h-2.5 bg-white/[0.04] rounded-md w-full" />
                      <div className="h-2.5 bg-white/[0.04] rounded-md w-5/6" />
                      <div className="flex items-center gap-2 pt-2">
                        <div className="h-6 w-20 bg-[#E28743]/20 rounded-md border border-[#E28743]/30" />
                        <div className="h-6 w-16 bg-white/[0.05] rounded-md" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Role indicator */}
                  <div className="relative z-10 text-[11px] font-mono text-neutral-400">
                    <span>Role: </span>
                    <span className="text-white font-medium">{project.role}</span>
                  </div>
                </div>

                {/* Content & Case Study Info (7 cols) */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Project Title & Tagline */}
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[#E28743] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-500">
                        ({project.year})
                      </span>
                    </div>

                    <p className="text-sm font-medium text-[#E28743] mb-4 font-sans">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                          <span className="text-[#E28743] mt-0.5">✦</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#1A1A24] border border-white/[0.06] text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons & Case Study Trigger */}
                  <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#E28743] transition-colors py-2 group/btn"
                    >
                      <Eye className="w-4 h-4 text-[#E28743]" />
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors border border-white/[0.06]"
                        aria-label="GitHub Repository"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E28743] transition-colors shadow-md"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
