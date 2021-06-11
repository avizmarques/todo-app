module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#57ddff",
          DEFAULT: "#3a7bfd",
        },
        gray: {
          DEFAULT: "#fafafa",
        },
        grayishBlue: {
          light: "#e4e5f1",
          DEFAULT: "#d2d3db",
          dark: "#9394a5",
          darkest: "#484b6a",
        },
        purple: "#c058f3",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
