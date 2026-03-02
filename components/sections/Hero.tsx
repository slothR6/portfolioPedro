'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero(): JSX.Element {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden pt-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" />
      <Container>
        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.22em] text-muted"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Software Engineer
        </motion.p>
        <motion.h1
          className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Building <span className="gradient-text">premium digital experiences</span> with clean code and high-end motion.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base text-muted md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Portfólio moderno com foco em performance, acessibilidade e impacto visual para marcas e produtos digitais.
        </motion.p>
        <motion.div className="mt-10 flex flex-wrap gap-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" className="bg-card text-fg hover:bg-card/80">
            Contact
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
