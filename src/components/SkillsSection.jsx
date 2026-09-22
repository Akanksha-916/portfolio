import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Terminal, Database, Cloud, Code, Sparkles, Search, CheckCircle } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = useMemo(() => {
    return portfolioData.skills.items.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.useCase.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'languages':
        return <Code className="w-3.5 h-3.5 text-[#E28743]" />;
      case 'frontend':
        return <Layers className="w-3.5 h-3.5 text-cyan-400" />;
      case 'backend':
        return <Terminal className="w-3.5 h-3.5 text-indigo-400" />;
      case 'database':
        return <Database className="w-3.5 h-3.5 text-emerald-400" />;
      case 'tools':
        return <Cloud className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#E28743]" />;
    }
  };

  return (
    <section id="skills" className="py-28 relative border-t border-white/[0.08] bg-[#0A0A0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <span className="font-mono text-xs text-[#E28743] tracking-widest uppercase block mb-1">
              02 // Stack & Capabilities
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              Technical Stack
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono max-w-md">
            Categorized tools, frameworks, and engineering languages applied across full-stack projects.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {portfolioData.skills.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#E28743] text-black font-semibold shadow-lg shadow-[#E28743]/20'
                    : 'bg-[#14141C] text-neutral-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.08]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Instant Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technology or use-case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#13131A] border border-white/[0.08] focus:border-[#E28743] rounded-full text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`p-5 rounded-2xl bg-[#121218] border transition-all duration-300 relative group flex flex-col justify-between ${
                hoveredSkill === skill.name
                  ? 'border-[#E28743]/50 shadow-xl shadow-[#E28743]/10 bg-[#151520]'
                  : 'border-white/[0.06] hover:border-white/[0.15]'
              }`}
            >
              <div>
                {/* Card Header: Category Icon & Level Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.05]">
                    {getCategoryIcon(skill.category)}
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#E28743]/10 text-[#E28743] border border-[#E28743]/20">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-[#E28743] transition-colors">
                  {skill.name}
                </h3>

                {/* Technical Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Contextual Real-World Application (Revealed / Highlighted on hover) */}
              <div className="pt-3 border-t border-white/[0.06] bg-white/[0.02] -mx-5 -mb-5 p-4 rounded-b-2xl">
                <span className="text-[10px] font-mono uppercase text-[#E28743] block mb-1 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Practical Application
                </span>
                <p className="text-[11px] text-neutral-300 font-sans italic">
                  "{skill.useCase}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-mono text-neutral-400">
              No technologies matching "{searchQuery}". Try searching for 'Java', 'React', 'Cloud', or 'SQL'.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
