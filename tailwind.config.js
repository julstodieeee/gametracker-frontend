/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0b0c10',
        'space-purple': '#6c63ff',
        'space-blue': '#45a29e',
        'space-gray': '#1f2833',
        'space-white': '#c5c6c7',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}