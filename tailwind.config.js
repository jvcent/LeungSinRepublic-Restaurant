/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#ebdcc5",
        tertiary: "#301010",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        main: "url('/src/assets/mainbg.jpg')",
        menu: "url('/src/assets/menubg.jpg')",
        foot: "url('/src/assets/footerbg.jpg')",
      },
    },
  },
  plugins: [],
};
