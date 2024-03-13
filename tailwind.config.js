/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "pink": '#D197B1',
      "blue": {
        100: '#768AEE',
        200: '#A3E9FB'
      },
      "red": '#CB0F0F',
      "yellow": '#FBD404',
      "green": {
        100: '#00BE16',
        200: '#45831E'
      },
      "white": '#FFFFFF',
      "magenta": '#EC28B6',
      "cream": "#FFE0B3"
    }
  },
  plugins: [],
}

