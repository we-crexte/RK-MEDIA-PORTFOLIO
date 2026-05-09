import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface VideoProject {
  title: string;
  category: string;
  src: string;
  color: string;
  description: string;
}

const longFormProjects: VideoProject[] = [
  { title: 'Cinematic Cut I',   category: 'Long Form Edit', src: '/videos/11.mp4', color: '#3b82f6', description: 'Full-length cinematic production' },
  { title: 'Cinematic Cut II',  category: 'Long Form Edit', src: '/videos/12.mp4', color: '#a855f7', description: 'Dramatic visual storytelling' },
  { title: 'Cinematic Cut III', category: 'Long Form Edit', src: '/videos/13.mp4', color: '#ec4899', description: 'High-octane visual narrative' },
  { title: 'Cinematic Cut IV',  category: 'Long Form Edit', src: '/videos/14.mp4', color: '#10b981', description: 'Immersive cinematic motion' },
  { title: 'Cinematic Cut V',   category: 'Long Form Edit', src: '/videos/15.mp4', color: '#f59e0b', description: 'Epic production reel' },
];

const shortFormProjects: VideoProject[] = [
  { title: 'Reel Edit I',   category: 'Short Form · Reel', src: '/videos/7.mp4',  color: '#f43f5e', description: 'Viral reel cut' },
  { title: 'Reel Edit II',  category: 'Short Form · Reel', src: '/videos/8.mp4',  color: '#06b6d4', description: 'Trending social content' },
  { title: 'Reel Edit III', category: 'Short Form · Reel', src: '/videos/9.mp4',  color: '#84cc16', description: 'Fast-paced quick cuts' },
  { title: 'Reel Edit IV',  category: 'Short Form · Reel', src: '/videos/10.mp4', color: '#f97316', description: 'Social media ready' },
  { title: 'Reel Edit V',   category: 'Short Form · Reel', src: '/videos/6.mp4',  color: '#8b5cf6', description: 'Flash story format' },
];

// ─── Video Card (Landscape — Long Form) ───────────────────────────────────────

