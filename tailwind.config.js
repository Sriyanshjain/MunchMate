/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors:{
        'black-rgba':'rgba(2,6,12,0.75)',
        'black-heading':'rgba(2, 6, 12, 0.92)'
      },
      fontFamily: {
        primary: "Grotesque",
      },
    },
  },
  plugins: [],
}

