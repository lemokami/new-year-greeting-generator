module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontfamily: {
        serif: ['Source Serif Pro', 'serif'],
        licorice: ['Licorice', 'cursive'],
      },
      colors: {
        blue: '#04294F',
      },
    },
  },

  plugins: [],
};
