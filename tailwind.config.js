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
        100: '#75EBF4',
        200: '#90AFFF'
      },
      "red": '#CF2424',
      "yellow": '#FBD300',
      "green": {
        100: '#83DF8E',
        200: '#67AB3E'
      },
      "white": '#FFFFFF',
      "magenta": '#F140CA'
    }
  },
  plugins: [],
}

