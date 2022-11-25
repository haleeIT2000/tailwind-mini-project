/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        baiJam: ['BaiJamjuree', 'sans-serif'],
      },
      backgroundImage: {
        'search': "url('/src/img/bg-pattern-quotation.svg')",
    },
    },
  },
  plugins: [],
}
