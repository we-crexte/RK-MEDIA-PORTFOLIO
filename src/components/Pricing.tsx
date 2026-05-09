import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Customizable Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 lg:p-16 glass rounded-2xl sm:rounded-[3rem] border border-accent/20 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10"
        >
          <div className="max-w-xl text-center lg:text-left">
            <span className="section-label">/ Pricing</span>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tighter mt-4 mb-3 sm:mb-4">
              Need something <span className="text-accent">Custom?</span>
            </h3>
            <p className="text-white/40 leading-relaxed text-sm sm:text-base">
              We specialize in custom enterprise solutions, long-term partnerships, and specialized visual effects. Let's discuss your unique project scope.
            </p>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-6 bg-accent text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-all group shrink-0 active:scale-95"
          >
            Get a Quote <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
