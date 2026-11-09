import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: 'var(--bg-parchment)',
          elevated: 'var(--bg-parchment-elevated)',
          card: 'var(--bg-card)',
        },
        charcoal: {
          DEFAULT: 'var(--text-charcoal)',
          muted: 'var(--text-muted)',
        },
        deco: {
          gold: 'var(--gold-medal)',
          burnished: 'var(--gold-burnished)',
          goldLight: 'var(--gold-light)',
          valencia: 'var(--blue-valencia)',
          crimson: 'var(--crimson-republic)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        insignia: ['var(--font-insignia)', 'serif'],
        serif: ['var(--font-serif-body)', 'Georgia', 'serif'],
        sans: ['var(--font-sans-meta)', 'sans-serif'],
      },
      backgroundImage: {
        'deco-sunburst':
          'repeating-conic-gradient(from 0deg, rgba(197, 160, 89, 0.06) 0deg 3deg, transparent 3deg 12deg)',
      },
    },
  },
  plugins: [],
};

export default config;
