/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        menu: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      fontFamily: {
        Poppins: ["Poppins, san-serif"],
      },
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
