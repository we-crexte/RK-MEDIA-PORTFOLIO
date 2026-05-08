import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const selectedWorks = [
  {
    title: 'Neon Nights',
    category: 'Cinematic Edits',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    color: '#3b82f6',
  },
  {
    title: 'Cyberpunk Montage',
    category: 'Gaming Montages',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    color: '#a855f7',
  },
  {
    title: 'Urban Drift',
    category: 'Car Edits',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    color: '#ec4899',
  },
  {
    title: 'Future Tech',
    category: 'Reels Editing',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    color: '#10b981',
  },
  {
    title: 'Wild Nature',
    category: 'Cinematic Trailers',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    color: '#f59e0b',
  },
];

const longFormProjects = [
  {
    title: 'Cinematic Drift',
    category: 'Long Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    color: '#3b82f6',
  },
  {
    title: 'Urban Legends',
    category: 'Long Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    color: '#a855f7',
  },
  {
    title: 'Neon Pulse',
    category: 'Long Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    color: '#ec4899',
  },
  {
    title: 'Into The Wild',
    category: 'Long Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    color: '#10b981',
  },
  {
    title: 'City After Dark',
    category: 'Long Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800',
    color: '#f59e0b',
  },
];

const shortFormProjects = [
  {
    title: 'Reel One',
    category: 'Short Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800',
    color: '#f43f5e',
  },
  {
    title: 'Reel Two',
    category: 'Short Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    color: '#06b6d4',
  },
  {
    title: 'Viral Cut',
    category: 'Short Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2c0?auto=format&fit=crop&q=80&w=800',
    color: '#84cc16',
  },
  {
    title: 'Snap Edit',
    category: 'Short Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
    color: '#f97316',
  },
  {
    title: 'Flash Story',
    category: 'Short Form Edit',
    thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=800',
    color: '#8b5cf6',
  },
];

// ─── Reusable horizontal scroll block ────────────────────────────────────────

type Project = (typeof selectedWorks)[0];

interface HScrollSectionProps {
  id: string;
  sectionLabel: string;
  sectionNumber: string;
  headingLine1: string;
  headingLine2: string;
  accentColor: string;
  volText: string;
  projects: Project[];
  showCta?: boolean;
}

