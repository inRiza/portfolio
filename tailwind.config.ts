import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "500px",
        sm: "600px",
        md: "690px",
        lg: "988px",
        xl: "1078px",
        xxl: "1265px"
      },
      colors: {
        text: {
          gray: "#71767b",
          graylight: "e7e9ea",
        },
        border: {
          gray: "#2f3336cc",
        },
        input: {
          gray: "#202327",
        },
        icon: {
          blue: "#1da1f2",
          green: "#00ba7c",
          pink: "#f91880",
        },
        hover: {
          gray: "#181818",
        },
      },
      keyframes: {
        'post-click': {
          '0%': { 
            transform: 'scale(1) rotate(0deg)',
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)'
          },
          '25%': { 
            transform: 'scale(0.95) rotate(-5deg)',
            boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)'
          },
          '50%': { 
            transform: 'scale(1.05) rotate(5deg)',
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'
          },
          '75%': { 
            transform: 'scale(0.98) rotate(-2deg)',
            boxShadow: '0 0 0 5px rgba(255, 255, 255, 0)'
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'
          }
        }
      },
      animation: {
        'post-click': 'post-click 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
