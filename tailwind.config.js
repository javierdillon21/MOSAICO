module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#A8A198',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      brightness: {
        10: '.1',
        25: '.25',
        45: '.45',
        175: '1.75',
      },
      fontFamily: {
        'title': ['Sen', 'sans-serif']
      },
      maxWidth: {
        '1/5': '20%',
        '1/3': '33%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       },
      height: {
        navegationbar: '96px',
        socialmediabox: '27px',
        footer: '108px',
        portada: '850px',
        pl1: '1076px',
        pl1R: '600px',
        pl2: '950px',
        pl2R: '550px',
        pl3: '457px',
        miniatura: '200px',
        sm: '660px'
      },
      width: {
        'tabsbox': '600px',
        'socialmediabox': '68px',
        'cbservicios': '170px'
      },
      fontSize: {
        header: ['15px', '18px'],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#A8A198',
        'secondary': '#C5802A',
        'third': '#2B2B2B',
        'danger': '#e3342f',
      }),
      textColor: {
        'primary': '#A8A198',
        'secondary': '#C5802A',
        'third': '#4C4945',
        'danger': '#e3342f',
      },
      inset: {
       '1/5': '20%',
       '1/4': '25%',
      },
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fill: ['hover', 'focus'],
      strokeWidth: ['hover', 'focus'],
      stroke: ['hover', 'focus'],
      rotate: ['active', 'group-hover'],
    }
  }
};
