import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08060F",
          900: "#0E0B1B",
          800: "#15112A",
          700: "#1E1837",
          600: "#2A2347",
          500: "#3B3361",
        },
        violet: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        accent: {
          coral: "#FB7185",
          amber: "#F59E0B",
          mint: "#10B981",
          sky: "#22D3EE",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #6D28D9 0%, #8B5CF6 60%, #A78BFA 100%)",
        "ink-gradient":
          "radial-gradient(120% 80% at 50% 0%, #1E1837 0%, #0E0B1B 60%, #08060F 100%)",
        "ring-gradient":
          "conic-gradient(from 220deg at 50% 50%, #6D28D9, #8B5CF6, #A78BFA, #6D28D9)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(139,92,246,0.55)",
        ring: "0 0 0 1px rgba(167,139,250,0.18), 0 20px 60px -20px rgba(124,58,237,0.45)",
        device:
          "0 60px 80px -30px rgba(124,58,237,0.45), 0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
