module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ['Chakra Petch', 'sans-serif'],
    },
    extend: {
      width: {
        '90pw': '90%',
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
