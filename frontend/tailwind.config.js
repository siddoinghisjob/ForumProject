/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        back : "var(--back-color)",
        text : "var(--text-color)",
        back2 : "var(--back-color-2)",
        buttonc : "var(--button-color)"
      }
    },
  },
  plugins: [],
}