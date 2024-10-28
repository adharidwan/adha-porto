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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: { 
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        growShrink: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        growShrink: 'growShrink 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
