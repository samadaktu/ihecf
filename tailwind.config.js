/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A192F', // Dark Blue
          light: '#112240',
          dark: '#020c1b',
        },
        secondary: {
          DEFAULT: '#C5A059', // Gold
          light: '#D4AF37',
          dark: '#B8860B',
        },
        accent: {
          light: '#F8FAFC',
          DEFAULT: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
