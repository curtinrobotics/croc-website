/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'croc-blue': '#4295D1',
        'croc-light-grey': '#999999',
        'croc-dark-grey': '#3E3E40',
        'croc-dark-blue': '#21406c',
        'croc-very-dark-blue': '#1e375d',
      },
      fontFamily: {
        'croc-paragraph': ['Avenir-Condensed', 'sans-serif'],
        'croc-head': ['Avenir-Demibold', 'sans-serif'],
        'croc-title': ['futura'],
        'croc-logo': ['ROBOTECH']
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

