/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: { 500: '#F59E0B', 600: '#D97706' },
        'goa-blue': '#1E40AF',
      },
    },
  },
  plugins: [],
}