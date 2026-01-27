import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFBF7",
        surface: "#F3EFE7",  
        primary: "#D4AF37",   
        "primary-hover": "#B5952F",
        text: "#2D2A26",      
        muted: "#86827E",     
        success: "#8DA399",
      },
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
        serif: ["var(--font-bodoni)", "serif"],    
      }
    },
  },
  plugins: [],
};
export default config;
