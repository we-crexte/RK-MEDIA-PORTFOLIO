/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { ClientMarquee } from './components/ClientMarquee';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Instagram, Twitter, Phone as WhatsApp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-purple z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main ref={scrollRef}>
        <Hero />
        <About />
        <Portfolio />
        <ClientMarquee />
        <Testimonials />
        <Stats />
        <Services />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating Socials — hidden on mobile to avoid overlap */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] hidden md:flex flex-col gap-3">
        <SocialButton icon={<Instagram size={18} />} href="https://www.instagram.com/sniper.844" color="hover:bg-pink-600" />
        <SocialButton icon={<WhatsApp size={18} />} href="https://wa.me/916306087590" color="hover:bg-green-600" />
        <SocialButton icon={<Twitter size={18} />} href="https://x.com/roshan_editor53" color="hover:bg-blue-400" />
      </div>

      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 atmosphere pointer-events-none -z-10" />
      
      {/* Custom Mouse Cursor Glow — desktop only */}
      <CursorGlow />
    </div>
  );
}

function SocialButton({ icon, href, color }: { icon: any, href: string, color: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, x: -5 }}
      whileTap={{ scale: 0.9 }}
      className={`w-11 h-11 glass-strong rounded-full flex items-center justify-center transition-colors ${color} hover:text-white`}
    >
      {icon}
    </motion.a>
  );
}

function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-accent/8 rounded-full blur-[120px] pointer-events-none z-[-5] hidden md:block"
    />
  );
}