function HScrollSection({
  id,
  sectionLabel,
  sectionNumber,
  headingLine1,
  headingLine2,
  accentColor,
  volText,
  projects,
  showCta = false,
}: HScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.refresh();
        const scrollWidth = containerRef.current?.scrollWidth ?? 0;
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

        return () => pin.kill();
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div id={id} className="overflow-hidden bg-black border-t border-white/5">
      {/* ── Desktop: GSAP pinned horizontal scroll ── */}
      <div ref={triggerRef} className="hidden md:block">
        <div
          ref={containerRef}
          className="h-screen flex items-center px-[8vw] gap-12 lg:gap-20"
        >
          {/* Title panel */}
          <div className="flex-shrink-0 w-[320px] lg:w-[400px] flex flex-col justify-center">
            <div
              className="text-[10px] font-black uppercase tracking-[0.45em] mb-5"
              style={{ color: accentColor }}
            >
              {sectionNumber}
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none mb-5">
              {headingLine1} <br />
              <span style={{ color: accentColor }}>{headingLine2}.</span>
            </h2>
            <p className="text-white/30 uppercase tracking-widest text-xs font-bold">
              {volText}
            </p>
          </div>

          {/* Cards */}
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}

          {/* CTA (only on last section) */}
          {showCta && (
            <div className="flex-shrink-0 w-[320px] lg:w-[360px] flex flex-col justify-center">
              <div className="p-10 glass rounded-3xl text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 uppercase tracking-tighter">
                  Ready to Create?
                </h3>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile: native snap-scroll ── */}
      <div className="md:hidden py-10 px-4">
        <div
          className="text-[10px] font-black uppercase tracking-[0.4em] mb-2"
          style={{ color: accentColor }}
        >
          {sectionNumber}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter leading-none mb-2">
          {headingLine1} <span style={{ color: accentColor }}>{headingLine2}.</span>
        </h2>
        <p className="text-white/30 uppercase tracking-widest text-[9px] font-bold mb-7">
          {volText}
        </p>

        <div
          className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[80vw]">
              <ProjectCardMobile project={project} />
            </div>
          ))}

          {showCta && (
            <div className="snap-center flex-shrink-0 w-[80vw]">
              <div className="h-[240px] glass rounded-2xl flex flex-col items-center justify-center gap-4">
                <h3 className="text-xl font-bold uppercase tracking-tighter">
                  Ready to Create?
                </h3>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full active:scale-95 transition-transform"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Project card (desktop) ───────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[560px] h-[380px] group relative overflow-hidden rounded-3xl"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: project.color }}
            >
              {project.category}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none">
              {project.title}
            </h3>
          </div>
          <div className="w-14 h-14 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
            <Play fill="white" size={18} />
          </div>
        </div>
      </div>

      {/* Per-card colour glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
      />
    </motion.div>
  );
}

// ─── Project card (mobile) ────────────────────────────────────────────────────

function ProjectCardMobile({ project }: { project: Project }) {
  return (
    <div className="relative h-[240px] overflow-hidden rounded-2xl">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-5 flex flex-col justify-end">
        <div
          className="text-[10px] font-bold uppercase tracking-widest mb-1"
          style={{ color: project.color }}
        >
          {project.category}
        </div>
        <h3 className="text-xl font-bold uppercase tracking-tighter leading-none">
          {project.title}
        </h3>
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
      />
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-black">

      {/* ── 1. Showreel ── */}
      <div
        id="showreel"
        className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 border-b border-white/5 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <span className="section-label">/ Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-6">
            <div>
              <div className="section-subheading">The Work</div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-tight">
                Most <span className="text-accent glow-text">Exclusive</span>{' '}
                <br className="hidden md:block" />
                <span className="opacity-30">Production.</span>
              </h2>
            </div>
            <div className="max-w-xs text-white/40 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-widest font-bold md:text-right">
              A cinematic journey through high-octane visual storytelling.
              <br />
              Featured Selection / 2024
            </div>
          </div>
          <ShowreelVideo />
        </div>
      </div>

      {/* ── 2. Selected Works ── */}
      <HScrollSection
        id="selected-works"
        sectionNumber="Vol 01 / Selected Works"
        sectionLabel="Selected Works"
        headingLine1="Selected"
        headingLine2="Works"
        accentColor="#3b82f6"
        volText="Explore All Projects / Vol 01"
        projects={selectedWorks}
      />

      {/* ── 3. Long Form Edits ── */}
      <HScrollSection
        id="long-form-edits"
        sectionNumber="Vol 02 / Long Form"
        sectionLabel="Long Form Edits"
        headingLine1="Long Form"
        headingLine2="Edits"
        accentColor="#3b82f6"
        volText="Full-Length Cinematic Productions"
        projects={longFormProjects}
      />

      {/* ── 4. Short Form Edits ── */}
      <HScrollSection
        id="short-form-edits"
        sectionNumber="Vol 03 / Short Form"
        sectionLabel="Short Form Edits"
        headingLine1="Short Form"
        headingLine2="Edits"
        accentColor="#a855f7"
        volText="Reels · Shorts · Viral Cuts"
        projects={shortFormProjects}
        showCta
      />

    </section>
  );
}

// ─── Showreel video (unchanged) ───────────────────────────────────────────────

function ShowreelVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative aspect-video rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src="/videos/coaching-package-2.mp4"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isPlaying
            ? 'bg-black/0 opacity-0 hover:opacity-100 hover:bg-black/20'
            : 'bg-black/40'
        }`}
      >
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full glass-strong flex items-center justify-center transition-transform duration-500 ${
            isPlaying
              ? 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100'
              : 'group-hover:scale-110'
          }`}
        >
          {isPlaying ? (
            <Pause fill="white" size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
          ) : (
            <Play fill="white" size={24} className="ml-1 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          )}
        </div>
      </div>

      <div
        className={`absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end transition-opacity duration-500 ${
          isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <div>
          <div className="px-3 py-1 sm:px-4 bg-accent rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-4 inline-block">
            Featured
          </div>
          <h3 className="text-xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            Coaching Package
          </h3>
        </div>
        <div className="px-4 py-2 sm:px-6 glass rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-widest hidden sm:block group-hover:bg-white group-hover:text-black transition-colors">
          {isPlaying ? 'Click to Pause' : 'Click to Play'}
        </div>
      </div>
    </motion.div>
  );
}
