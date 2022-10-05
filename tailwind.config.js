/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "100px",
        tablet: "600px",
        pc: "1100px",
      },
    },
  },
  plugins: [],
};
