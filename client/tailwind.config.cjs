/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#fcfcfc",
        second: "#1d1d1d",
        third: "#2f2f2f",
        fourth: "#414141",
        fifth: "#545454",
      },
    },
  },
  plugins: [],
};
