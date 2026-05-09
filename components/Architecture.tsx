'use client';

import { motion } from 'framer-motion';
import { Activity, Database, Layers3, ShieldCheck } from 'lucide-react';

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

export default function Architecture() {
  return (
    <section id="architecture" className="space-y-8 py-12">
      <div className="max-w-3xl space-y-4">
        <p className="section-kicker">Architecture</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          I care less about fashionable diagrams and more about whether the system stays understandable under pressure.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          My architecture preference is pragmatic: modular enough to scale, explicit enough to debug, and disciplined
          enough to support real business change without collapsing into runtime chaos.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {principles.map(({ title, note, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="section-panel"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
              <Icon size={22} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
            <p className="text-base leading-8 text-slate-300">{note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
