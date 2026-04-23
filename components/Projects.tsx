'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "NBDS (New Branch Design System)",
    desc: "Design system for bank branch modernization with reusable UI components.",
    longDesc: "Designed and implemented a comprehensive UI design system for a major bank's branch terminals. Focused on consistency, accessibility, and high-performance rendering across 500+ locations.",
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Design Tokens"],
    challenges: ["Standardizing UI across 500+ branch terminals", "Ensuring low-latency UI updates on legacy hardware"],
    images: ["https://picsum.photos/seed/nbds/800/450", "https://picsum.photos/seed/nbds2/800/450"]
  },
  {
    title: "Asetku P2P Landing (Lender & Borrower)",
    desc: "P2P lending platform frontend for lenders and borrowers.",
    longDesc: "Full-cycle development of the Asetku mobile application. Integrated complex KYC flows, real-time loan matching, and secure payment processing for thousands of daily active users.",
    stack: ["Kotlin", "MVVM", "Retrofit", "Coroutines", "REST API"],
    challenges: ["Real-time loan matching and KYC integration", "Securing user financial data and KYC documents"],
    images: ["https://picsum.photos/seed/asetku/800/450", "https://picsum.photos/seed/asetku2/800/450"]
  },
  {
    title: "Lintasarta EKYC (Digital Identity Verification)",
    desc: "End-to-end digital identity verification system for enterprise clients.",
    longDesc: "End-to-end digital identity verification system utilizing OCR and liveness detection. Architected for high availability and strict security compliance.",
    stack: ["Kotlin", "Java", "Spring Boot", "OCR", "Liveness Detection"],
    challenges: ["99.9% uptime SLA with biometric accuracy", "Optimizing biometric accuracy across different lighting conditions"],
    images: ["https://picsum.photos/seed/ekyc/800/450", "https://picsum.photos/seed/ekyc2/800/450"]
  },
  {
    title: "BRI - Full Managed Services (ISO8583 Debit & Payment)",
    desc: "Full managed payment services for BRI bank using ISO8583 protocol.",
    longDesc: "Core payment switching integration using the ISO8583 protocol. Handled millions of debit and payment transactions daily with zero downtime architecture.",
    stack: ["Java", "JPOS", "ISO8583", "Spring Boot", "Microservices"],
    challenges: ["Handling millions of daily transactions with zero downtime", "Debugging proprietary ISO8583 bitmap extensions"],
    images: ["https://picsum.photos/seed/bri/800/450", "https://picsum.photos/seed/bri2/800/450"]
  },
  {
    title: "Brizzi Module Payment App",
    desc: "NFC-based prepaid card payment module integrated into BRI's ecosystem.",
    longDesc: "Specialized Android module for Brizzi NFC card interactions. Implemented secure element communication and offline balance synchronization.",
    stack: ["Kotlin", "NFC", "ISO8583", "MVVM", "Android SDK"],
    challenges: ["Offline payment support and card balance sync", "Ensuring NFC stability across various device brands"],
    images: ["https://picsum.photos/seed/brizzi/800/450", "https://picsum.photos/seed/brizzi2/800/450"]
  },
  {
    title: "Lazismu FrontEnd (Waqf Donation App)",
    desc: "Islamic charity and waqf donation platform with real-time tracking.",
    longDesc: "Comprehensive donation platform for Lazismu. Features real-time transparency tracking, multi-payment gateway integration, and automated reporting.",
    stack: ["Kotlin", "MVVM", "Retrofit", "Firebase", "Midtrans Payment"],
    challenges: ["Multi-payment gateway integration and donation transparency", "Maintaining transparency and real-time donation updates"],
    images: ["https://picsum.photos/seed/lazismu/800/450", "https://picsum.photos/seed/lazismu2/800/450"]
  },
  {
    title: "LinkAja Module Payment",
    desc: "Payment module integration for LinkAja e-wallet.",
    longDesc: "Developed a lightweight, high-performance payment module for the LinkAja SDK. Designed for seamless embedding into host applications.",
    stack: ["Kotlin", "SDK Integration", "MVVM", "REST API"],
    challenges: ["Seamless SDK embedding into host apps without performance degradation", "Ensuring host app compatibility"],
    images: ["https://picsum.photos/seed/linkaja/800/450"]
  },
  {
    title: "Dashboard Monitoring EDC SPBU (Pertamina)",
    desc: "Real-time monitoring dashboard for EDC machines at Pertamina gas stations.",
    longDesc: "Real-time monitoring dashboard for EDC machines across Pertamina gas stations nationwide. Utilized WebSockets for live status updates.",
    stack: ["Spring Boot", "PostgreSQL", "WebSocket", "Docker", "React"],
    challenges: ["Real-time data streaming from 1000+ EDC terminals nationwide", "Building a scalable monitoring architecture"],
    images: ["https://picsum.photos/seed/pertamina/800/450"]
  },
  {
    title: "Sistem Pakar Gastroenteritis Pada Anak",
    desc: "Expert system for diagnosing gastroenteritis in children using rule-based AI.",
    longDesc: "Diagnostic system for pediatric gastroenteritis using the Forward Chaining algorithm. Developed based on medical expert knowledge bases.",
    stack: ["Java", "Forward Chaining Algorithm", "MySQL", "Web"],
    challenges: ["Accuracy of diagnostic rules based on medical expert knowledge", "Ensuring diagnostic accuracy"],
    images: ["https://picsum.photos/seed/expert/800/450"]
  },
  {
    title: "Dashboard & Merchant Management",
    desc: "Merchant onboarding and management dashboard for payment aggregators.",
    longDesc: "Multi-tenant management dashboard for payment aggregators. Features role-based access, merchant onboarding, and transaction settlements.",
    stack: ["Spring Boot", "PostgreSQL", "React", "Docker", "REST API"],
    challenges: ["Multi-tenant architecture with role-based access control", "Complex financial settlement logic"],
    images: ["https://picsum.photos/seed/merchant/800/450"]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-accent/10 border border-accent/20 rounded-2xl">
            <Layers className="text-accent" />
          </div>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>
        <p className="text-gray-400 max-w-2xl">
          A deep dive into the systems I&apos;ve architected and built. From low-level payment protocols to high-end mobile UIs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={proj.title} 
            className="group glass-panel rounded-3xl overflow-hidden flex flex-col cursor-pointer hover:-translate-y-2"
            onClick={() => setSelectedProject(proj)}
          >
            <div className="relative h-56 w-full overflow-hidden bg-surfaceBorder">
              <Image 
                src={proj.images[0]} 
                alt={proj.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full scale-90 group-hover:scale-100 transition-transform">
                  View Case Study <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.stack.slice(0, 3).map(s => (
                  <span key={s} className="px-2 py-0.5 text-[10px] font-mono bg-surface border border-surfaceBorder rounded text-accent">
                    {s}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center justify-between group-hover:text-primary transition-colors">
                {proj.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">{proj.desc}</p>
              
              <div className="pt-4 border-t border-surfaceBorder flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono tracking-tighter uppercase">Production Ready</span>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
