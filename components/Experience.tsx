'use client';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const expData = [
  {
    company: "PT Ikonsultan Inovatama",
    role: "Android Developer",
    date: "Nov 2023 – Present",
    desc: ["Designed scalable mobile & backend architecture.", "Integrated Android apps with backend APIs.", "Worked with ISO8583-based payment systems.", "Applied MVVM, Retrofit, Dagger.", "Handled production issues and debugging."]
  },
  {
    company: "PT Jasa Teknologi Informasi (IBM)",
    role: "Android Developer",
    date: "Nov 2022 – Oct 2023",
    desc: ["Built scalable architecture using MVVM.", "Integrated APIs with backend teams.", "Improved reliability and performance.", "Used Kotlin, Hilt, Retrofit."]
  },
  {
    company: "PT Pintar Inovasi Digital (Asetku)",
    role: "Sr. Fullstack Android Developer",
    date: "Mar 2022 – Oct 2022",
    desc: ["Rebuilt Android app using Kotlin + MVVM.", "Designed mobile & backend architecture.", "Built REST APIs and microservices.", "Improved performance and stability."]
  },
  {
    company: "PT Aplikanusa Lintasarta",
    role: "Technical Lead Developer",
    date: "Mar 2021 – Feb 2022",
    desc: ["Led E-KYC system development.", "Designed architecture and workflows.", "Managed team and delivery."]
  },
  {
    company: "PT Pasifik Cipta Solusi",
    role: "Fullstack Android Developer",
    date: "Sep 2019 – May 2021",
    desc: ["Built Android + backend systems.", "Integrated REST APIs.", "Applied clean architecture."]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-surface border border-surfaceBorder rounded-lg">
          <Briefcase className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </div>

      <div className="relative border-l border-surfaceBorder ml-6 md:ml-8 space-y-12 pb-8">
        {expData.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{item.role}</h3>
              <span className="text-sm font-mono text-gray-500">{item.date}</span>
            </div>
            <h4 className="text-lg text-primary mb-4">{item.company}</h4>
            
            <ul className="space-y-2">
              {item.desc.map((bullet, j) => (
                <li key={j} className="text-gray-400 flex gap-2 items-start">
                  <span className="text-primary mt-1.5 opacity-50">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}