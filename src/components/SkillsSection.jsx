import React from 'react';

export default function SkillsSection() {
  const skillCategories = [
    {
      number: "01",
      category: "LANGUAGES",
      skills: [
        { name: "Java", type: "primary" },
        { name: "JavaScript", type: "secondary" },
        { name: "Python", type: "italic" },
        { name: "C / C++", type: "tertiary" },
        { name: "SQL", type: "tertiary" }
      ]
    },
    {
      number: "02",
      category: "FRONTEND",
      skills: [
        { name: "React.js", type: "primary" },
        { name: "Next.js", type: "secondary" },
        { name: "Tailwind CSS", type: "italic" },
        { name: "HTML5", type: "tertiary" },
        { name: "CSS3", type: "tertiary" }
      ]
    },
    {
      number: "03",
      category: "BACKEND",
      skills: [
        { name: "Spring Boot", type: "primary" },
        { name: "Node.js", type: "secondary" },
        { name: "Express.js", type: "italic" },
        { name: "REST APIs", type: "secondary" }
      ]
    },
    {
      number: "04",
      category: "DATABASES & TOOLS",
      skills: [
        { name: "PostgreSQL", type: "primary" },
        { name: "MySQL", type: "secondary" },
        { name: "MongoDB", type: "italic" },
        { name: "Git & GitHub", type: "secondary" },
        { name: "Docker", type: "tertiary" },
        { name: "Postman", type: "tertiary" },
        { name: "Vercel", type: "tertiary" },
        { name: "AWS", type: "tertiary" }
      ]
    },
    {
      number: "05",
      category: "CURRENTLY EXPLORING",
      skills: [
        { name: "System Design", type: "primary" },
        { name: "Spring AI", type: "italic" },
        { name: "Advanced DSA", type: "secondary" },
        { name: "Cloud Technologies", type: "tertiary" }
      ]
    }
  ];

  const getSkillTypographyClass = (type) => {
    switch (type) {
      case 'primary':
        // ~42-50px on desktop
        return 'text-2xl sm:text-4xl lg:text-[2.75rem] text-white font-bold tracking-tight hover:text-[#C99E75]';
      case 'italic':
        // ~38-46px on desktop
        return 'text-xl sm:text-3xl lg:text-[2.35rem] italic text-[#C99E75] font-normal hover:text-white';
      case 'secondary':
        // ~30-38px on desktop
        return 'text-lg sm:text-2xl lg:text-[2rem] text-neutral-300 font-normal hover:text-white';
      case 'tertiary':
      default:
        // ~24-30px on desktop
        return 'text-base sm:text-xl lg:text-[1.65rem] text-neutral-400 font-light hover:text-white';
    }
  };

  return (
    <section id="skills" className="py-28 sm:py-36 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden scroll-mt-20">
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

        {/* Full-Width Horizontal Editorial Typographic Rows with Refined Hierarchy */}
        <div className="border-t border-white/[0.08]">
          {skillCategories.map((cat) => (
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
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`font-serif tracking-tight transition-colors duration-200 cursor-default select-none inline-flex items-baseline ${getSkillTypographyClass(
                        skill.type
                      )}`}
                    >
                      {skill.name}
                    </span>
                  ))}
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
