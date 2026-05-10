'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { featuredProjects } from './portfolio-data';

const featuredBreakdown = featuredProjects[0];

export default function CaseStudy() {
  return (
    <section id="case-study" className="space-y-8 py-12">
      <div className="max-w-4xl space-y-4">
        <p className="section-kicker">Case study breakdown</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          One project, seen the way a hiring manager or client actually reads engineering ownership.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          Instead of staying generic, this section breaks down the strongest signal from my payments work:
          production-grade delivery under operational pressure, with architecture choices shaped by incident reality.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-panel overflow-hidden"
      >
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.26em] text-sky-300">{featuredBreakdown.category}</p>
              <h3 className="text-3xl font-black text-white">{featuredBreakdown.title}</h3>
              <p className="text-base uppercase tracking-[0.18em] text-slate-400">{featuredBreakdown.ownership}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 text-sm uppercase tracking-[0.26em] text-sky-300">Problem</div>
                <p className="text-base leading-8 text-slate-300">
                  Legacy banking transaction flows needed low-latency processing, safer recovery behavior, and a
                  structure that engineers could actually debug during incidents.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 text-sm uppercase tracking-[0.26em] text-sky-300">Approach</div>
                <p className="text-base leading-8 text-slate-300">
                  Use modular transaction boundaries, stable message handling, and support-aware architecture choices
                  so runtime issues become diagnosable instead of mysterious.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 text-sm uppercase tracking-[0.26em] text-sky-300">Tradeoff</div>
                <p className="text-base leading-8 text-slate-300">
                  In payment systems, velocity is not enough. The stronger choice is often the one that improves
                  operability, not the one that only adds features fastest.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 text-sm uppercase tracking-[0.26em] text-sky-300">Impact</div>
                <p className="text-base leading-8 text-slate-300">
                  Fewer runtime surprises, stronger reuse across related integrations, and a delivery posture that
                  better respects transaction risk and production ownership.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.7rem] border border-white/10 bg-black/20 p-6">
              <div className="mb-3 text-sm uppercase tracking-[0.24em] text-slate-400">What this shows</div>
              <div className="space-y-3">
                {featuredBreakdown.impact.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-black/20 p-6">
              <div className="mb-3 text-sm uppercase tracking-[0.24em] text-slate-400">Evidence panels</div>
              <div className="space-y-3">
                {featuredBreakdown.evidencePanels.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-base font-semibold text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link href={`/case-studies/${featuredBreakdown.slug}`} className="primary-button">
              Read full {featuredBreakdown.title} case study
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
