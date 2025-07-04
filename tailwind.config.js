/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'ocean-blue': '#1E3A8A',
        'ocean-light': '#38BDF8',
        'ocean-orange': '#F97316',
        'ocean-red': '#DC2626',
      }
    },
  },
  plugins: [],
}
