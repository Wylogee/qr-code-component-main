/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        lightGray: '#D5E1EF' ,
        grayIshBlue: '#7D889E',
        darkBlue: '#1F314F'
      },
      backgroundImage: {
        'qrCode': "url('./images/image-qr-code.png')",
       }
    },
  },
  plugins: [],
}

