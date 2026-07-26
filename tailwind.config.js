/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080D18",
          900: "#0B1120",
          800: "#111A2E",
          700: "#1B2740",
        },
        gold: {
          400: "#E4B84A",
          500: "#D4A017",
          600: "#B3860F",
        },
        ink: {
          900: "#0F172A",
          600: "#475569",
          400: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
