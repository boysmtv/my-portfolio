'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';
import { useState } from 'react';

const certificationList = [
  'Jetpack Compose Crash Course for Android with Kotlin',
  'SOLID Principles: Introducing Software Architecture & Design',
  'Learning Kubernetes',
  'Scrum: The Basics',
  'Junior Mobile Programmer',
  'Junior Web Programmer',
];

const signals = [
  'Best Laboratory Assistant recognition',
  'Internship exposure across public sector and technical service environments',
  'Early networking and MikroTik workshop participation',
  'Hands-on learning culture carried into current engineering work',
];

const focusAreas = ['Software Engineering', 'Networks', 'Artificial Intelligence', 'Information Systems'];

const tabs = ['Education', 'Certifications', 'Achievements'] as const;
type Tab = (typeof tabs)[number];

export default function Background() {
  const [activeTab, setActiveTab] = useState<Tab>('Education');

  return (
    <section id="background" className="space-y-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        <p className="section-kicker">Background</p>
        <h2 className="text-3xl font-black text-white">Academic and professional foundation.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="section-panel"
      >
        <div className="mb-6 flex gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-emerald-400/15 text-emerald-200'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Education' && (
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Universitas Singaperbangsa Karawang</h3>
              <p className="text-emerald-300">Bachelor of Computer Science · 2015 - 2019</p>
            </div>
            <div className="text-sm leading-7 text-slate-300">GPA 3.49 / 4.00</div>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Certifications' && (
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
              <Award size={22} />
            </div>
            <div className="grid gap-3">
              {certificationList.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Achievements' && (
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
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
        )}
      </motion.div>
    </section>
  );
}
