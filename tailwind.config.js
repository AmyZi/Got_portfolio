/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002366",
        secondary: "#FFFFFF", 
        tertiary: "#FFD700",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },
    },
  },
  plugins: [],
};