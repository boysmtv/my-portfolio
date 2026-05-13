'use client';
import { motion } from 'framer-motion';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';

const certifications = [
  { name: "Pemrograman Dart: Pemula sampai mahir", issuer: "Programmer Zaman Now", year: "2023" },
  { name: "Pemrograman Kotlin: Pemula sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Jetpack Compose Crash course for Android with Kotlin", issuer: "Udemy", year: "2023" },
  { name: "Kotlin Android MVVM dan Android Jetpack Bahasa Indonesia", issuer: "Lazday Indonesia", year: "2023" },
  { name: "SOLID Principles: Introducing Software Architecture & Design", issuer: "Sujith George", year: "2023" },
  { name: "Android: Pemula Sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Git: Pemula sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Spring Boot: Pemula sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Jenkins: Pemula sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Docker: Pemula sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Database MySQL: Pemula sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Database PostgreSQL: Pemula sampai Mahir", issuer: "Programmer Zaman Now!", year: "2023" },
  { name: "Belajar Prinsip Pemrograman SOLID", issuer: "Dicoding", year: "2022" },
  { name: "CompTIA Network+ (N10-007) Cert Prep: 7 Wireless, Virtual, Cloud, and Mobile Networking", issuer: "LinkedIn Learning", year: "2021" },
  { name: "Scrum: The Basics", issuer: "LinkedIn Learning", year: "2021" },
  { name: "Cert Prep: Scrum Master", issuer: "LinkedIn Learning", year: "2021" },
  { name: "Kotlin for Android: Best Practices", issuer: "LinkedIn Learning", year: "2021" },
  { name: "Learning Kubernetes", issuer: "LinkedIn Learning", year: "2021" },
  { name: "Junior Mobile Programmer", issuer: "BPPTIK", year: "2019" },
  { name: "Junior Web Programmer", issuer: "BPPTIK", year: "2019" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl">
            <Award className="text-yellow-400" />
          </div>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <p className="text-gray-400">Continuous learning and professional validation across full-stack technologies.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, i) => (
          <motion.a
            href="#"
            target="_blank"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            key={i}
            className="group glass-panel p-6 rounded-2xl border border-surfaceBorder flex flex-col justify-between hover:bg-white/5 transition-all"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <BadgeCheck className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{cert.year}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <ExternalLink size={14} className="text-gray-700 group-hover:text-white transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
