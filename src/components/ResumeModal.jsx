import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Printer,
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Code2,
  BookOpen,
  CheckCircle2,
  Award,
  Zap
} from 'lucide-react';

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

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md animate-fadeIn print:static print:bg-white print:p-0">
      <div className="min-h-screen px-4 sm:px-6 py-6 sm:py-10 flex flex-col items-center">
        
        {/* Top Floating Control Bar */}
        <div className="w-full max-w-4xl mb-6 flex items-center justify-between print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#13131A] border border-white/[0.08] hover:border-white/20 text-neutral-200 hover:text-white transition-all text-xs font-sans flex items-center gap-2 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-[#13131A] border border-white/[0.08] hover:border-white/20 text-neutral-200 hover:text-white transition-all text-xs font-sans flex items-center gap-2 shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span className="font-medium uppercase tracking-wider">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl bg-[#E28743] hover:bg-[#d57834] text-black font-semibold text-xs font-sans uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#E28743]/20"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            DIGITAL RESUME CANVAS
           ========================================================================= */}
        <div
          className="w-full max-w-4xl bg-[#0D0D12] border border-white/[0.08] rounded-3xl p-6 sm:p-12 lg:p-14 text-neutral-200 shadow-2xl space-y-10 print:border-0 print:rounded-none print:bg-white print:text-black print:p-0 print:shadow-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Section */}
          <div className="text-center space-y-4 pb-8 border-b border-white/[0.08] print:border-black/20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white uppercase print:text-black">
              AKANKSHA DEVI
            </h1>

            {/* Contact Strip */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs sm:text-sm font-sans text-neutral-300 print:text-neutral-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E28743] print:text-black" />
                Kanpur, Uttar Pradesh, India
              </span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <a
                href="tel:+919528981250"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E28743] print:text-black" />
                +91 9528981250
              </a>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <a
                href="mailto:deviakanksha16@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#E28743] print:text-black" />
                deviakanksha16@gmail.com
              </a>
            </div>

            {/* Links Strip */}
            <div className="flex items-center justify-center gap-6 text-xs sm:text-sm font-sans text-neutral-300 print:text-neutral-700 pt-1">
              <a
                href="https://www.linkedin.com/in/akanksha916/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E28743] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-neutral-400 print:text-black" />
                <span>linkedin.com/in/akanksha916</span>
              </a>
              <a
                href="https://github.com/Akanksha-916"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E28743] transition-colors"
              >
                <Github className="w-4 h-4 text-neutral-400 print:text-black" />
                <span>github.com/Akanksha-916</span>
              </a>
            </div>
          </div>

          {/* 1. Career Objective */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E28743]/10 border border-[#E28743]/20 flex items-center justify-center text-[#E28743] print:hidden">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide print:text-black">
                Career Objective
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-800 leading-relaxed pl-0 sm:pl-11">
              Final-year B.Tech student (2027) with hands-on experience in Java, Spring Boot, REST APIs, API management, and SQL-based systems. Seeking a Software Engineer role to apply backend development and troubleshooting skills in a customer-facing technical environment, with strong problem-solving and communication abilities.
            </p>
          </div>

          {/* 2. Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E28743]/10 border border-[#E28743]/20 flex items-center justify-center text-[#E28743] print:hidden">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide print:text-black">
                Education
              </h2>
            </div>
            <div className="pl-0 sm:pl-11 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                  Pranveer Singh Institute of Technology, Kanpur
                </h3>
                <span className="text-xs sm:text-sm font-mono text-neutral-400 print:text-neutral-600">
                  2023 — 2027
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-700">
                Bachelor of Technology in Computer Science Engineering <span className="text-neutral-500">|</span> Percentage: <strong className="text-white print:text-black font-semibold">81.3%</strong>
              </p>
            </div>
          </div>

          {/* 3. Technical Skills */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E28743]/10 border border-[#E28743]/20 flex items-center justify-center text-[#E28743] print:hidden">
                <Code2 className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide print:text-black">
                Skills
              </h2>
            </div>
            <div className="pl-0 sm:pl-11 space-y-2.5 text-xs sm:text-sm font-sans">
              <div>
                <span className="font-semibold text-white print:text-black">• Programming Languages: </span>
                <span className="text-neutral-300 print:text-neutral-800">Java, Python, SQL, JavaScript</span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Backend Technologies: </span>
                <span className="text-neutral-300 print:text-neutral-800">Spring Boot, REST APIs, API Management, Hibernate/JPA, JWT Authentication</span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Core Computer Science: </span>
                <span className="text-neutral-300 print:text-neutral-800">Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks</span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Databases: </span>
                <span className="text-neutral-300 print:text-neutral-800">MySQL, PostgreSQL, MongoDB</span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Developer Tools: </span>
                <span className="text-neutral-300 print:text-neutral-800">Git, GitHub, Postman, IntelliJ IDEA, VS Code, Docker</span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Soft Skills: </span>
                <span className="text-neutral-300 print:text-neutral-800">Communication, Presentation, Team Collaboration, Problem Solving, Customer Support, Mentoring, Time Management</span>
              </div>
            </div>
          </div>

          {/* 4. Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E28743]/10 border border-[#E28743]/20 flex items-center justify-center text-[#E28743] print:hidden">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide print:text-black">
                Experience
              </h2>
            </div>
            <div className="pl-0 sm:pl-11 space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                    Infosys <span className="font-normal text-neutral-400 print:text-neutral-600">| Backend Developer Intern</span>
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 print:text-neutral-600">
                    Feb 2026 — Apr 2026
                  </span>
                </div>
                <p className="text-xs font-mono text-[#E28743] print:text-neutral-700 mb-2">
                  Java, Spring Boot, Hibernate, MySQL, JWT, Postman
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Developed the backend of ParkEase – Smart Parking Management System using Java, Spring Boot, Hibernate, and MySQL.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Built and tested 12+ REST APIs for user login, booking management, and payment modules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Managed API versioning, request validation, and response formatting for consistent integration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Implemented JWT Authentication and role-based security to protect user and admin data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Optimized SQL queries and used Hibernate Lazy Loading to improve database fetch performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Resolved backend bugs and API errors identified during integration testing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Documented and tested all backend APIs using Postman for smooth frontend integration.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Key Engineering Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E28743]/10 border border-[#E28743]/20 flex items-center justify-center text-[#E28743] print:hidden">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide print:text-black">
                Projects
              </h2>
            </div>
            <div className="pl-0 sm:pl-11 space-y-5">
              {/* Health Report Analyzer */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                    Health Report Analyzer <span className="font-normal text-neutral-400 print:text-neutral-600 text-xs">| Java, Spring Boot, Spring AI, React.js, MySQL</span>
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 print:text-neutral-600">
                    March 2026 — Present
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Built a full-stack app to upload and analyze medical health reports using AI-generated insights.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Integrated Spring AI to parse unstructured report text and generate readable summaries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Implemented backend validation and error handling for reliable file processing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Developed a React.js frontend for uploads and clean result display.</span>
                  </li>
                </ul>
              </div>

              {/* TransitOps */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                    TransitOps – Smart Transport Operations Platform <span className="font-normal text-neutral-400 print:text-neutral-600 text-xs">| Java, Spring Boot, React.js, PostgreSQL</span>
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 print:text-neutral-600">
                    April 2025 — July 2025
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Developed scalable REST APIs for vehicle tracking, route management, and passenger booking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Designed PostgreSQL schemas to manage vehicles, routes, drivers, and bookings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Implemented JWT Authentication with role-based access for admin, driver, and passenger roles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                    <span>Tested and debugged backend services to improve stability before integration.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Coding Profiles */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E28743]/10 border border-[#E28743]/20 flex items-center justify-center text-[#E28743] print:hidden">
                <Zap className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide print:text-black">
                Coding Profiles
              </h2>
            </div>
            <ul className="pl-0 sm:pl-11 space-y-1.5 text-xs sm:text-sm text-neutral-300 print:text-neutral-800">
              <li className="flex items-start gap-2">
                <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                <span>Solved <strong>300+ Data Structures and Algorithms</strong> problems on platforms like LeetCode and GeeksforGeeks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                <span>Strong understanding of Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Binary Search, Hashing, Recursion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E28743] print:text-black mt-1.5">•</span>
                <span>Regularly practice coding problems to strengthen problem-solving and logical thinking skills.</span>
              </li>
            </ul>
          </div>

          {/* 7. Certificates */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E28743]/10 border border-[#E28743]/20 flex items-center justify-center text-[#E28743] print:hidden">
                <Award className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide print:text-black">
                Certificates
              </h2>
            </div>
            <ul className="pl-0 sm:pl-11 space-y-2 text-xs sm:text-sm text-neutral-300 print:text-neutral-800">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E28743] print:text-black shrink-0" />
                <span>Infosys Springboard – Java Programming</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E28743] print:text-black shrink-0" />
                <span>Fundamentals of Machine Learning and Artificial Intelligence – AWS Training & Certification</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E28743] print:text-black shrink-0" />
                <span>ChatGPT for Data Science and Machine Learning – Udemy</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
