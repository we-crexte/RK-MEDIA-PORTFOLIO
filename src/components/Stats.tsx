import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { label: 'Total Views', value: 1, suffix: 'M+' },
  { label: 'Projects Done', value: 30, suffix: '+' },
  { label: 'Happy Clients', value: 20, suffix: '+' },
  { label: 'Experience', value: 3, suffix: ' Years' },
];

export function Stats() {
  return (
    <section className="py-32 px-10 border-y border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <Counter key={i} stat={stat} />
        ))}
      </div>
    </section>
  );
}

function Counter({ stat }: { stat: typeof stats[0], key?: any }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
        {count}{stat.suffix}
      </div>
      <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-30">
        {stat.label}
      </div>
    </div>
  );
}
