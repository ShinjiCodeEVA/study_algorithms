/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body-font': ['Open Sans', 'sans-serif']
      },
      colors: {
        'slate-blue': "#0b6bbf",
        'light-blue': "#00d2ff",
        'slate-dark': "#313131",
        'pale-dark': "#757575",
        'slate-gray': "#dedede",
        'light-gray': "#f4f4f4"
      },
      screens: {
        '2-md': "950px",
        '3-md': "655px"
      }
    },
  },
  plugins: [],
}