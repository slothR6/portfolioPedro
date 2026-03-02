import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps): JSX.Element {
  return (
    <article className={cn('glass rounded-2xl border border-border/80 p-6 shadow-soft transition duration-300', className)}>
      {children}
    </article>
  );
}
