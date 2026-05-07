import { motion } from 'framer-motion';

const clients = [
  "Panche Petrov",
  "Jayden Russell",
  "KB",
  "Enders",
  "Anthony kongphon",
  "Jamie",
  "Andi"
];

export function ClientMarquee() {
  return (
    <section className="pt-14 sm:pt-20 pb-8 sm:pb-10 bg-black border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-10 sm:mb-16">
        <div className="section-subheading">Trusted By</div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
          Creators.
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-8 sm:gap-12 md:gap-20 py-6 sm:py-10"
        >
          {/* First set of clients */}
          {clients.map((client, i) => (
            <div key={`c1-${i}`} className="flex items-center gap-8 sm:gap-12 md:gap-20">
              <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-accent opacity-30 hover:opacity-100 transition-all duration-700 cursor-default select-none">
                {client}
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-accent/20 rounded-full" />
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {clients.map((client, i) => (
            <div key={`c2-${i}`} className="flex items-center gap-8 sm:gap-12 md:gap-20">
              <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-accent opacity-30 hover:opacity-100 transition-all duration-700 cursor-default select-none">
                {client}
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-accent/20 rounded-full" />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
