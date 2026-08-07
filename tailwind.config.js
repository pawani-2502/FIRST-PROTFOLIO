/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050508",
        surface: "#0d0d14",
        border: "#1f1f2e",
        accent: "#7c5cff",
        accent2: "#22d3ee",
        muted: "#8b8ba3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 92, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
