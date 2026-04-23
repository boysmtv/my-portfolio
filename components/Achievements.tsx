'use client';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2 } from 'lucide-react';

const achievements = [
  { title: "Best Laboratory Assistant", year: "2018" },
  { title: "Internship: Ombudsman Republik Indonesia (Perwakilan Jakarta Raya)", year: "2018" },
  { title: "Internship: IT Tech Computer", year: "2018" },
  { title: "Workshop Mikrotik", year: "2016" },
  { title: "Webinars Internet Of Things & Arduino", year: "2016" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 border-t border-surfaceBorder">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-2xl">
          <Trophy className="text-green-500" />
        </div>
        <h2 className="text-3xl font-bold">Achievements & Workshops</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((ach, i) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i}
            className="flex items-center gap-6 p-6 glass-panel rounded-2xl border border-surfaceBorder group"
          >
            <div className="w-12 h-12 rounded-xl bg-surface border border-surfaceBorder flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <CheckCircle2 />
            </div>
            <div>
              <h3 className="font-bold text-white group-hover:text-primary transition-colors">{ach.title}</h3>
              <p className="text-xs text-gray-500 font-mono tracking-widest">{ach.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
