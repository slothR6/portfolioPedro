export type SkillCategory = {
  title: 'Frontend' | 'Backend' | 'Tools';
  items: Array<{
    name: string;
    value: number;
  }>;
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'Next.js', value: 95 },
      { name: 'TypeScript', value: 92 },
      { name: 'Tailwind CSS', value: 94 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', value: 88 },
      { name: 'API Design', value: 90 },
      { name: 'PostgreSQL', value: 82 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & CI', value: 89 },
      { name: 'Vercel', value: 92 },
      { name: 'Figma', value: 86 },
    ],
  },
];

export const highlightTags = [
  'Design Systems',
  'Motion UI',
  'Accessibility',
  'Core Web Vitals',
  'SEO',
  'Clean Architecture',
];
