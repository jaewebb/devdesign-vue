/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts}',],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-open-sans)',],
        display: ['var(--font-oxanium)',],
      },
    },
  },
  plugins: [],
}
