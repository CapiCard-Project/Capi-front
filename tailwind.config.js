/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#181A2F',
        second_color: '#00BE8E',
        color_blue: '#05083F'
      }
    },
  },
  plugins: [
  ],
}