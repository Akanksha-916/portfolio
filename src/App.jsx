import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HighlightsStrip from './components/HighlightsStrip';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import EducationSection from './components/EducationSection';
import CodeLabSection from './components/CodeLabSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0B0E] text-[#EDEDF2] font-sans selection:bg-[#E28743]/30 selection:text-white">
      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Luxury Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <HighlightsStrip />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <EducationSection />
        <CodeLabSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume / CV Modal Drawer */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
