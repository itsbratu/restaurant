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
      '5xl' : '3rem',
      'footer-logo' : '4rem',
      'home-logo' : '6rem',
      'tooltip' : '1.75rem',
      'price' : '2.5rem',
      'order' : '3.5rem',
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
        'mac' : "url('BG-IMAGES/mac_and_cheese.jpg')",
        'creamy' : "url('BG-IMAGES/creamy.jpg')",
        'carbonara' : "url('BG-IMAGES/carbonara.jpg')",
        'seapasta' : "url('BG-IMAGES/sea_pasta.jpg')",
      },
      gridTemplateAreas: {
        'info-layout': [
          'img-section img-section text',
          'img-section img-section text',
        ],
        'menuA-layout': [
          'section_bolognese section_bolognese section_lasagna',
          'section_bolognese section_bolognese section_lasagna',
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
          '. section_creamy section_creamy section_carbonara section_carbonara section_sea_pasta section_sea_pasta ',
          '. section_creamy section_creamy section_carbonara section_carbonara section_sea_pasta section_sea_pasta ',
          '. section_creamy section_creamy section_carbonara section_carbonara section_sea_pasta section_sea_pasta ',
          '. section_creamy section_creamy section_carbonara section_carbonara section_sea_pasta section_sea_pasta ',
          '. section_creamy section_creamy section_carbonara section_carbonara section_sea_pasta section_sea_pasta ',
        ],
        'empty-layout': [
          'empty empty empty',
        ],
        'reviews-layout': [
          'review0 review1 review2',
          'review0 review1 review2',
          'review0 review1 review2',
          'buttons buttons buttons',
        ],
        'contact-layout': [
          'map map map',
          'map map map',
          'map map map',
          'map map map',
          'info  info info',
        ],
        'footer-layout': [
          'addresses logo-social phone',
          'addresses logo-social phone',
          'addresses logo-social phone',
        ],
        'cart-layout': [
          'cart cart cart',
          'cart cart cart',
          'cart cart cart',
          'cart cart cart',
          'map map contact-user',
          'map map contact-user',
          'map map contact-user',
          'order order order',
          'order order order',
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
