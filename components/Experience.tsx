'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarRange } from 'lucide-react';

const experience = [
  {
    company: 'PT Ikonsultan Inovatama',
    role: 'Android Developer',
    period: 'Nov 2023 - Present',
    summary:
      'Worked on financial system integration, Android delivery, ISO8583 workflow customization, and runtime stability improvements in production-sensitive environments.',
    signals: ['financial integration architecture', 'ISO8583 workflow work', 'production debugging', 'full SDLC contribution'],
  },
  {
    company: 'PT Jasa Teknologi Informasi / IBM',
    role: 'Android Developer',
    period: 'Nov 2022 - Oct 2023',
    summary:
      'Focused on scalable Android architecture, API integration, and improving reliability across feature delivery and production maintenance.',
    signals: ['MVVM and single activity patterns', 'REST integration', 'reliability improvements', 'clean architecture discipline'],
  },
  {
    company: 'PT Pintar Inovasi Digital / Asetku',
    role: 'Sr. Fullstack Android Developer',
    period: 'Mar 2022 - Oct 2022',
    summary:
      'Handled product rebuild work across mobile and backend concerns, with emphasis on maintainability, delivery speed, and fintech product readiness.',
    signals: ['mobile rebuild ownership', 'backend collaboration', 'performance tuning', 'business critical features'],
  },
  {
    company: 'PT Aplikanusa Lintasarta',
    role: 'Technical Lead Developer',
    period: 'Mar 2021 - Feb 2022',
    summary:
      'Led enterprise eKYC delivery from technical design to deployment, support, infrastructure concerns, and client-facing architecture explanation.',
    signals: ['technical leadership', '99.9% uptime target', 'cloud and firewall setup', 'vulnerability and pentest exposure'],
  },
  {
    company: 'PT Pasifik Cipta Solusi',
    role: 'Fullstack Android Developer',
    period: 'Sep 2019 - May 2021',
    summary:
      'Built payment-oriented Android and backend systems with strong ISO8583 exposure, full SDLC involvement, and operational reliability concerns.',
    signals: ['payment systems', 'ISO8583 specialization', 'deployment handling', 'clean architecture'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 py-12">
      <div className="max-w-3xl space-y-4">
        <p className="section-kicker">Experience</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          Career moves that steadily increased scope, system complexity, and production responsibility.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          The pattern across these roles is consistent: move closer to critical systems, own more runtime risk,
          and contribute at a deeper technical and delivery level.
        </p>
      </div>

      <div className="space-y-5">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="section-panel"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                  <BriefcaseBusiness size={14} />
                  {item.company}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                <p className="text-base leading-8 text-slate-300">{item.summary}</p>
              </div>
              <div className="inline-flex h-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-400">
                <CalendarRange size={14} />
                {item.period}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {item.signals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
                  {signal}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
