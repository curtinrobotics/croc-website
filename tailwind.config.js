/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
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
        'croc-title': ['futura', 'sans-serif'],
        'croc-logo': ['ROBOTECH']
      },
      typography: (theme) => ({
        hackathon: {
          css: {
            h1: {
              fontFamily: ['futura', 'sans-serif'],
              fontWeight: '700',
              color: '#4295D1',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.33333',
              '@screen sm': {
                fontSize: '1.8em',
                marginTop: '1.5555556em',
                marginBottom: '0.8888889em',
                lineHeight: '1.1111111',
              },
            },
            h2: {
              fontFamily: ['Avenir-Condensed', 'sans-serif'],
              color: theme('colors.white'),
            },
            p: {
              fontFamily: ['Avenir-Condensed', 'sans-serif'],
              color: theme('colors.white'),
              marginTop: '1.2em',
              marginBottom: '1.2em',
              '@screen sm': {
                fontSize: '1.25em',
                marginTop: '1.2em',
                marginBottom: '1.2em',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

