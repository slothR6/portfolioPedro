import { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps): JSX.Element {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-muted">{description}</p> : null}
    </div>
  );
}
