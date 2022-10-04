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
        dark :  "#2A2253",
        text2 : "#8B85A9",
        bright : "#8165D2 "
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
