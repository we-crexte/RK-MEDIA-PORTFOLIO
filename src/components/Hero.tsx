import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20">
      {/* Background image exposure */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/api/artifacts/981c2f1f-4cc5-4309-84d5-8292c3008985" 
          alt="Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        {/* Cinematic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Now Accepting New Projects</span>
        </motion.div>

        <h1 className="text-6xl md:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase mb-8">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Edits That
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple glow-text"
          >
            Hit Different.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Transforming raw footage into breathtaking cinematic experiences. 
          Specializing in high-octane automotive, gaming, and commercial visual storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#portfolio"
            className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a 
            href="#showreel"
            className="flex items-center gap-4 px-8 py-4 glass rounded-full hover:bg-white/10 transition-colors uppercase text-xs font-bold tracking-widest group"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={14} className="fill-white" />
            </div>
            Watch Showreel
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] vertical-text opacity-30">Scroll</span>
        <div className="w-px h-20 bg-gradient-to-b from-accent to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
