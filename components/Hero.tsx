'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow blur-[100px] opacity-20 rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surfaceBorder bg-surface/50 text-sm text-gray-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for new opportunities in Jakarta & Remote
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Building scalable <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            fintech ecosystems.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          I'm <strong className="text-white">Dedy Wijaya</strong>, a Technical Lead & Senior Engineer with 6+ years of experience. I specialize in high-performance Android applications and robust backend architectures, particularly ISO8583 & JPOS payment systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            View Projects <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 rounded-lg border border-surfaceBorder hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            <Terminal size={18} /> Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}