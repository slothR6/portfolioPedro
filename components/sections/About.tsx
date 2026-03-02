'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { Container } from '@/components/ui/Container';
import { highlightTags } from '@/lib/data/skills';

export function About(): JSX.Element {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Design-minded engineering with attention to every detail"
          description="Eu construo interfaces que equilibram clareza visual, motion e consistência técnica para entregar produtos memoráveis."
        />
        <motion.p
          className="max-w-3xl text-lg text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Minha abordagem combina arquitetura robusta com decisões de UI modernas. Cada componente é projetado para escalar, manter alta performance e reforçar a identidade da marca.
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-3">
          {highlightTags.map((tag) => (
            <motion.div key={tag} whileHover={{ y: -4, scale: 1.03 }}>
              <Tag>{tag}</Tag>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
