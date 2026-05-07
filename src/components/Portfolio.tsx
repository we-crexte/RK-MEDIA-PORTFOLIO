import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nights',
    category: 'Cinematic Edits',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    color: '#3b82f6'
  },
  {
    title: 'Cyberpunk 2077 Montage',
    category: 'Gaming Montages',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    color: '#a855f7'
  },
  {
    title: 'Urban Drift',
    category: 'Car Edits',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    color: '#ec4899'
  },
  {
    title: 'Future Tech',
    category: 'Reels Editing',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    color: '#10b981'
  },
  {
    title: 'Wild Nature',
    category: 'Cinematic Trailers',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    color: '#f59e0b'
  }
];

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = containerRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;
    const amountToScroll = scrollWidth - windowWidth;

    const pin = gsap.to(containerRef.current, {
      x: -amountToScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${amountToScroll}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="portfolio" className="bg-black">
      {/* Exclusive Showreel Section */}
      <div id="showreel" className="py-20 px-6 md:px-10 border-b border-white/5 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-black uppercase tracking-[0.6em] text-white/60 border-l-2 border-accent pl-4">/ Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 md:gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4">The Work</div>
              <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-tight">
                Most <span className="text-accent glow-text">Exclusive</span> <br className="hidden md:block" />
                <span className="opacity-30">Production.</span>
              </h2>
            </div>
            <div className="max-w-xs text-white/40 text-[10px] md:text-sm uppercase tracking-widest font-bold md:text-right">
              A cinematic journey through high-octane visual storytelling. 
              Featured Selection / 2024
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl md:rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" 
              alt="Extreme Automotive Showreel"
              className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-24 h-24 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play fill="white" size={32} className="ml-1" />
              </div>
            </div>
            
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <div>
                <div className="px-4 py-1 bg-accent rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Featured</div>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Velocity Unlimited</h3>
              </div>
              <div className="px-6 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest hidden md:block group-hover:bg-white group-hover:text-black transition-colors">
                Watch Full Edit
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scrolling Portfolio */}
      <div className="overflow-hidden">
        <div ref={triggerRef}>
          <div ref={containerRef} className="h-screen flex items-center px-[10vw] gap-10 lg:gap-20">
            <div className="flex-shrink-0 w-[280px] md:w-[400px]">
              <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
                Selected <br />
                <span className="text-accent">Works.</span>
              </h2>
              <p className="text-white/40 uppercase tracking-widest text-[10px] md:text-sm font-bold font-sans">
                Explore All Projects / Vol 01
              </p>
            </div>

            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}

            <div className="flex-shrink-0 w-[280px] md:w-[400px] flex flex-col justify-center">
              <div className="p-8 md:p-10 glass rounded-3xl border-accent/20 text-center">
                <h3 className="text-xl md:text-3xl font-bold mb-4 uppercase tracking-tighter">READY TO CREATE?</h3>
                <a href="#contact" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-black text-xs md:text-sm font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0], key?: any }) {
  return (
    <motion.div 
      className="flex-shrink-0 w-[85vw] md:w-[600px] h-[300px] md:h-[400px] group relative overflow-hidden rounded-3xl"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <img 
        src={project.thumbnail} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
              {project.category}
            </div>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-2">
              {project.title}
            </h3>
          </div>
          <div className="w-16 h-16 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
            <Play fill="white" size={20} />
          </div>
        </div>
      </div>

      {/* Hover Video Simulation Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
      />
    </motion.div>
  );
}
