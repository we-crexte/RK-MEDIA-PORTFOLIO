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
    <section className="pt-20 pb-10 bg-black border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4">Trusted By</div>
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
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
          className="flex whitespace-nowrap gap-20 py-10"
        >
          {/* First set of clients */}
          {clients.map((client, i) => (
            <div key={`c1-${i}`} className="flex items-center gap-20">
              <span className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-accent opacity-30 hover:opacity-100 transition-all duration-700 cursor-default select-none">
                {client}
              </span>
              <div className="w-4 h-4 bg-accent/20 rounded-full" />
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {clients.map((client, i) => (
            <div key={`c2-${i}`} className="flex items-center gap-20">
              <span className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-accent opacity-30 hover:opacity-100 transition-all duration-700 cursor-default select-none">
                {client}
              </span>
              <div className="w-4 h-4 bg-accent/20 rounded-full" />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
