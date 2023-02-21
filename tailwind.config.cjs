/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#0f0f0f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.85)",
      },
      backgroundImage: {
        aboutSection:
          "url('https://images.pexels.com/photos/2942194/pexels-photo-2942194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
