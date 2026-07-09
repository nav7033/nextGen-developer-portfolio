import type { Config } from "tailwindcss";

const config: Config = {
  // CRITICAL: Ensure these paths point precisely to your folders
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#030712",
          card: "rgba(15, 23, 42, 0.35)",
          hover: "rgba(17, 24, 39, 0.6)",
        },
        brand: {
          purple: "#8B5CF6",
          indigo: "#6366F1",
          blue: "#3B82F6",
          cyan: "#06B6D4",
        },
        muted: {
          text: "#94A3B8",
          body: "#CBD5E1",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;