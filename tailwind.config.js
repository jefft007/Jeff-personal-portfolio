/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#8b5cf6', // Violet 500
        secondary: '#ec4899', // Pink 500
        dark: '#020617', // Slate 950
      }
    },
  },
  plugins: [],
}

