'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const expData = [
  {
    company: "PT Ikonsultan Inovatama",
    role: "Android Developer",
    date: "Nov 2023 – Present",
    desc: [
      "Designed and implemented scalable mobile & backend integration architecture for financial systems.",
      "Customized and optimized ISO8583-based payment workflows in collaboration with backend teams.",
      "Applied MVVM, Retrofit, and Dagger to build modular and maintainable codebase.",
      "Troubleshot production issues and improved system stability through debugging and monitoring.",
      "Contributed to full SDLC: design, development, testing, and deployment."
    ]
  },
  {
    company: "PT Jasa Teknologi Informasi / IBM",
    role: "Android Developer",
    date: "Nov 2022 – Oct 2023",
    desc: [
      "Built scalable Android architecture using MVVM and Single Activity pattern.",
      "Integrated REST APIs and ensured seamless data flow across systems.",
      "Improved application reliability through production issue handling and optimization.",
      "Developed new features and enhanced existing modules based on business requirements.",
      "Applied clean architecture principles, design patterns, and best coding practices."
    ]
  },
  {
    company: "PT Pintar Inovasi Digital / Asetku",
    role: "Sr. Fullstack Android Developer",
    date: "Mar 2022 – Oct 2022",
    desc: [
      "Rebuilt Asetku mobile application using Kotlin, MVVM, Coroutines, and Retrofit.",
      "Designed scalable mobile & backend architecture for fintech services.",
      "Developed and maintained REST APIs and microservices for core features.",
      "Improved performance, resolved bottlenecks, and ensured system stability.",
      "Collaborated with cross-functional teams to deliver business-critical features."
    ]
  },
  {
    company: "PT Aplikanusa Lintasarta",
    role: "Technical Lead Developer",
    date: "Mar 2021 – Feb 2022",
    desc: [
      "Led end-to-end E-KYC system development and deployment with 99.9% uptime SLA.",
      "Translated business requirements into scalable technical solutions and system architecture.",
      "Managed L2 support, debugging, and incident escalation.",
      "Set up and managed cloud infrastructure, virtual machines, and firewall configurations.",
      "Conducted vulnerability testing and penetration testing (pentest).",
      "Presented technical solutions and system architecture to clients."
    ]
  },
  {
    company: "PT Pasifik Cipta Solusi",
    role: "Fullstack Android Developer",
    date: "Sep 2019 – May 2021",
    desc: [
      "Built end-to-end Android and backend system architecture, specializing in ISO8583 integration.",
      "Developed scalable applications and integrated complex REST APIs.",
      "Managed full SDLC: development, testing, and deployment.",
      "Optimized performance and ensured system stability using clean architecture.",
      "Worked extensively on payment systems and financial transaction flows."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-primary/10 border border-primary/20 rounded-2xl">
          <Briefcase className="text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Career Timeline</h2>
          <p className="text-gray-500">My professional journey in the tech industry.</p>
        </div>
      </div>

      <div className="relative border-l-2 border-surfaceBorder ml-4 md:ml-12 space-y-16">
        {expData.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="relative pl-10 md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                  <div className="text-primary font-semibold text-sm">{item.company}</div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-surfaceBorder text-xs font-mono text-gray-400">
                  <Calendar size={14} /> {item.date}
                </div>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.desc.map((bullet, j) => (
                  <li key={j} className="text-gray-400 flex gap-3 items-start group/li">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 group-hover/li:bg-primary transition-colors" />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
