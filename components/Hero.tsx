'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroMetrics, proofChips } from './portfolio-data';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(subheadlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(trustRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(photoRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=1.2'
      )
      .fromTo(glowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 -right-1/4 w-1/3 h-1/3 bg-accent-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-1/4 left-1/4 w-1/4 h-1/4 bg-highlight-500/6 rounded-full blur-[80px]" />
      </div>

      {/* Background flow lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-[0.06]" viewBox="0 0 1200 800" fill="none">
          <path d="M-100 400 Q200 300 400 400 T800 400 T1200 400" stroke="url(#gradient1)" strokeWidth="1.5" />
          <path d="M-100 500 Q300 400 500 500 T900 500 T1300 500" stroke="url(#gradient2)" strokeWidth="1" />
          <path d="M-50 300 Q250 200 450 300 T850 300 T1250 300" stroke="url(#gradient3)" strokeWidth="1" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative site-wrap w-full pt-24 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column — Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div ref={badgeRef} className="opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-gradient-to-r from-brand-500/10 to-accent-500/10">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="font-mono text-xs text-brand-300 tracking-wide">Open to opportunities</span>
              </span>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              <span className="bg-gradient-to-r from-white via-brand-200 to-accent-300 bg-clip-text text-transparent">Dedy Wijaya</span>
            </h1>

            {/* Subheadline */}
            <p ref={subheadlineRef} className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl opacity-0">
              Shipping payment infrastructure, Android platforms, and backend integrations
              for Indonesia&apos;s largest financial institutions.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 opacity-0">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-medium text-white rounded-lg hover:from-brand-400 hover:to-brand-500 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                View work
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-accent-500/30 bg-accent-500/5 px-6 py-3 text-sm font-medium text-accent-300 rounded-lg hover:bg-accent-500/10 hover:border-accent-500/50 transition-all duration-300"
              >
                Get in touch
              </a>
            </div>

            {/* Trust bar */}
            <div ref={trustRef} className="pt-6 border-t border-gradient-to-r from-brand-500/20 via-accent-500/20 to-transparent opacity-0">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {proofChips.map((chip) => (
                  <span key={chip} className="flex items-center gap-2 text-sm text-text-muted hover:text-brand-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Photo frame */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Ambient glow */}
            <div
              ref={glowRef}
              className="absolute -inset-12 rounded-full blur-3xl opacity-0"
              style={{
                background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(59,130,246,0.12) 40%, rgba(245,158,11,0.06) 60%, transparent 70%)',
              }}
            />

            {/* Photo frame */}
            <div
              ref={photoRef}
              className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-80 lg:h-[400px] rounded-2xl overflow-hidden opacity-0"
              style={{
                boxShadow: '0 0 0 1px rgba(16,185,129,0.2), 0 0 40px rgba(16,185,129,0.15), 0 0 80px rgba(59,130,246,0.1)',
              }}
            >
              {/* Photo */}
              <img
                src="/photo-dedy.jpg"
                alt="Dedy Wijaya - Senior Android Engineer"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-500/20 via-transparent to-accent-500/10" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-400/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-400/50 rounded-br-2xl" />
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), rgba(59,130,246,0.3), transparent) 1' }}>
          {heroMetrics.map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">{item.value}</div>
              <div className="text-sm text-text-muted mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
