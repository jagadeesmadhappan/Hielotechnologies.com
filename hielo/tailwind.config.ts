import type { Config } from 'tailwindcss';

/**
 * HIELO design tokens.
 * Colours, type and spacing are defined once here and consumed everywhere,
 * so the whole brand can be re-tuned from a single file.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#05070A', 2: '#080B10' },
        graphite: { DEFAULT: '#0E141B', 2: '#161E28' },
        blue: { DEFAULT: '#2E8BFF', soft: '#6FB4FF' },
        gold: { DEFAULT: '#D9B872', soft: '#EAD6A6' },
        paper: '#F4F7FB',
        muted: { DEFAULT: '#7C879A', 2: '#545E70' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: { research: '0.28em', brand: '0.34em' },
      maxWidth: { content: '1280px' },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.22,.61,.36,1)',
        'ease-out-soft': 'cubic-bezier(.16,1,.3,1)',
      },
      keyframes: {
        pulse: {
          '0%,100%': { transform: 'scale(1)', opacity: '.7' },
          '50%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: { pulse: 'pulse 3s ease-in-out infinite' },
    },
  },
  plugins: [],
};
export default config;
