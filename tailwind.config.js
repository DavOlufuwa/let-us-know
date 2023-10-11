/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js,tsx,ts}'
  ],
  theme: {
    extend: {
      'colors': {
        'primary': 'rgba(208,227,134,0.98)'
      },
      'fontFamily': {
        'balisong': ['Balisong', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

