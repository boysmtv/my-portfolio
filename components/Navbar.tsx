'use client';

import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Detect active section
      const sections = ['work', 'about', 'experience', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-nav transition-all duration-300 ${
        scrolled ? 'bg-base-900/75 backdrop-blur-xl border-b border-border-subtle' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="site-wrap flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-tight text-text-primary hover:text-brand-400 transition-colors"
        >
          dedy<span className="text-brand-500">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-sm transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-brand-400'
                  : 'text-text-muted hover:text-text-primary'
              }`}
              aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop social + CTA */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://github.com/boysmtv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dedy-wijaya-421698196/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:boys.mtv@gmail.com"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-text-primary md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 border-t border-border-subtle' : 'max-h-0'
        }`}
      >
        <div className="bg-base-900/95 backdrop-blur-xl px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`block text-sm transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-brand-400'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-5 border-t border-border-subtle pt-5">
            <a href="https://github.com/boysmtv" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dedy-wijaya-421698196/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:boys.mtv@gmail.com" className="text-text-muted hover:text-text-primary" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border-subtle">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
