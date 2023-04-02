/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#30bead',
          100: '#d6f2ef',
          200: '#c1ece6',
          300: '#ace5de',
          400: '#83d8ce',
          500: '#59cbbd',
          600: '#2bab9c',
          700: '#26988a',
          800: '#228579',
          900: '#185f57'
        },
        secondary: {
          DEFAULT: '#ff7e84',
          100: '#ffe5e6',
          200: '#ffcbce',
          300: '#ffbfc2',
          400: '#ffa5a9',
          500: '#ff989d',
          600: '#e67177',
          700: '#cc656a',
          800: '#b3585c',
          900: '#803f42'
        }
      }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    }
  },
  plugins: []
}