function VideoCardLandscape({ project }: { project: VideoProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const [muted, setMuted] = useState(true);

  const onEnter = () => {
    setHovering(true);
    videoRef.current?.play().catch(() => {});
  };
  const onLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="flex-shrink-0 w-[500px] lg:w-[580px] h-[340px] lg:h-[380px] group relative overflow-hidden rounded-3xl cursor-pointer border border-white/5"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <video
        ref={videoRef}
        src={project.src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loop muted={muted} playsInline preload="metadata"
      />

      {/* Dark overlay — lightens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Colour glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-25 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 80%, ${project.color}, transparent 65%)` }}
      />

      {/* Info */}
      <div className="absolute inset-0 p-7 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-2" style={{ color: project.color }}>
              {project.category}
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-tighter leading-none">
              {project.title}
            </h3>
            <p className="text-white/40 text-xs mt-1 font-medium">{project.description}</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-2 items-center">
            <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-400">
              {hovering ? <Pause fill="white" size={15} /> : <Play fill="white" size={15} className="ml-0.5" />}
            </div>
            <button
              className="w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-400 delay-75 hover:bg-white/20"
              onClick={e => { e.stopPropagation(); setMuted(m => !m); }}
            >
              {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Video Card (Portrait — Short Form) ───────────────────────────────────────

function VideoCardPortrait({ project }: { project: VideoProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const [muted, setMuted] = useState(true);

  const onEnter = () => {
    setHovering(true);
    videoRef.current?.play().catch(() => {});
  };
  const onLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="flex-shrink-0 w-[230px] lg:w-[260px] h-[408px] lg:h-[462px] group relative overflow-hidden rounded-3xl cursor-pointer border border-white/5"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <video
        ref={videoRef}
        src={project.src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loop muted={muted} playsInline preload="metadata"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />

      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 80%, ${project.color}, transparent 60%)` }}
      />

      {/* Play button center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
          {hovering ? <Pause fill="white" size={18} /> : <Play fill="white" size={18} className="ml-1" />}
        </div>
      </div>

      {/* Info + mute */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.3em] mb-1" style={{ color: project.color }}>
              {project.category}
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tighter leading-tight">{project.title}</h3>
          </div>
          <button
            className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
            onClick={e => { e.stopPropagation(); setMuted(m => !m); }}
          >
            {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Mobile card (shared) ─────────────────────────────────────────────────────

function VideoCardMobile({ project, portrait = false }: { project: VideoProject; portrait?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setPlaying(true); }
    else { videoRef.current.pause(); setPlaying(false); }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${portrait ? 'h-[320px]' : 'h-[220px]'}`}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={project.src}
        className="w-full h-full object-cover"
        loop muted playsInline preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center">
          {playing ? <Pause fill="white" size={16} /> : <Play fill="white" size={16} className="ml-0.5" />}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: project.color }}>
          {project.category}
        </div>
        <h3 className="text-lg font-bold uppercase tracking-tighter leading-none">{project.title}</h3>
      </div>
    </div>
  );
}

// ─── Horizontal scroll section ─────────────────────────────────────────────────

interface HScrollProps {
  id: string;
  sectionNumber: string;
  headingLine1: string;
  headingLine2: string;
  accentColor: string;
  volText: string;
  projects: VideoProject[];
  portrait?: boolean;
  showCta?: boolean;
}

function HScrollSection({
  id, sectionNumber, headingLine1, headingLine2,
  accentColor, volText, projects, portrait = false, showCta = false,
}: HScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        // Wait a tick so layout paint is complete
        const timer = setTimeout(() => {
          const container = containerRef.current;
          const trigger   = triggerRef.current;
          if (!container || !trigger) return;

          const getAmount = () => container.scrollWidth - window.innerWidth;

          const tween = gsap.to(container, {
            x: () => -getAmount(),
            ease: 'none',
            scrollTrigger: {
              trigger,
              start: 'top top',
              end: () => `+=${getAmount()}`,
              scrub: 1.2,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => tween.kill();
        }, 400);

        return () => clearTimeout(timer);
      });

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
          className={`h-screen flex items-center px-[6vw] ${portrait ? 'gap-6 lg:gap-8' : 'gap-10 lg:gap-14'}`}
        >
          {/* Title panel */}
          <div className="flex-shrink-0 w-[280px] lg:w-[360px] flex flex-col justify-center">
            <div className="text-[10px] font-black uppercase tracking-[0.45em] mb-4" style={{ color: accentColor }}>
              {sectionNumber}
            </div>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter leading-none mb-4">
              {headingLine1}<br />
              <span style={{ color: accentColor }}>{headingLine2}.</span>
            </h2>
            <p className="text-white/30 uppercase tracking-widest text-[10px] font-bold">{volText}</p>
          </div>

          {/* Cards */}
          {projects.map((p, i) =>
            portrait
              ? <VideoCardPortrait key={i} project={p} />
              : <VideoCardLandscape key={i} project={p} />
          )}

          {/* CTA */}
          {showCta && (
            <div className="flex-shrink-0 w-[280px] lg:w-[320px] flex flex-col justify-center">
              <div className="p-8 glass rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Ready to Create?</h3>
                <p className="text-white/40 text-xs mb-6">Let's make something extraordinary together.</p>
                <a
                  href="#contact"
                  className="inline-block px-7 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all"
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
        <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-2" style={{ color: accentColor }}>
          {sectionNumber}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter leading-none mb-2">
          {headingLine1} <span style={{ color: accentColor }}>{headingLine2}.</span>
        </h2>
        <p className="text-white/30 uppercase tracking-widest text-[9px] font-bold mb-6">{volText}</p>

        <div
          className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((p, i) => (
            <div key={i} className={`snap-center flex-shrink-0 ${portrait ? 'w-[65vw]' : 'w-[80vw]'}`}>
              <VideoCardMobile project={p} portrait={portrait} />
            </div>
          ))}
          {showCta && (
            <div className="snap-center flex-shrink-0 w-[80vw]">
              <div className="h-[220px] glass rounded-2xl flex flex-col items-center justify-center gap-4">
                <h3 className="text-xl font-bold uppercase tracking-tighter">Ready to Create?</h3>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full"
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

      {/* ── 2. Long Form Edits (1–5) ── */}
      <HScrollSection
        id="long-form-edits"
        sectionNumber="Vol 01 / Long Form"
        headingLine1="Long Form"
        headingLine2="Edits"
        accentColor="#3b82f6"
        volText="Full-Length Cinematic Productions"
        projects={longFormProjects}
        portrait={false}
      />

      {/* ── 3. Short Form Edits (6–10) ── */}
      <HScrollSection
        id="short-form-edits"
        sectionNumber="Vol 02 / Short Form"
        headingLine1="Short Form"
        headingLine2="Edits"
        accentColor="#a855f7"
        volText="Reels · Shorts · Viral Cuts"
        projects={shortFormProjects}
        portrait={true}
        showCta
      />

    </section>
  );
}

// ─── Showreel video ───────────────────────────────────────────────────────────

function ShowreelVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setIsPlaying(true); }
    else { videoRef.current.pause(); setIsPlaying(false); }
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
        loop muted playsInline preload="metadata"
      />

      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isPlaying ? 'bg-black/0 opacity-0 hover:opacity-100 hover:bg-black/20' : 'bg-black/40'
        }`}
      >
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full glass-strong flex items-center justify-center transition-transform duration-500 ${
            isPlaying ? 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100' : 'group-hover:scale-110'
          }`}
        >
          {isPlaying
            ? <Pause fill="white" size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
            : <Play  fill="white" size={24} className="ml-1 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          }
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
