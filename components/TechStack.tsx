'use client';

import { motion } from 'framer-motion';

const stackGroups = [
  {
    title: 'Android delivery',
    items: ['Kotlin', 'Jetpack Compose', 'MVVM / MVI', 'Hilt / Dagger', 'Coroutines / Flow', 'Retrofit'],
  },
  {
    title: 'Backend and integration',
    items: ['Java', 'Spring Boot', 'REST API', 'Microservices', 'ISO8583 / JPOS', 'PostgreSQL'],
  },
  {
    title: 'Runtime and delivery',
    items: ['Docker', 'Kubernetes', 'Linux', 'CI/CD pipeline', 'Git workflows', 'Production debugging'],
  },
];

export default function TechStack() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="section-kicker">Technical focus</p>
        <h2 className="text-3xl font-black text-white">Tools are useful, but only when they reinforce delivery quality.</h2>
      </div>

      <div className="space-y-4">
        {stackGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="section-panel"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
