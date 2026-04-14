/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        neon: {
          50: "#effff4",
          100: "#d8ffe7",
          200: "#b7ffd0",
          300: "#8effb2",
          400: "#63ff94",
          500: "#2bff77",
          600: "#13d95e",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99, 255, 148, 0.18), 0 24px 80px rgba(0, 255, 122, 0.12)",
        panel: "0 18px 60px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -18px, 0) scale(1.02)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
