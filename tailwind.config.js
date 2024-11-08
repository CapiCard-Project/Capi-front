/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        lilita: ['"Lilita One"', 'cursive'],
      },
      colors: {
        primary: '#181A2F',
        second_color: '#7b2bfc',
        button_color_click: '#17a883',
        color_blue: '#05083F'
      }
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require('tailwind-scrollbar')
  ],
}