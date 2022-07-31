/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-1': 'rgba(49,53,59,0.68)',
        'gray-2': '#f3f4f5',
        'gray-3': 'rgba(0,0,0,.54)',
        'gray-4': '#E5E7E9',
        'green-1': 'rgb(3,172,14)',
        'black-1': 'rgba(49, 53, 59, 0.96)'
      },
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif']
      },
      minWidth: {
        '150px': '150px',
      },
      width: {
        '6/10': '60%'
      },
      boxShadow: {
        '1': '0 1px 6px 0 rgb(49 53 59 / 12%)'
      },
      fontSize: {
        tiny: '0.785rem'
      },
      spacing: {
        '112': '30rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
