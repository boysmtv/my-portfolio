'use client';

import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { siteSummary } from './portfolio-data';

export default function ContactSection() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteSummary.contactEmail);
    } catch {
      // Fallback: do nothing
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), rgba(59,130,246,0.3), transparent) 1' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-1/4 h-1/2 bg-accent-500/4 rounded-full blur-[80px]" />
      </div>

      <div className="site-wrap relative">
        <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
          <span className="bg-gradient-to-r from-white to-brand-200 bg-clip-text text-transparent">Let&apos;s connect</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <a
            href={`mailto:${siteSummary.contactEmail}`}
            className="group rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-brand-500/8 to-transparent border border-brand-500/15 hover:border-brand-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            <Mail size={20} className="text-brand-400 mb-4" />
            <div className="text-sm font-medium text-text-primary mb-1">Email</div>
            <div className="text-sm text-text-secondary">{siteSummary.contactEmail}</div>
            <div className="flex items-center gap-3 mt-3">
              <span className="flex items-center gap-1 text-xs text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Send email <ArrowUpRight size={12} />
              </span>
              <button
                onClick={(e) => { e.preventDefault(); copyEmail(); }}
                className="text-xs text-text-muted hover:text-brand-400 transition-colors"
              >
                Copy
              </button>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={siteSummary.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-accent-500/8 to-transparent border border-accent-500/15 hover:border-accent-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <svg className="w-5 h-5 text-accent-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <div className="text-sm font-medium text-text-primary mb-1">LinkedIn</div>
            <div className="text-sm text-text-secondary">Connect with me</div>
            <div className="flex items-center gap-1 text-xs text-accent-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              Visit profile <ArrowUpRight size={12} />
            </div>
          </a>

          {/* Location */}
          <div className="rounded-xl p-6 bg-gradient-to-br from-highlight-500/5 to-transparent border border-highlight-500/15">
            <MapPin size={20} className="text-highlight-400 mb-4" />
            <div className="text-sm font-medium text-text-primary mb-1">Location</div>
            <div className="text-sm text-text-secondary">{siteSummary.location}</div>
            <div className="text-xs text-text-muted mt-3">Open to remote &amp; hybrid</div>
          </div>
        </div>
      </div>
    </section>
  );
}
