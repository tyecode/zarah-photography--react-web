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
        softBlack: "#333333",
        link: "#ef3100",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.90)",
      },
      backgroundImage: {
        "about-header": "url('/images/about-header.jpg')",
        "about-facts": "url('/images/about-fact.jpg')",
        "about-contact": "url('/images/about-contact.jpg')",
        "gallery-header": "url('/images/gallery-header.jpg')",
        "blog-header": "url('/images/blog-header.jpg')",
        "contact-header": "url('/images/contact-header.jpg')",
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
  plugins: [require("@tailwindcss/line-clamp")],
};
