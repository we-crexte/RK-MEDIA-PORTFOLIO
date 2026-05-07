import { motion } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const constraintsRef = useRef(null);

  return (
    <section id="about" className="py-20 px-10 relative">
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-xs font-black uppercase tracking-[0.6em] text-white/60 border-l-2 border-accent pl-4">/ About</span>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square order-2 md:order-1"
          ref={constraintsRef}
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          <motion.div 
            drag
            dragConstraints={constraintsRef}
            className="w-full h-full glass rounded-3xl overflow-hidden relative z-10 cursor-grab active:cursor-grabbing flex items-center justify-center"
          >
            {/* Visual placeholder for a cinematic intro about the editor */}
            <img 
              src="/api/artifacts/981c2f1f-4cc5-4309-84d5-8292c3008985" 
              alt="RK MEDIA Founder"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
              <div className="text-sm font-bold uppercase tracking-widest">Lead Editor</div>
              <div className="text-xs opacity-50">VZN Studios</div>
            </div>
          </motion.div>
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 -right-10 w-24 h-24 glass rounded-full flex items-center justify-center font-bold text-accent"
          >
            4K
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-5 px-6 py-3 glass rounded-full text-[10px] font-bold uppercase tracking-widest"
          >
            Dolby Vision
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="order-1 md:order-2"
        >
          <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Master of Motion</div>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-10">
            Crafting the <br />
            <span className="opacity-30">Future of Visuals.</span>
          </h2>
          <p className="text-xl text-white/50 font-light leading-relaxed mb-8">
            Based in India, I've spent the last 3 years pushing the boundaries of digital storytelling. 
            My work isn't just about cutting clips—it's about creating an emotional frequency that resonates with the audience long after the video ends.
          </p>
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
            <div>
              <div className="text-3xl font-bold mb-1">3+ Years</div>
              <div className="text-xs uppercase tracking-widest opacity-40">Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">500k+</div>
              <div className="text-xs uppercase tracking-widest opacity-40">Frames Rendered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
