/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#454545',
        'light-gray': '#a1a1a1'
      }
    }
  },
  plugins: []
}
