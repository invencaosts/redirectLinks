/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': 'white',
      'red': 'red'
    },
    extend: {
      backgroundImage: {
        'fundo': "url('../imgs/CAPA\ FACEBOOK\ DEV.png')",
      },
      boxShadow: {
        'bx': 'rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px',
      }
    },
  },
  plugins: [],
}

