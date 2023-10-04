/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Stem"],
      },
      colors: {
        "main-light": "#610944",
        "main-gray": "#F3F3F3",
      },
      boxShadow: {
        "card-shadow": "0px 0px 15px 0px rgba(140, 140, 140, 0.33)",
      },
    },
  },
  plugins: [],
};
