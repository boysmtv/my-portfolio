import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        surfaceBorder: 'var(--color-base-700)',
        primary: 'var(--color-accent-500)',
        accent: 'var(--color-cyan-500)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        '4xl': 'var(--radius-4xl)',
        '3xl': 'var(--radius-3xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'glow-primary': 'var(--shadow-glow-primary)',
        'glow-emerald': 'var(--shadow-glow-emerald)',
        'inner-subtle': 'var(--shadow-inner)',
      },
      spacing: {
        '18': 'var(--space-18)',
      },
    },
  },
  plugins: [],
};
export default config;
