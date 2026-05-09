'use client';

import { Trophy } from 'lucide-react';

const signals = [
  'Best Laboratory Assistant recognition',
  'Internship exposure across public sector and technical service environments',
  'Early networking and MikroTik workshop participation',
  'Hands-on learning culture carried into current engineering work',
];

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-6">
      <div className="space-y-3">
        <p className="section-kicker">Signals</p>
        <h2 className="text-3xl font-black text-white">Useful supporting signals beyond shipping code.</h2>
      </div>

      <div className="section-panel">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
          <Trophy size={22} />
        </div>
        <div className="space-y-4">
          {signals.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
