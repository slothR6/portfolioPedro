'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Modal } from '@/components/ui/Modal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { projects, type Project } from '@/lib/data/projects';

export function Projects(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Projects" title="Selected work" description="Projetos pensados para performance, conversão e experiência premium em qualquer dispositivo." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.slug}
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07 }}
              onClick={() => setSelectedProject(project)}
            >
              <Card className="h-full hover:-translate-y-1 hover:border-accent-from/40 hover:shadow-glow">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Card>
            </motion.button>
          ))}
        </div>

        <Modal isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} title={selectedProject?.title ?? ''}>
          {selectedProject ? (
            <div>
              <p className="text-muted">{selectedProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={selectedProject.liveUrl} className="focus-ring inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm hover:border-accent-from/60" target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
                <a href={selectedProject.githubUrl} className="focus-ring inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm hover:border-accent-to/60" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          ) : null}
        </Modal>
      </Container>
    </section>
  );
}
