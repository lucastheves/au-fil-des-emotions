/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.vue'],
  content: [],
  theme: {
    fontFamily: {
      'nohemi-regular': ['Nohemi-Regular'],
      'nohemi-bold': ['Nohemi-Bold'],
      'faro-display': ['FaroDisplay'],
    },
    extend: {
      colors: {
        'background': '#fff8de',
        'orange': '#fda603',

        'blue': '#024dda',
        'green': '#078e3f',
        'light-green': '#8ee666',
        'red': '#fd030d',
        'purple': '#c814f4',
        'dark-purple': '#4d0060',
      }
    },
  },
  plugins: [],
}

