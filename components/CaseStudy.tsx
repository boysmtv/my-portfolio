'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Problem',
    body: 'Legacy banking transaction flows needed low-latency processing, safer recovery behavior, and a structure that engineers could actually debug during incidents.',
  },
  {
    title: 'Approach',
    body: 'Use modular transaction boundaries, stable message handling, and support-aware architecture choices so runtime issues become diagnosable instead of mysterious.',
  },
  {
    title: 'Tradeoff',
    body: 'In payment systems, velocity is not enough. The stronger choice is often the one that improves operability, not the one that only adds features fastest.',
  },
  {
    title: 'Impact',
    body: 'Fewer runtime surprises, stronger reuse across related integrations, and a delivery posture that better respects transaction risk and production ownership.',
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="space-y-8 py-12">
      <div className="max-w-3xl space-y-4">
        <p className="section-kicker">Case study lens</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          A useful system is one the team can keep operating after the launch excitement is over.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          This is the engineering posture behind most of my strongest work: design for production behavior,
          failure handling, and team clarity, not only for initial feature completion.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-panel overflow-hidden"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-3 text-sm uppercase tracking-[0.26em] text-sky-300">{item.title}</div>
              <p className="text-base leading-8 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
