/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        button: '#D7FF7B',
        inputCodeBorder: '#253E99',
        inputCodeText: "#9790A2"
      }
    }
  },
  plugins: [],
};