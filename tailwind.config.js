/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 55s linear infinite",
      },
    },
    colors: {
      white: "#ffffff",
      gray: "#808080",
      yellow: "#ff0",
      "main-black": "#00000098",
      "main-blue": "#0065b1",
      "light-blue": "#00acce",
      "dark-green": "#54b82f",
      "light-green": "#54b849",
    },
  },
  plugins: [],
};
