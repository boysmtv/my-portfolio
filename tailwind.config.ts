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
        base: {
          900: "var(--color-base-900)",
          800: "var(--color-base-800)",
          700: "var(--color-base-700)",
          600: "var(--color-base-600)",
          500: "var(--color-base-500)",
        },
        brand: {
          600: "var(--color-brand-600)",
          500: "var(--color-brand-500)",
          400: "var(--color-brand-400)",
          300: "var(--color-brand-300)",
          200: "var(--color-brand-200)",
        },
        accent: {
          600: "var(--color-accent-600)",
          500: "var(--color-accent-500)",
          400: "var(--color-accent-400)",
          300: "var(--color-accent-300)",
        },
        highlight: {
          500: "var(--color-highlight-500)",
          400: "var(--color-highlight-400)",
          300: "var(--color-highlight-300)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": "var(--font-size-2xs)",
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
        "4xl": "var(--space-4xl)",
        "5xl": "var(--space-5xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        "elevation-1": "var(--shadow-elevation-1)",
        "elevation-2": "var(--shadow-elevation-2)",
        "elevation-3": "var(--shadow-elevation-3)",
        "elevation-4": "var(--shadow-elevation-4)",
        "glow-emerald": "var(--shadow-glow-emerald)",
        "glow-blue": "var(--shadow-glow-blue)",
        "glow-gold": "var(--shadow-glow-gold)",
      },
      maxWidth: {
        site: "80rem",
      },
      transitionTimingFunction: {
        production: "var(--ease-production)",
        expressive: "var(--ease-expressive)",
        smooth: "var(--ease-smooth)",
      },
      transitionDuration: {
        instant: "var(--duration-instant)",
        micro: "var(--duration-micro)",
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        cinematic: "var(--duration-cinematic)",
      },
      zIndex: {
        base: "var(--z-base)",
        elevated: "var(--z-elevated)",
        overlay: "var(--z-overlay)",
        nav: "var(--z-nav)",
        modal: "var(--z-modal)",
        cursor: "var(--z-cursor)",
      },
    },
  },
  plugins: [],
};
export default config;
