module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          veryDark: "#161722",
          desaturated: "#25273c",
          DEFAULT: "#3a7bfd",
          light: "#57ddff",
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
