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
        'gray-white': "#d8d8d8",
        'slate-white': "#f4f4f4",
        'dark-gray': "#757575",
        'slate-blue': "#0b6bbf",
        'slate-black': "#313131"
      }
    },
  },
  plugins: [],
}