'use client';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative py-24 border-t border-surfaceBorder">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <GraduationCap className="text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <p className="text-gray-500 leading-relaxed">
            My academic foundation in computer science provided the theoretical core for my engineering career.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-panel p-10 rounded-[40px] border border-surfaceBorder"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-black text-white">Universitas Singaperbangsa Karawang</h3>
              <p className="text-primary font-bold">Bachelor of Computer Science</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-surface border border-surfaceBorder text-gray-400 font-mono text-sm">
              2015 – 2019
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-sm text-gray-500 uppercase tracking-widest">Performance</div>
              <div className="text-4xl font-black text-white">3.49 <span className="text-lg text-gray-500">/ 4.00</span></div>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-gray-500 uppercase tracking-widest">Focus</div>
              <div className="flex flex-wrap gap-2">
                {["Software Engineering", "Networks", "Artificial Intelligence", "Information Systems"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface border border-surfaceBorder rounded-full text-xs text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
