import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = CommonProps & {
  href: string;
};

const baseClass =
  'focus-ring inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5';

export function Button(props: ButtonProps | LinkButtonProps): JSX.Element {
  const className = cn(baseClass, 'bg-accent-gradient text-white shadow-soft hover:shadow-glow', props.className);

  if ('href' in props) {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const { children, className: _className, ...buttonProps } = props;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
