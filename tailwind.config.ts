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
        aubergine: {
          DEFAULT: "#241C27",
          surface: "#2E2432",
          border: "#3D3142",
        },
        ivory: {
          DEFAULT: "#F0EDE6",
          muted: "#D8D4CC",
        },
        lilac: {
          DEFAULT: "#A59AA8",
          dark: "#766C79",
        },
        lime: {
          DEFAULT: "#C8E66B",
          hover: "#D6F07F",
        },
        neutral: {
          DEFAULT: "#171519",
          border: "#28242B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Syne", "sans-serif"],
        serif: ["var(--font-serif)", "Fraunces", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.05em",
        widest: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
