module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontfamily: {
        poppins: ['Poppins', 'sans-serif'],
        cursive: ['Oooh Baby', 'cursive'],
      },
      colors: {
        'light-green': '#B0EACD',
        'dark-green': '#21BF73',
        white: '#F9FCFB',
        red: '#FD5E53',
      },
    },
  },

  plugins: [],
};
