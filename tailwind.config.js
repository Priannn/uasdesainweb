/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        merah: "#FF2929",
        biru: "2B2A4C",
        kuning: "#FFB200",
        beige: "#FCD9AC"
      },
      fontFamily: {
        'poppins': 'Poppins',
        'coiny' : 'Coiny'

      }
    },
  },
  plugins: [],
}