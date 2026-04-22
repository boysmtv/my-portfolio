'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-panel border-b-0 border-surfaceBorder"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-sm">DW</div>
          <span>Boys.mtv</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#architecture" className="hover:text-white transition-colors">Architecture</Link>
          <Link href="#approach" className="hover:text-white transition-colors">Engineering</Link>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/boysmtv" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/dedy-wijaya-421698196/" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}