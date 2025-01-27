import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': "#8B0000",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradiant-to-r': 'linear-gradient(to right, #8B0000, #000000',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(139, 0, 0, 0.5',
      }
    },
  },
  plugins: [],
} satisfies Config;
