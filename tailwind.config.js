/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '370px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    daisyui,
  ],
}

