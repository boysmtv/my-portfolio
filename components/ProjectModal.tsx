'use client';
import { motion } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Zap, Info } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  desc: string;
  longDesc: string;
  stack: string[];
  challenges: string[];
  images: string[];
}

export default function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="relative w-full max-w-5xl bg-surface border border-surfaceBorder rounded-[32px] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-white/10 transition-all border border-white/10"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto">
          {/* Hero Image */}
          <div className="relative w-full aspect-video sm:aspect-[21/9] bg-surfaceBorder">
            <Image 
              src={project.images[0]} 
              alt={project.title} 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-lg text-sm font-mono text-primary backdrop-blur-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <Info className="text-primary" size={20} /> Project Overview
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{project.longDesc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-surfaceBorder">
                      <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="glass-panel p-6 rounded-2xl border border-surfaceBorder">
                  <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-accent">
                    <Zap size={20} /> Core Challenges
                  </h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400">
                        <span className="text-accent">▹</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-surfaceBorder">
                  <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-primary">
                    <ShieldCheck size={20} /> Architecture
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Built using Clean Architecture principles, ensuring modularity and scalability for high-load financial transactions.
                  </p>
                </div>

                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  Launch Project <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
