/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    }
    ,
    extend: {
      colors:{
      dullmaroon:'#B7A6AF',
      dullgreen:'#698B22',
      darkpurple:'#210F18',
      salmon:'#E9967A',
      indianRed:'#CD5C5C',
      greenjuice:'#F1FFCC'
      },
    },
  },
  plugins: [],
}
