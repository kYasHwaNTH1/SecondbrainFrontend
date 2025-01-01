/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          300: "#E6E6FA",
          500:"#33006F", 
          600:"#1d1160"
        }
      }
    },
  },
  plugins: [],
}