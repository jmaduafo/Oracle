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
        background: "#311C1C",
        text: "#FA9600",
        accent: "#C9F479",
        text30: 'rgba(250, 150, 0, 0.3)'
      },
      screens: {
        'xxs': '0px',
  
        'xs': '480px',
        // => @media (min-width: 480px) { ... }
  
        'sm': '768px',
        // => @media (min-width: 768px) { ... }
  
        'md': '992px',
        // => @media (min-width: 992px) { ... }
  
        'lg': '1200px',
        // => @media (min-width: 1200px) { ... }
  
        'xl': '1320px',
        // => @media (min-width: 1320px) { ... }
  
        '2xl': '1660px',
        // => @media (min-width: 1920px) { ... } 
      },
      animation: {
        'spin-smooth': 'spin 3.5s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
      }
      
    },
  },
  plugins: [],
};
export default config;
