'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function CustomCursor(): JSX.Element {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 30 });
  const springY = useSpring(y, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const moveCursor = (event: MouseEvent): void => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-6 w-6 rounded-full border border-white/50 bg-accent-gradient opacity-70 mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
