/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}" // Catch-all for files in root
  ],
  theme: {
    extend: {
      colors: {
        steel: { navy: '#1B263B', blue: '#2D3E50', grey: '#95A5B8', galvanized: '#778DA9' },
        obsidian: '#0D1B2A', charcoal: '#2C3E50',
        safety: { orange: '#F39C12', construction: '#E67E22' },
        blueprint: '#E8ECEF', architectural: '#F8F9FA',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)',
        'gradient-premium': 'linear-gradient(135deg, #F39C12 0%, #E67E22 100%)',
      }
    }
  },
  plugins: [],
}
