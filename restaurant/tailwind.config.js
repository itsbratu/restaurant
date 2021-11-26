module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'min': '400px', 'max': '800px'},
      'md': {'min': '801px', 'max': '1399px'},
      'lg': {'min': '1400px'},
    },
    fontSize: {
      'tiny' : '.4rem',
      'xs' : '.75rem',
      'sm' : '.875rem',
      'base' : '1rem',
      'lg' : '1.125rem',
      'xl' : '1.25rem',
      '2xl' : '1.5rem',
      '3xl' : '1.875rem',
      '4xl' : '2.25rem',
      '5xl' : '3rem'
    },
    fontFamily : {
      'general-font' : ['Roboto Mono'],
      'footer-font' : ['Bebas Neue'],
      'artistic' : ['Dancing Script']
    },
    extend: {
      width: {
        '2/12' : '20%'
      },
      grayscale: {
        70 : '70%',
        0 : '0%'
      },
      backgroundImage: {
        'home-section' : "url('BG-IMAGES/home-section.jpg')",
        'info-section' : "url('BG-IMAGES/info-section.jpg')",
        'bolognese' : "url('BG-IMAGES/bolognese.jpg')",
        'lasagna' : "url('BG-IMAGES/lasagna.jpg')",
        'mac' : "url('BG-IMAGES/mac.jpeg')",
        'creamy' : "url('BG-IMAGES/creamy.jpg')",

      },
      gridTemplateAreas: {
        'info-layout': [
          'img-section img-section text',
          'img-section img-section text',
        ],
        'menuA-layout': [
          'section_carbonara section_carbonara section_lasagna',
          'section_carbonara section_carbonara section_lasagna',
          'section_mac section_mac section_lasagna',
          'section_mac section_mac section_lasagna',
        ],
        'menuA-horizontal-layout': [
          'symbol symbol symbol',
          'symbol symbol symbol',
          'symbol symbol symbol',
          'info info info',
        ],
        'menuB-layout': [
          '. vertical1 vertical2 vertical2',
          '. vertical1 vertical2 vertical2',
          '. vertical1 vertical2 vertical2',
          '. vertical3 vertical3 vertical3',
          '. vertical3 vertical3 vertical3',
        ],
        'reviews-layout': [
          'review1 review2 review3',
          'review1 review2 review3',
          'review1 review2 review3',
        ],
        'contact-layout': [
          'map map map',
          'map map map',
          'map map map',
          '.  info .',
        ],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      border: ['hover'],
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
    },
  },
  variants: {
    extend: {
      zIndex: ['hover', 'active'],
      animation: ["motion-safe"],
      textIndent: ['responsive'],
      filter: ['hover', 'focus'],
      gridTemplateAreas: ['responsive'],
      backgroundOpacity : ['hover' , 'active'],
      backgroundColor : ['hover'],
    }
  },
  plugins: [
    require('tailwindcss-text-indent')(),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
