import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: 'rgb(var(--color-gold-rgb) / <alpha-value>)',
        'gold-dark': 'rgb(var(--color-gold-dark-rgb) / <alpha-value>)',
        teal: 'rgb(var(--color-teal-rgb) / <alpha-value>)',
        coral: 'rgb(var(--color-coral-rgb) / <alpha-value>)',
        bg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        'bg-alt': 'rgb(var(--color-bg-alt-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        ink: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
        'ink-soft': 'rgb(var(--color-ink-soft-rgb) / <alpha-value>)',
        border: 'var(--color-border)',
        'dark-panel': 'rgb(var(--color-dark-panel-rgb) / <alpha-value>)',
        'dark-panel-ink': 'rgb(var(--color-dark-panel-ink-rgb) / <alpha-value>)',
        'material-bg': 'rgb(var(--color-material-bg-rgb) / <alpha-value>)',
        'material-ink': 'rgb(var(--color-material-ink-rgb) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
      },
      transitionProperty: {
        theme: 'background-color, color, border-color',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        carouselFade: {
          from: { opacity: '0', transform: 'scale(0.98)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        stepIn: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        sway: 'sway 4.5s ease-in-out infinite',
        'carousel-fade': 'carouselFade 0.38s ease both',
        'step-in': 'stepIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
