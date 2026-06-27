'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

import { heroMetrics, siteSummary } from './portfolio-data';

const entry = {
  badge: { initial: { opacity: 0, y: -12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  headline: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
  subheadline: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.2 } },
  visual: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] } },
  trust: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.35 } },
  cta: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: 0.45 } },
};

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen bg-gradient-to-b from-[#070B14] via-[#070B14] to-[#0a1520]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.04),transparent_60%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a1520] to-transparent" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pb-12 pt-32 sm:px-10 lg:flex-row lg:px-14">
        <div className="flex-1 space-y-10">
          <motion.div {...entry.badge} className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2.5 text-xs uppercase tracking-[0.28em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            Technical Lead · Fintech · Android · Payments
          </motion.div>

          <div className="space-y-6">
            <motion.h1 {...entry.headline} className="text-5xl font-black leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              Building payment systems
              <br />
              <span className="bg-[linear-gradient(90deg,#34d399_0%,#38bdf8_50%,#7dd3fc_100%)] bg-clip-text text-transparent">
                that survive production reality.
              </span>
            </motion.h1>

            <motion.p {...entry.subheadline} className="text-lg leading-relaxed text-slate-300 sm:text-xl">
              Dedy Wijaya — Technical Lead with 6+ years shipping payment infrastructure, Android platforms, and backend integrations for Indonesia&apos;s largest financial institutions.
            </motion.p>
          </div>

          <motion.div {...entry.trust} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-4">
            {heroMetrics.map((item) => (
              <div key={item.label} className="bg-[#070B14] px-5 py-5">
                <div className="text-3xl font-black text-white sm:text-4xl">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...entry.cta} className="flex flex-wrap items-center gap-4">
            <Link href="/case-studies" className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#34d399,#38bdf8)] px-7 py-3.5 text-sm font-bold text-[#021019] shadow-[0_20px_44px_rgba(52,211,153,0.26)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(52,211,153,0.3)]">
              Review my case studies
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/capabilities" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] hover:text-white">
              See what I build
            </Link>
            <div className="flex items-center gap-2 pl-2">
              <a href={siteSummary.github} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400/30 hover:text-white" aria-label="GitHub profile">
                <Github size={18} />
              </a>
              <a href={siteSummary.linkedin} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400/30 hover:text-white" aria-label="LinkedIn profile">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${siteSummary.contactEmail}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400/30 hover:text-white" aria-label="Send email">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div {...entry.visual} className="mt-12 flex-1 lg:mt-0 lg:pl-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-[linear-gradient(135deg,rgba(52,211,153,0.12),rgba(56,189,248,0.08))] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0c1528] p-8 shadow-[0_40px_120px_rgba(2,6,23,0.5)]">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-600">engineering.brief.sh</span>
              </div>

              <div className="space-y-3 font-mono text-sm leading-relaxed">
                <div className="flex">
                  <span className="text-emerald-400">$</span>
                  <span className="ml-2 text-slate-300">whoami</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500">→</span>
                  <span className="ml-2 text-sky-300">Dedy Wijaya</span>
                </div>
                <div className="flex pt-1">
                  <span className="text-emerald-400">$</span>
                  <span className="ml-2 text-slate-300">cat /etc/engineering-profile</span>
                </div>
                <div className="space-y-1 border-l-2 border-emerald-400/30 pl-4 text-slate-400">
                  <p>role: Technical Lead</p>
                  <p>domain: fintech / payments</p>
                  <p>stack: android + backend</p>
                  <p>tenure: 6+ years</p>
                  <p>status: open to conversation</p>
                </div>
                <div className="flex pt-1">
                  <span className="text-emerald-400">$</span>
                  <span className="ml-2 text-slate-300">_</span>
                  <span className="ml-0.5 h-5 w-2.5 animate-pulse bg-emerald-400" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { label: 'reliability', value: '99.9%', color: 'text-emerald-300' },
                  { label: 'delivery', value: '20+', color: 'text-sky-300' },
                  { label: 'support', value: 'L2/L3', color: 'text-emerald-300' },
                  { label: 'protocol', value: 'ISO8583', color: 'text-sky-300' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                    <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
