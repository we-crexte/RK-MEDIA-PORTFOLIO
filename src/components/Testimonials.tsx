import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Panche Petrov',
    content: "The level of pacing and sound design in my last video was insane. Best editor I've ever worked with."
  },
  {
    name: 'Jayden Russell',
    content: "He doesn't just edit; he tells a story. The cinematic transitions completely changed the vibe of our brand."
  },
  {
    name: 'KB',
    content: "Absolute beast with car edits. The flow is incredible. Highly recommended for automotive content."
  }
];

export function Testimonials() {
  return (
    <section className="pt-10 pb-24 px-6 md:px-10 bg-black/40 relative">
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-xs font-black uppercase tracking-[0.6em] text-white/60 border-l-2 border-accent pl-4">/ Reviews</span>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-center mb-16 md:mb-20 tracking-tighter">Voice of Creators</h2>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 border border-white/5 bg-white/[0.02] rounded-3xl relative"
            >
              <div className="text-4xl text-accent mb-6 leading-none">"</div>
              <p className="text-lg text-white/70 italic leading-relaxed mb-10">{t.content}</p>
              <div>
                <div className="font-bold uppercase tracking-widest text-sm">{t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
