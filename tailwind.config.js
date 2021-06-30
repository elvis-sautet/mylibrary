module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: "#b3bcf5",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
