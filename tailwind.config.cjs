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
        overlay: "rgba(0, 0, 0, 0.60)",
      },
      backgroundImage: {
        aboutHeader:
          "url('https://images.pexels.com/photos/2942194/pexels-photo-2942194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        contactHeader:
          "url(https://images.unsplash.com/photo-1515768450795-e3c5a297e42d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)",
        factsSection:
          "url('https://images.pexels.com/photos/674268/pexels-photo-674268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
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
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
