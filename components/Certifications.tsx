'use client';

import { Award } from 'lucide-react';

const featured = [
  'Jetpack Compose Crash Course for Android with Kotlin',
  'SOLID Principles: Introducing Software Architecture & Design',
  'Learning Kubernetes',
  'Scrum: The Basics',
  'Junior Mobile Programmer',
  'Junior Web Programmer',
];

export default function Certifications() {
  return (
    <section id="certifications" className="space-y-6">
      <div className="space-y-3">
        <p className="section-kicker">Learning</p>
        <h2 className="text-3xl font-black text-white">Formal learning that reinforces the delivery work.</h2>
      </div>

      <div className="section-panel">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
          <Award size={22} />
        </div>
        <div className="grid gap-3">
          {featured.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
