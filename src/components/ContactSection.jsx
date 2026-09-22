import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, CheckCircle2, ArrowUpRight, MessageSquare, Sparkles, FileText } from 'lucide-react';

export default function ContactSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | submitted

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative border-t border-white/[0.08] bg-[#09090C] overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-[#E28743]/10 via-[#C99E75]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#C99E75] block font-light mb-1">
              05 // Contact
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              Get in Touch
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
            Open to Opportunities
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Editorial Typography & Direct Contact (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E28743] block mb-4">
                Collaboration & Inquiries
              </span>

              <h3 className="text-4xl sm:text-5xl xl:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-6">
                Let's build <br />
                <span className="italic font-serif text-[#E28743]">
                  something remarkable.
                </span>
              </h3>

              <p className="text-base text-neutral-400 font-sans leading-relaxed max-w-lg mb-8">
                Whether you're looking to hire an aspiring software engineer, collaborate on an innovative system, or simply chat about software architecture — my inbox is always open.
              </p>

              {/* Quick Copy Email Card */}
              <div className="p-6 rounded-3xl bg-[#121218] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-base font-semibold text-white hover:text-[#E28743] transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-mono text-white transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                Social Profiles & Networks
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#14141C] border border-white/[0.06] hover:border-white/20 text-neutral-300 hover:text-white transition-all text-xs font-mono flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-neutral-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#14141C] border border-white/[0.06] hover:border-white/20 text-neutral-300 hover:text-white transition-all text-xs font-mono flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-neutral-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="px-4 py-2.5 rounded-xl bg-[#14141C] border border-white/[0.06] hover:border-white/20 text-neutral-300 hover:text-white transition-all text-xs font-mono flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#E28743]" />
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#121218] border border-white/[0.08] shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E28743] mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Direct Message Transmission</span>
            </div>

            {formStatus === 'submitted' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-neutral-400 font-sans max-w-sm">
                  Thank you for reaching out. I'll review your note and get back to you promptly at your provided email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0B0E] border border-white/[0.08] focus:border-[#E28743] rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0B0E] border border-white/[0.08] focus:border-[#E28743] rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0B0E] border border-white/[0.08] focus:border-[#E28743] rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0B0E] border border-white/[0.08] focus:border-[#E28743] rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E28743] hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
                >
                  {formStatus === 'submitting' ? (
                    <span>Dispatching message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
