module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1720px',
    },
    extend: {
      minHeight: {
        'screen-75': '75vh'
      },
      fontSize: {
        '55': '55rem'
      },
      opacity: {
        '80': '.8'
      },
      zIndex: {
        '2': 2,
        '3': 3
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px'
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px'
      },
      maxHeight: {
        '860-px': '860px',
        '620-px': '620px',
        '600-px': '600px'
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px'
      },
      minWidth: {
        '140-px': '140px',
        '48': '12rem'
      },
      backgroundSize: {
        full: '100$'
      },
      colors: {
        everglade: {
          DEFAULT: '#234D25',
          '50': '#8BCA8E',
          '100': '#7AC27D',
          '200': '#57B25B',
          '300': '#439347',
          '400': '#337036',
          '500': '#234D25',
          '600': '#132A14',
          '700': '#030703',
          '800': '#000000',
          '900': '#000000'
        },
        cherrywood: {
          DEFAULT: '#601C13',
          '50': '#E48275',
          '100': '#DF6F60',
          '200': '#D74835',
          '300': '#B53524',
          '400': '#8B281B',
          '500': '#601C13',
          '600': '#35100B',
          '700': '#0B0302',
          '800': '#000000',
          '900': '#000000'
        }
      }
    }
  },
  variants: [
    'responsive',
    'group-hover',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled'
  ],
  plugins: [
    require('@tailwindcss/forms')
  ]
}
