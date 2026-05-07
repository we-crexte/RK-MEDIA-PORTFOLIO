import { motion } from 'framer-motion';
import { Layers, Video, Zap, Palette, Tv } from 'lucide-react';

const services = [
  {
    title: 'Reels Editing',
    desc: 'High-engagement short-form content for Instagram and TikTok.',
    icon: <Video />,
    color: 'from-blue-500/20'
  },
  {
    title: 'Motion Graphics',
    desc: 'Smooth 2D & 3D animations to elevate your storytelling.',
    icon: <Layers />,
    color: 'from-purple-500/20'
  },
  {
    title: 'YouTube Editing',
    desc: 'Retention-focused editing for creators who want to scale.',
    icon: <Tv />,
    color: 'from-accent/20'
  },
  {
    title: 'Color Grading',
    desc: 'Giving your footage that high-end cinematic lookup.',
    icon: <Palette />,
    color: 'from-pink-500/20'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-xs font-black uppercase tracking-[0.6em] text-white/60 border-l-2 border-accent pl-4">/ Services</span>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4">What I Do</div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Premium <br />
              <span className="opacity-30">Post-Production.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-lg leading-relaxed md:text-right">
            Providing end-to-end video production services that turn standard footage into visual masterpieces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 glass rounded-[2rem] border-white/5 relative group bg-gradient-to-br ${service.color} to-transparent`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-accent transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
              
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <Zap size={20} className="text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
