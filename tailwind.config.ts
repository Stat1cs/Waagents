import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          secondary: "var(--accent-secondary)",
        },
        gold: {
          DEFAULT: "#C5A059",
          light: "#D4AF37",
          dark: "#A68942",
        },
        navy: {
          DEFAULT: "#1B4D3E",
          light: "#236B55",
          dark: "#143D2F",
        },
        brand: {
          gold: "#C5A059",
          green: "#1B4D3E",
          cream: "#E8E0C5",
          bg: "#0B0B0B",
          fg: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        glass: "1rem",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C5A059 0%, #D4AF37 50%, #C5A059 100%)",
        "navy-gradient": "linear-gradient(180deg, #1B4D3E 0%, #0B0B0B 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        gold: "0 0 40px rgba(197, 160, 89, 0.18)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
