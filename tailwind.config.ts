import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        xsm: "410px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlack: {
          100: "#f5f5f5",
          200: "#e0e0e0",
          300: "#b3b3b3",
          400: "#808080",
          500: "#4d4d4d",
          600: "#333333",
          700: "#262626",
          800: "#1a1a1a",
          900: "#000000",
        },
        customWhite: {
          100: "#ffffff",
          200: "#f2f2f2",
          300: "#e6e6e6",
          400: "#d9d9d9",
          500: "#cccccc",
          600: "#b3b3b3",
          700: "#999999",
          800: "#808080",
          900: "#666666",
        },
        customYellow: {
          100: "#fff9e6",
          200: "#fff2cc",
          300: "#ffe699",
          400: "#ffd966",
          500: "#ffd133",
          600: "#ffcc00",
          700: "#ffbf00",
          800: "#ff9900",
          900: "#ff8000",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        robotoCondensed: ["var(--font-roboto-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
