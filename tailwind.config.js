const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fcGreen: '#27AE60',
        fcBlue: '#3498DB',
        fcRed: '#E74C3C',
        fcLight: '#FFFFFF',
        fcDark: '#000000',
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
