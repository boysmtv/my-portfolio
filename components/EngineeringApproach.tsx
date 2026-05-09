'use client';

import { Activity, ShieldCheck, Users, Zap } from 'lucide-react';

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

export default function EngineeringApproach() {
  return (
    <section id="approach" className="space-y-6 py-12">
      <div className="space-y-3">
        <p className="section-kicker">Approach</p>
        <h2 className="text-3xl font-black text-white">How I like to work when the system actually matters.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {approaches.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="section-panel">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sky-200">
              <Icon size={20} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm leading-7 text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
