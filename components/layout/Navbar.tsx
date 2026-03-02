'use client';

import { Moon, Sun } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useTheme } from './ThemeProvider';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-4 z-40">
      <Container>
        <nav className="glass flex items-center justify-between rounded-2xl border border-border px-4 py-3">
          <a href="#hero" className="focus-ring text-sm font-semibold tracking-[0.2em]">PEDRO</a>
          <ul className="hidden gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="focus-ring text-sm text-muted transition hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="focus-ring rounded-full border border-border p-2 text-muted transition hover:text-fg" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </Container>
    </header>
  );
}
