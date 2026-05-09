'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ShieldCheck, Workflow } from 'lucide-react';

import { heroMetrics, proofChips } from './portfolio-data';

export default function Hero() {
  return (
    <section className="hero-shell relative isolate overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-14">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(57,189,255,0.22),transparent_56%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-6rem] top-72 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
            Technical Lead · Android · Backend · Payments
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="space-y-6"
          >
            <p className="section-kicker">Engineering portfolio</p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              Building payment and product systems that stay useful{' '}
              <span className="text-transparent bg-[linear-gradient(90deg,#7dd3fc_0%,#38bdf8_35%,#34d399_100%)] bg-clip-text">
                under production pressure.
              </span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              I&apos;m Dedy Wijaya, a Technical Lead and Senior Engineer focused on fintech delivery,
              Android architecture, backend integration, and operationally reliable payment systems.
              I build for shipping, debugging, and scaling, not only for demo day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="flex flex-wrap gap-3"
          >
            {proofChips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="primary-button"
            >
              View featured work
              <ArrowRight size={18} />
            </button>
            <a href="mailto:boys.mtv@gmail.com" className="secondary-button">
              <Mail size={18} />
              Contact Dedy
            </a>
            <a href="https://www.linkedin.com/in/dedy-wijaya-421698196/" target="_blank" rel="noreferrer" className="secondary-button">
              <Download size={18} />
              LinkedIn profile
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="hero-console"
        >
          <div className="hero-console__header">
            <span>engineering brief</span>
            <span>production-minded profile</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {heroMetrics.map((item) => (
              <div key={item.label} className="metric-card">
                <div className="metric-value">{item.value}</div>
                <div className="metric-label">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            <div className="signal-card">
              <div className="signal-card__title">
                <ShieldCheck size={18} className="text-emerald-300" />
                Trust profile
              </div>
              <p>
                Strongest where engineering quality meets risk: payment flows, production support,
                cross-team delivery, and systems that need to remain calm when incidents happen.
              </p>
            </div>
            <div className="signal-card">
              <div className="signal-card__title">
                <Workflow size={18} className="text-sky-300" />
                Preferred contribution style
              </div>
              <p>
                Clarify requirements, structure delivery, reduce runtime surprises, and leave teams
                with systems that are easier to operate after launch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
