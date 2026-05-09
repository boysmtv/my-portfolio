'use client';

import { GraduationCap } from 'lucide-react';

const focus = ['Software Engineering', 'Networks', 'Artificial Intelligence', 'Information Systems'];

export default function Education() {
  return (
    <section id="education" className="space-y-6">
      <div className="space-y-3">
        <p className="section-kicker">Education</p>
        <h2 className="text-3xl font-black text-white">Academic foundation that supported the engineering path.</h2>
      </div>

      <div className="section-panel">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
          <GraduationCap size={22} />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Universitas Singaperbangsa Karawang</h3>
            <p className="text-sky-300">Bachelor of Computer Science · 2015 - 2019</p>
          </div>
          <div className="text-sm leading-7 text-slate-300">GPA 3.49 / 4.00</div>
          <div className="flex flex-wrap gap-3">
            {focus.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
