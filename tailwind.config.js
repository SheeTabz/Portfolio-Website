/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#312544",
        btncolor : "#A162CF",
        text : "#FFFFFF",
        dark :  "#0E0E0E",
        text2 : "#ef5036",
        bright : "#EF5036 ",
        gradient1: '#CE6D88',
        cardColor: '#191919',
      
      }
    },
    screens :{
      sm : '640px',
      md:'768px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  plugins: [],
}
