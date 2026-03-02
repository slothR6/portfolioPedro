export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: 'fmea-engineering',
    title: 'FMEA Engineering',
    description:
      'Plataforma corporativa com foco em presença digital premium para serviços técnicos, com UX otimizada para conversão.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://fmeaengineering.com.br/',
    githubUrl: 'https://github.com/username/fmea-engineering',
  },
  {
    slug: 'pulse-analytics',
    title: 'Pulse Analytics',
    description:
      'Dashboard orientado a insights com visualização avançada de métricas em tempo real e filtros fluidos.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
    liveUrl: 'https://example.com/pulse-analytics',
    githubUrl: 'https://github.com/username/pulse-analytics',
  },
  {
    slug: 'lumen-commerce',
    title: 'Lumen Commerce',
    description:
      'Experiência de e-commerce minimalista com navegação rápida, animações sutis e jornada centrada no produto.',
    techStack: ['Next.js', 'Stripe', 'Tailwind CSS', 'Prisma'],
    liveUrl: 'https://example.com/lumen-commerce',
    githubUrl: 'https://github.com/username/lumen-commerce',
  },
];
