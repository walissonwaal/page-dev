/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c084fc',
        secondary: '#4ade80',
        gray: '#d1d5db',
        white: '#f8fafc',
        black: '#171717'
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif']
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
