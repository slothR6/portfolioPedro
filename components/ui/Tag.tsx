import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-card/75 px-3 py-1 text-xs font-medium text-fg/90 transition hover:border-accent-from/60 hover:shadow-glow',
        className,
      )}
    >
      {children}
    </span>
  );
}
