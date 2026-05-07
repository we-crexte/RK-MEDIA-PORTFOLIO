import { motion } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const constraintsRef = useRef(null);

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto mb-10 sm:mb-16">
        <span className="section-label">/ About</span>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-square order-2 md:order-1 max-w-md mx-auto md:max-w-none"
          ref={constraintsRef}
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          <motion.div 
            drag
            dragConstraints={constraintsRef}
            className="w-full h-full glass rounded-2xl sm:rounded-3xl overflow-hidden relative z-10 cursor-grab active:cursor-grabbing flex items-center justify-center"
          >
            {/* Lead Editor portrait */}
            <img 
              src="/images/lead-editor.png" 
              alt="RK MEDIA Founder"
              className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest">Lead Editor</div>
              <div className="text-[10px] sm:text-xs opacity-50 mt-0.5">RK MEDIA</div>
            </div>
          </motion.div>
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-16 h-16 sm:w-24 sm:h-24 glass rounded-full flex items-center justify-center font-bold text-accent text-sm sm:text-base"
          >
            4K
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-widest"
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
          <div className="section-subheading">Master of Motion</div>
          <h2 className="section-heading mb-8 sm:mb-10">
            Crafting the <br />
            <span className="opacity-30">Future of Visuals.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/50 font-light leading-relaxed mb-8">
            Based in India, I've spent the last 3 years pushing the boundaries of digital storytelling. 
            My work isn't just about cutting clips—it's about creating an emotional frequency that resonates with the audience long after the video ends.
          </p>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 py-6 sm:py-8 border-y border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">3+ Years</div>
              <div className="text-[9px] sm:text-xs uppercase tracking-widest opacity-40">Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">500k+</div>
              <div className="text-[9px] sm:text-xs uppercase tracking-widest opacity-40">Frames Rendered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
