'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1250);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="h-14 w-14 rounded-2xl bg-accent-gradient"
              animate={{ rotate: [0, 180, 360], borderRadius: ['16%', '50%', '16%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="text-sm tracking-[0.3em] text-muted">LOADING</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
