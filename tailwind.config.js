const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(34 197 94)",
        secondary: "rgb(0 0 0)",
      },
    },
    fontFamily: {
      title: ["Archivo", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
