/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Quicksand', 'sans-serif'] 
    },


    extend: {
      colors: {
        black: {
          400: "#333333"
        },
      }
    },
  },
  plugins: [],
}