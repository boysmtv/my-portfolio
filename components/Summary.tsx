'use client';

import { motion } from 'framer-motion';
import { Banknote, Binary, ShieldCheck, Smartphone } from 'lucide-react';

const focusCards = [
  {
    title: 'Fintech systems',
    body: 'Payment products, transaction paths, and operationally sensitive systems where correctness matters as much as speed.',
    icon: Banknote,
  },
  {
    title: 'Android delivery',
    body: 'Scalable Android foundations with strong state handling, maintainability, and resilience under changing product needs.',
    icon: Smartphone,
  },
  {
    title: 'Backend integration',
    body: 'Reliable service integration, API orchestration, and the engineering discipline needed for cross-surface delivery.',
    icon: Binary,
  },
  {
    title: 'Operational trust',
    body: 'Monitoring, debugging, production support, and support-aware architecture choices that reduce future surprises.',
    icon: ShieldCheck,
  },
];

export default function Summary() {
  return (
    <section id="summary" className="space-y-10 py-12">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-panel space-y-6"
        >
          <p className="section-kicker">Profile</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Engineering value with a bias toward delivery quality, runtime calm, and systems that teams can actually operate.
          </h2>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              My strongest work sits at the intersection of product pressure and engineering discipline:
              fintech delivery, Android architecture, backend integration, and production-grade payment behavior.
            </p>
            <p>
              I tend to be most useful when a system needs clearer structure, better runtime behavior, and
              someone who can move between implementation, debugging, and architecture conversations without
              losing business context.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-panel grid gap-4 sm:grid-cols-2"
        >
          {focusCards.map(({ title, body, icon: Icon }) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-7 text-slate-400">{body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
