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
    <section id="capabilities" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        <p className="section-kicker">Capabilities</p>
        <h2 className="text-3xl font-black text-white">Tools and practices that reinforce delivery quality.</h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {stackGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
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
