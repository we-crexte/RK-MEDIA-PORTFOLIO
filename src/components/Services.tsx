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
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10 sm:mb-16">
        <span className="section-label">/ Services</span>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 md:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="section-subheading">What I Do</div>
            <h2 className="section-heading">
              Premium <br className="hidden md:block" />
              <span className="opacity-30">Post-Production.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-[10px] sm:text-xs md:text-lg leading-relaxed md:text-right uppercase tracking-[0.08em] sm:tracking-[0.1em] font-bold">
            Providing end-to-end video production services that turn standard footage into visual masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-5 sm:p-7 md:p-10 glass rounded-2xl sm:rounded-[2rem] border-white/5 relative group bg-gradient-to-br ${service.color} to-transparent transition-all duration-300 hover:border-accent/20`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-5 sm:mb-7 md:mb-10 group-hover:bg-accent transition-colors [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                {service.icon}
              </div>
              <h3 className="text-sm sm:text-lg md:text-2xl font-bold mb-2 sm:mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-white/40 text-[10px] sm:text-xs md:text-sm leading-relaxed">{service.desc}</p>
              
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <Zap size={16} className="sm:w-5 sm:h-5 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
