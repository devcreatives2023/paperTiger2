/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        title:"'Anton', sans-serif",
        text:"'Hind', sans-serif",
        parg:"'PT Sans Narrow', sans-serif"
      },
      padding: {
        xl:"0.5rem 2rem",
        main:"0.5rem 1.5rem"

      },
      fontSize: {
        text:"1.3rem",
        items:"1.8rem"
      },
      backgroundColor: {
        body:"rgb(242, 243, 244)"
      },
      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1502px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}
