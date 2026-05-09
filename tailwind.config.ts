import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        krem: {
          50: '#fcf8f0',
          100: '#fbf6ec',
          200: '#f6efe2',
          300: '#ecdfc6',
          400: '#dcc69d',
        },
        kahve: {
          50: '#f5ede2',
          100: '#e6d3b8',
          200: '#c8a075',
          300: '#9c6b3c',
          400: '#7a4a25',
          500: '#5a3a2c',
          600: '#4a2e22',
          700: '#3e271c',
          800: '#2d1b13',
          900: '#1d110b',
        },
        bordo: {
          50: '#fbeef0',
          100: '#f3c8cd',
          200: '#d97a85',
          300: '#a83344',
          400: '#7a2230',
          500: '#6b1f2a',
          600: '#581821',
          700: '#3f1118',
        },
        altin: {
          50: '#faf3e0',
          100: '#efdba6',
          200: '#dabd75',
          300: '#c9a96a',
          400: '#b08a3e',
          500: '#8d6d2e',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -10px rgba(58, 33, 21, 0.18)',
        card: '0 10px 30px -16px rgba(58, 33, 21, 0.25)',
      },
      maxWidth: {
        prose: '68ch',
      },
      backgroundImage: {
        'paper-grain':
          'radial-gradient(circle at 20% 10%, rgba(201,169,106,0.10), transparent 40%), radial-gradient(circle at 80% 80%, rgba(107,31,42,0.08), transparent 45%)',
      },
    },
  },
  plugins: [],
};

export default config;
