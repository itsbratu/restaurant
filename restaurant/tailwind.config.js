module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily : {
      'general-font' : ['Roboto Mono'],
      'footer-font' : ['Bebas Neue'],
      'footer-logo-text' : ['Dancing Script']
    },
    extend: {
      width: {
        '2/12' : '20%'
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      textIndent: (theme, { negative }) => ({
        ...{
          sm: '2rem',
          md: '7rem',
          lg: '10rem',
        },
        ...negative({
          sm: '5rem',
          md: '7rem',
          lg: '10rem',
        }),
      }),
    }
  },
  variants: {
    animation: ["motion-safe"],
    textIndent: ['responsive'],

  },
  plugins: [
    require('tailwindcss-text-indent')(),
  ],
}
