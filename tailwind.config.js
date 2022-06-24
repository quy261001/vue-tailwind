/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
      }
    },
  },
  plugins: [],
}
