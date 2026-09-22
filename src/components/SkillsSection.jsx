import React from 'react';

export default function SkillsSection() {
  const skillCategories = [
    {
      number: "01",
      category: "LANGUAGES",
      skills: [
        { name: "Java", dominant: true, italic: false },
        { name: "JavaScript", dominant: false, italic: false },
        { name: "Python", dominant: false, italic: true },
        { name: "C / C++", dominant: false, italic: false },
        { name: "SQL", dominant: false, italic: false }
      ]
    },
    {
      number: "02",
      category: "FRONTEND",
      skills: [
        { name: "React.js", dominant: true, italic: false },
        { name: "Next.js", dominant: false, italic: false },
        { name: "Tailwind CSS", dominant: false, italic: true },
        { name: "HTML5", dominant: false, italic: false },
        { name: "CSS3", dominant: false, italic: false }
      ]
    },
    {
      number: "03",
      category: "BACKEND",
      skills: [
        { name: "Spring Boot", dominant: true, italic: false },
        { name: "Node.js", dominant: false, italic: false },
        { name: "Express.js", dominant: false, italic: true },
        { name: "REST APIs", dominant: false, italic: false }
      ]
    },
    {
      number: "04",
      category: "DATABASES & TOOLS",
      skills: [
        { name: "PostgreSQL", dominant: true, italic: false },
        { name: "MySQL", dominant: false, italic: false },
        { name: "MongoDB", dominant: false, italic: true },
        { name: "Git & GitHub", dominant: false, italic: false },
        { name: "Docker", dominant: false, italic: false },
        { name: "Postman", dominant: false, italic: false },
        { name: "Vercel", dominant: false, italic: false },
        { name: "AWS", dominant: false, italic: false }
      ]
    },
    {
      number: "05",
      category: "CURRENTLY EXPLORING",
      skills: [
        { name: "System Design", dominant: true, italic: false },
        { name: "Spring AI", dominant: false, italic: true },
        { name: "Advanced DSA", dominant: false, italic: false },
        { name: "Cloud Technologies", dominant: false, italic: false }
      ]
    }
  ];

  return (
    <section id="skills" className="py-28 sm:py-36 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Header Area - Preserved Exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20 sm:mb-24">
          {/* Left: Section Label + Large Editorial Headline */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light">
              02 // Skills
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif text-white tracking-tight leading-[1.08]">
              Tools that <br />
              turn ideas into <br />
              <span className="italic font-serif font-normal text-[#C99E75]">
                real solutions.
              </span>
            </h2>
          </div>

          {/* Center/Right: Sub-text */}
          <div className="lg:col-span-4 lg:pt-8 space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-neutral-400 block font-light">
              Continuously Exploring
            </span>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed">
              A blend of languages, frameworks, and tools I use to build, learn, and create. Always learning, always curious.
            </p>
          </div>

          {/* Far Right: Handwritten Editorial Accent */}
          <div className="lg:col-span-2 flex flex-col lg:items-end lg:pt-6">
            <div className="text-left lg:text-right font-serif italic text-sm sm:text-base text-[#C99E75]/90 leading-tight space-y-0.5 select-none">
              <p>Better</p>
              <p>Tools</p>
              <p>Bigger</p>
              <p>Possibilities</p>
              <span className="w-8 h-[1px] bg-[#C99E75]/40 block mt-2 lg:ml-auto" />
            </div>
          </div>
        </div>

        {/* Full-Width Horizontal Editorial Typographic Rows (No Columns / No Grid / No Cards) */}
        <div className="border-t border-white/[0.08]">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.number}
              className="py-10 sm:py-14 border-b border-white/[0.08] transition-colors duration-300 hover:border-white/[0.16]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-baseline">
                {/* Left Category Label */}
                <div className="lg:col-span-3 flex items-baseline gap-3">
                  <span className="font-serif text-sm text-[#C99E75] font-normal">
                    {cat.number}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-neutral-400 font-light">
                    {cat.category}
                  </span>
                </div>

                {/* Right Horizontal Typographic Flow */}
                <div className="lg:col-span-9 flex flex-wrap items-baseline gap-x-8 sm:gap-x-12 lg:gap-x-14 gap-y-4">
                  {cat.skills.map((skill, sIdx) => {
                    const isDominant = skill.dominant;
                    const isItalic = skill.italic;

                    return (
                      <span
                        key={skill.name}
                        className={`font-serif tracking-tight transition-colors duration-200 cursor-default select-none group inline-flex items-baseline ${
                          isDominant
                            ? 'text-3xl sm:text-5xl lg:text-6xl text-white font-bold hover:text-[#C99E75]'
                            : isItalic
                            ? 'text-2xl sm:text-4xl lg:text-5xl italic text-[#C99E75] font-normal hover:text-white'
                            : 'text-2xl sm:text-3xl lg:text-4xl text-neutral-300 font-normal hover:text-white'
                        }`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Strip */}
        <div className="mt-20 sm:mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-light text-neutral-400">
          <p className="italic font-serif text-neutral-400 text-sm">
            "Good tools don't just make development easier, they make{' '}
            <span className="italic text-[#C99E75]">better ideas possible.</span>"
          </p>
          <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-neutral-400">
            Learn · Build · Improve · Repeat
          </span>
        </div>
      </div>
    </section>
  );
}
