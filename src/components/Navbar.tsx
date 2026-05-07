import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Play } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[90] transition-all duration-500 px-4 sm:px-6 md:px-10",
      scrolled ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-4 sm:py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tighter uppercase">RK MEDIA</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-medium uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#contact"
            className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            Start Project
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full glass border-white/10 active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] lg:hidden flex flex-col justify-center items-center gap-8 p-8"
          >
            <button 
              className="absolute top-6 right-6 p-3 rounded-full glass border-white/10 active:scale-90 transition-transform"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-accent transition-colors active:scale-95"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 px-10 py-4 bg-accent text-white text-sm font-bold uppercase tracking-widest rounded-full active:scale-95 transition-transform"
              >
                Start Project
              </motion.a>
            </div>

            <div className="absolute bottom-8 text-[9px] uppercase font-bold tracking-[0.3em] opacity-20">
              RK MEDIA / 2024
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
