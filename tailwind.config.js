/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        orange: {
          2:"#FF8E27"
        }
      }
    },
  },
  plugins: [],
}

