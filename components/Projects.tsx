'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { X, Maximize2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "NBDS (New Branch Design System)",
    desc: "Comprehensive design system implementation for enterprise banking branches.",
    stack: ["Kotlin", "MVVM", "Jetpack Compose"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"]
  },
  {
    title: "Asetku P2P Landing",
    desc: "Mobile platform for Lender & Borrower P2P financing with secure document verification.",
    stack: ["Kotlin", "Spring Boot", "Microservices"],
    images: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"]
  },
  {
    title: "Lintasarta EKYC System",
    desc: "Electronic Know Your Customer (EKYC) architecture with OCR and liveness detection.",
    stack: ["Java", "Kotlin", "Clean Architecture"],
    images: ["https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"]
  },
  {
    title: "BRI ISO8583 Payment Integration",
    desc: "Low-level socket programming for ISO8583 financial transaction messaging.",
    stack: ["JPOS", "ISO8583", "Java", "Spring Boot"],
    images: ["https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=800&auto=format&fit=crop"]
  }
];

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400">A selection of production systems I've architected and built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="group glass-panel rounded-xl overflow-hidden flex flex-col cursor-pointer"
          >
            <div className="relative h-64 w-full overflow-hidden bg-surfaceBorder">
              <Image 
                src={proj.images[0]} 
                alt={proj.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button 
                  onClick={() => setSelectedImg(proj.images[0])}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <Maximize2 />
                </button>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                {proj.title}
                <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.stack.map(s => (
                  <span key={s} className="px-2 py-1 text-xs font-mono bg-surface border border-surfaceBorder rounded text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full">
              <X />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden border border-surfaceBorder shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <Image src={selectedImg} alt="Preview" fill className="object-contain bg-black" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}