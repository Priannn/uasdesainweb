/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      colors:{
        merah: "#FF2929",
        biru: "#2B2A4C",
        kuning: "#FFB200",
        beige: "#EAE8E1"
      },
      fontFamily: {
        'poppins': 'Poppins',
        'coiny' : 'Coiny'

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}