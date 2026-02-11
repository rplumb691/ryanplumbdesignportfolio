import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent-2) / <alpha-value>)",
        signal: "rgb(var(--signal) / <alpha-value>)",
        border: "rgba(19, 18, 0, 0.12)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        muted2: "rgb(var(--muted-2) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-clash-display)", "sans-serif"],
        sans: ["var(--font-archivo)", "system-ui"],
        accent: ["var(--font-clash-display)", "sans-serif"],
      },
      boxShadow: {
        card: "0 30px 80px -60px rgba(19,18,0,0.45)",
        border: "0 0 0 1px rgba(19,18,0,0.12)",
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(circle at 20% 20%, rgb(var(--accent) / 0.15), transparent 55%), radial-gradient(circle at 80% 0%, rgb(var(--accent-2) / 0.12), transparent 40%), radial-gradient(circle at 65% 70%, rgb(var(--accent) / 0.1), transparent 35%)",
        "halftone-dot":
          "radial-gradient(circle, rgb(var(--ink) / 0.08) 10%, transparent 11%)",
      },
      backgroundSize: {
        grid: "120px 120px",
        halftone: "6px 6px",
      },
      borderRadius: {
        xl: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
