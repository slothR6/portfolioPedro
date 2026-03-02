'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/lib/data/skills';

export function Skills(): JSX.Element {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Skills" title="Technical depth with product vision" description="Indicadores animados para representar domínio técnico por categoria." />
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass rounded-2xl border border-border p-5">
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <div className="mt-5 space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between text-sm text-muted">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-card">
                      <motion.div
                        className="h-full rounded-full bg-accent-gradient"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
