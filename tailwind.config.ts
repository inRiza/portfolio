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
          gray: "#2f336",
        },
        input: {
          gray: "#202327",
        },
        icon: {
          blue: "#1dbf90",
          green: "#00ba7c",
          pink: "#f91880",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
