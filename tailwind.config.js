module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend:{
    height: {
     navegationbar: '88px',
      socialmediabox: '27px',
      footer: '108px'
    },
    width: {
      'tabsbox': '412px',
      'socialmediabox': '68px',
      'cbservicios': '170px'
    },
    fontSize: {
      header: ['14px', '18px'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#373F41',
      'secondary': '#9D5F32',
      'danger': '#e3342f',
     }),
     textColor: {
      'primary': '#373F41',
      'secondary': '#9D5F32',
      'danger': '#e3342f',
    }
  }
},
variants: {
  extend: {
   fontWeight: ['hover', 'focus'],
   fill: ['hover', 'focus'],
   strokeWidth: ['hover', 'focus'],
   stroke: ['hover', 'focus'],
  }
}
};
