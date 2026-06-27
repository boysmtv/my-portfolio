'use client';

import { motion } from 'framer-motion';
import { Activity, Database, Layers3, ShieldCheck, Users, Zap } from 'lucide-react';

const principles = [
  {
    title: 'Clear boundaries',
    note: 'Separate product flow, integration logic, and runtime concerns so debugging does not become archaeology.',
    icon: Layers3,
  },
  {
    title: 'Operational traceability',
    note: 'Logs, retries, fallback behavior, and observability should be designed early, especially for payment-sensitive paths.',
    icon: Activity,
  },
  {
    title: 'Pragmatic data flow',
    note: 'Repositories, services, and API clients should reduce ambiguity rather than add framework ceremony.',
    icon: Database,
  },
  {
    title: 'Risk-aware engineering',
    note: 'For fintech systems, correctness, recovery behavior, and supportability are as important as velocity.',
    icon: ShieldCheck,
  },
];

const approaches = [
  {
    title: 'Design for change',
    desc: 'I try to structure systems so future product changes cost less, not more.',
    icon: Activity,
  },
  {
    title: 'Optimize for runtime calm',
    desc: 'A system that only works when nothing goes wrong is not finished engineering.',
    icon: ShieldCheck,
  },
  {
    title: 'Keep performance practical',
    desc: 'The goal is not abstract speed, but predictable user and operational experience.',
    icon: Zap,
  },
  {
    title: 'Reduce team friction',
    desc: 'Architecture should help teams collaborate, not make each delivery change feel expensive.',
    icon: Users,
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="space-y-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4"
      >
        <p className="section-kicker">Architecture</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          I care less about fashionable diagrams and more about whether the system stays understandable under pressure.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          My architecture preference is pragmatic: modular enough to scale, explicit enough to debug, and disciplined
          enough to support real business change without collapsing into runtime chaos.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {principles.map(({ title, note, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="section-panel"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <Icon size={22} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
            <p className="text-base leading-8 text-slate-300">{note}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <p className="section-kicker">How I work</p>
          <h2 className="text-3xl font-black text-white">Principles that guide daily engineering decisions.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {approaches.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/5 text-emerald-200">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
