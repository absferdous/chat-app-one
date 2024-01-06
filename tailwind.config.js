/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cornflower: {
          50: "#f0f9ff",
          100: "#e1f2fd",
          200: "#bce6fb",
          300: "#90d8f9",
          400: "#3ebdf2",
          500: "#15a5e2",
          600: "#0884c1",
          700: "#08699c",
          800: "#0b5981",
          900: "#0f4a6b",
          950: "#0a3047",
        },
      },
    },
  },
  plugins: [],
};
