'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/lib/data/services';

export function Services(): JSX.Element {
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Services" title="Strategic services for modern products" description="Soluções com design premium, execução técnica sólida e foco em resultado." />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="glass rounded-2xl border border-border p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-muted">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
