'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'Summary', href: '#summary' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Certificates', href: '#certifications' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'glass-panel h-16 border-b' : 'h-24 bg-transparent border-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter flex gap-2 items-center group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
            DW
          </div>
          <span className="group-hover:text-primary transition-colors">Boys.mtv</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <div className="hidden sm:flex gap-2">
            <Link href="https://github.com/boysmtv" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white">
              <Github size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/dedy-wijaya-421698196/" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </Link>
          </div>
          
          <button 
            className="md:hidden p-2 text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden glass-panel border-x-0 border-t-0 bg-surface/95 backdrop-blur-xl"
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-surfaceBorder">
            <Link href="https://github.com/boysmtv" target="_blank" className="text-gray-400"><Github /></Link>
            <Link href="https://www.linkedin.com/in/dedy-wijaya-421698196/" target="_blank" className="text-gray-400"><Linkedin /></Link>
            <Link href="mailto:boys.mtv@gmail.com" className="text-gray-400"><Mail /></Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
