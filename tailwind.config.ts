import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
        accent: {
          from: 'hsl(var(--accent-from))',
          to: 'hsl(var(--accent-to))',
        },
      },
      borderRadius: {
        xl2: '1rem',
      },
      boxShadow: {
        soft: '0 10px 40px -20px hsla(226, 80%, 50%, 0.45)',
        glow: '0 0 0 1px hsla(252, 90%, 70%, 0.18), 0 10px 25px -15px hsla(236, 100%, 60%, 0.55)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(120deg, hsl(var(--accent-from)), hsl(var(--accent-to)))',
        'hero-gradient': 'radial-gradient(circle at 15% 20%, hsla(221, 100%, 62%, 0.35), transparent 50%), radial-gradient(circle at 85% 0%, hsla(260, 90%, 65%, 0.28), transparent 55%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
