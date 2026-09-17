import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        porcelain: '#FAF8F5',
        medicalTeal: '#114246',
        deepSlate: '#0B2528',
        goldPrimary: '#C5A880',
        goldLight: '#E4D3BC',
        goldDark: '#9F8259',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-jakarta)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'var(--font-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(11, 37, 40, 0.05)',
        medium: '0 12px 36px -4px rgba(11, 37, 40, 0.08)',
        elevated: '0 24px 60px -12px rgba(11, 37, 40, 0.14)',
        gold: '0 10px 30px -5px rgba(197, 168, 128, 0.3)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
