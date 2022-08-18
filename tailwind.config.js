module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(230, 233, 20)',
        'secondary': 'rgb(212, 212, 212)',
        'tertiary': 'rgb(133, 133, 133)',
      },
    },
    fontFamily: {
      Roboto: ['Roboto'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}