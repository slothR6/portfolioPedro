import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { ENABLE_CUSTOM_CURSOR } from '@/lib/utils/constants';
import '@/styles/globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Pedro Portfolio - Software Engineer',
  description: 'Portfólio premium, moderno e minimalista construído com Next.js, TypeScript e Framer Motion.',
  keywords: ['portfolio', 'next.js', 'typescript', 'framer motion', 'frontend engineer'],
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Pedro Portfolio',
    description: 'Experiências digitais premium com alta performance e design moderno.',
    url: 'https://example.com',
    siteName: 'Pedro Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${jakarta.variable} font-sans`}>
        <ThemeProvider>
          <LoadingScreen />
          {ENABLE_CUSTOM_CURSOR ? <CustomCursor /> : null}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
