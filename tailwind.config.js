/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(37 99 235)',
        secondary: 'rgb(100 116 139)',
        accent: 'rgb(245 158 11)',
        dark: 'rgb(30 41 59)',
        light: 'rgb(248 250 252)',
      },
      backgroundColor: {
        dark: {
          DEFAULT: 'rgb(17 24 39)',
          50: 'rgb(31 41 55)',
          100: 'rgb(55 65 81)',
        }
      }
    },
  },
  plugins: [],
}