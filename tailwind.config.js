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
          50: "#f8fbff",
          100: "#eef4ff",
          200: "#dbeafe",
          300: "#c4b5fd",
          400: "#7c5cff",
          500: "#2f6fed",
          600: "#1d4ed8",
          700: "#1e3a8a",
          800: "#111827",
          900: "#102235",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47, 111, 237, 0.12), 0 20px 60px rgba(47, 111, 237, 0.12)",
        panel: "0 24px 80px rgba(15, 23, 42, 0.08)",
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
