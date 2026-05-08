/**
 * CustomCursor — Premium animated cursor with trailing ring + glow dot.
 *
 * Design:
 *  • Inner dot  : 8px solid accent-blue circle, snaps to mouse instantly
 *  • Outer ring : 36px hollow ring with backdrop blur, follows with lag (spring feel)
 *  • On hover over interactive elements → ring expands to 60px, dot scales down,
 *    ring becomes semi-transparent accent fill
 *  • Subtle ambient glow on the ring matching the site theme
 *  • Auto-hidden on touch / mobile devices
 *  • Uses GSAP for all motion to stay consistent with the rest of the site
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, video, iframe, [data-cursor-expand]';

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── 1. Bail out on touch devices ──────────────────────────────────────
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    // ── 2. Hide the native OS cursor on the whole page ────────────────────
    document.documentElement.style.cursor = 'none';

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    // Start off-screen so there's no flash at (0,0)
    gsap.set([dot, ring], { x: -200, y: -200 });

    // ── 3. Track position & move elements ─────────────────────────────────
    let mouseX = -200;
    let mouseY = -200;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly (sub-frame snap)
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: 'none',
        overwrite: 'auto',
      });

      // Ring follows with a pleasant spring lag
      gsap.to(ring, {
        x: mouseX,
        y: mouseY,
        duration: 0.55,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    // ── 4. Hover expand on interactive elements ───────────────────────────
    const onEnter = () => {
      gsap.to(ring, {
        width: 60,
        height: 60,
        borderColor: 'rgba(59,130,246,0.55)',
        backgroundColor: 'rgba(59,130,246,0.08)',
        boxShadow: '0 0 18px rgba(59,130,246,0.45), 0 0 40px rgba(168,85,247,0.2)',
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(dot, {
        scale: 0,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(ring, {
        width: 36,
        height: 36,
        borderColor: 'rgba(59,130,246,0.7)',
        backgroundColor: 'transparent',
        boxShadow: '0 0 10px rgba(59,130,246,0.3), 0 0 24px rgba(168,85,247,0.15)',
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(dot, {
        scale: 1,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    // ── 5. Press (click) feedback ──────────────────────────────────────────
    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.75, duration: 0.15, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(dot,  { scale: 0.6,  duration: 0.15, ease: 'power2.out', overwrite: 'auto' });
    };
    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.4, ease: 'elastic.out(1,0.5)', overwrite: 'auto' });
      gsap.to(dot,  { scale: 1, duration: 0.3, ease: 'power2.out',         overwrite: 'auto' });
    };

    // ── 6. Cursor visibility when leaving/entering the window ─────────────
    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
    };
    const onMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
    };

    // ── 7. Event delegation for interactive elements ───────────────────────
    const onDocMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) onEnter();
    };
    const onDocMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) onLeave();
    };

    window.addEventListener('mousemove',   onMouseMove, { passive: true });
    window.addEventListener('mousedown',   onMouseDown);
    window.addEventListener('mouseup',     onMouseUp);
    document.addEventListener('mouseover', onDocMouseOver, { passive: true });
    document.addEventListener('mouseout',  onDocMouseOut,  { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove',   onMouseMove);
      window.removeEventListener('mousedown',   onMouseDown);
      window.removeEventListener('mouseup',     onMouseUp);
      document.removeEventListener('mouseover', onDocMouseOver);
      document.removeEventListener('mouseout',  onDocMouseOut);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* ── Inner dot ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3b82f6, #a855f7)',
          boxShadow: '0 0 8px rgba(59,130,246,0.8), 0 0 16px rgba(168,85,247,0.4)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />

      {/* ── Outer trailing ring ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(59,130,246,0.7)',
          background: 'transparent',
          boxShadow: '0 0 10px rgba(59,130,246,0.3), 0 0 24px rgba(168,85,247,0.15)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform, width, height',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
        }}
      />
    </>
  );
}
