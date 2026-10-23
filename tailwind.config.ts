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
        krem: "#FDFCF8",
        kremDim: "#F5F0E6",
        granat: "#2A3152",
        burgund: "#AC1644", // Malinowy akcent
        roz: "#F7E9ED",
        koral: "#F38080",
        sageLight: "#EAEEDA", // Rozjaśniony #C1C793 dla wysokiego kontrastu (10.5:1)
        rozLight: "#FDF2F4", // Rozjaśniony #F38080
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
