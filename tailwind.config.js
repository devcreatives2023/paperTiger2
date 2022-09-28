/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        title:"'Anton', sans-serif",
        text:"'Hind', sans-serif"
      },
      padding: {
        xl:"0.5rem 2rem",
        main:"0.5rem 1.5rem"

      },
      fontSize: {
        text:"1.3rem"
      },
      backgroundColor: {
        body:"rgb(242, 243, 244)"
      }
    },
  },
  plugins: [],
}
