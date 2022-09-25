/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "rgb(34 197 94)",
        secondary: "rgb(0 0 0)",
        // primary: "rgb(34 197 94)",
        // secondary: "rgb(255 255 255)",
      },
    },
  },
  plugins: [],
};
