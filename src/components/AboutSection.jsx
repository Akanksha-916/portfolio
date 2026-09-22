import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28 relative border-t border-white/[0.06] bg-[#09090B] overflow-hidden">
      {/* Subtle Oversized Background Monogram - Extremely Low Contrast Depth Element */}
      <div className="absolute top-8 left-1/4 -translate-x-1/2 select-none pointer-events-none -z-0">
        <span className="text-[26vw] font-serif font-light text-white/[0.018] tracking-tighter leading-none block">
          A
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Main Two-Column Editorial Intro Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Anchor Statement */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light">
              About Me
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif text-white tracking-tight leading-none">
              I'm Akanksha.
            </h2>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-neutral-200 leading-snug font-normal pt-1">
              A Computer Science student building practical,{' '}
              <span className="italic font-serif font-normal text-[#C99E75]">
                user-focused
              </span>{' '}
              software.
            </h3>
          </div>

          {/* Right Column: Three Short Readable Biography Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed lg:pt-8">
            <p>
              I'm a Computer Science student passionate about building practical, user-focused software solutions. I enjoy turning ideas into clean, functional applications and exploring how technology can solve real-world problems.
            </p>
            <p>
              My interests include full-stack development, backend systems, databases, and modern web technologies. Through academic projects and collaborative development, I've gained hands-on experience designing applications, working with APIs, managing data, and building responsive user interfaces.
            </p>
            <p>
              I'm always curious to learn new technologies, improve my problem-solving skills, and work on projects that challenge me to think beyond the basics. I believe good software is not just about writing code — it's about creating something useful, reliable, and easy to use.
            </p>
          </div>
        </div>

        {/* Connected Editorial Information Row */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {/* Column 1: Education */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Education
              </span>
              <p className="text-sm font-sans text-neutral-300 font-light leading-relaxed">
                B.Tech Computer Science <br />
                <span className="text-neutral-400 text-xs">2027</span>
              </p>
            </div>

            {/* Column 2: Focus */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Focus
              </span>
              <p className="text-sm font-sans text-neutral-300 font-light leading-relaxed">
                Full-Stack Development <br />
                Backend · APIs · Databases
              </p>
            </div>

            {/* Column 3: Building */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Building
              </span>
              <div className="text-sm font-sans text-neutral-300 font-light space-y-1">
                <p>ParkEase</p>
                <p>TransitOps</p>
                <p>MediScanAI</p>
                <p>Sorting Visualizer</p>
              </div>
            </div>

            {/* Column 4: Learning */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-sans uppercase tracking-[0.26em] text-[#C99E75] block font-medium">
                Learning
              </span>
              <div className="text-sm font-sans text-neutral-300 font-light space-y-1">
                <p>System Design</p>
                <p>Spring AI</p>
                <p>Advanced DSA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
