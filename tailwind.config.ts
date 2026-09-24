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
        krem: "#FEFCF7",
        kremDim: "#F5F0E6",
        granat: "#2A3152",
        burgund: "#AB1544",
        roz: "#F7E9ED",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
