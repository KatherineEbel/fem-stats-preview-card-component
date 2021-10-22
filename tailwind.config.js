module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif'
    },
    fontSize: {
      'xs': '12px',
      'sm': '15px',
      'md': '24px',
      'lg': '28px',
    },
    extend: {
      backgroundImage: {
        'header-desktop': "url('/images/image-header-desktop.jpg')",
        'header-mobile': "url('/images/image-header-mobile.jpg')",
      },
      colors: {
        primary: '#AB5CDB',
        'primary-70': 'rgba(171,92,219,0.7)',
        'primary-medium': '#1B1937',
        'primary-dark': '#0A0C1C',
        'grey-light-1': '#979797'
      },
      gridTemplateColumns: {
        layout: '1fr 350px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
