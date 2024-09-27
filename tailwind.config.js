/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ...colors,
        lavender: {
          50: "#f5f6fd",
          100: "#e6e6fa",
          200: "#dbdbf9",
          300: "#c0bff3",
          400: "#9f9aeb",
          500: "#7e71e1",
          600: "#6952d5",
          700: "#5940c1",
          800: "#4a35a2",
          900: "#3f2d85",
          950: "#251b5a",
        },
        mint: {
          50: "#f0feef",
          100: "#daffd9",
          200: "#b6fdb5",
          300: "#98fb98",
          400: "#3bed3c",
          500: "#11d613",
          600: "#07b208",
          700: "#0a8b0b",
          800: "#0e6d10",
          900: "#0d5a10",
          950: "#013203",
        },
        coral: {
          50: "#fff4ed",
          100: "#ffe5d4",
          200: "#ffc7a8",
          300: "#ffa071",
          400: "#ff7f50",
          500: "#fe4711",
          600: "#ef2d07",
          700: "#c61c08",
          800: "#9d190f",
          900: "#7e1810",
          950: "#440806",
        },
      },
    },
  },
  plugins: [],
};
