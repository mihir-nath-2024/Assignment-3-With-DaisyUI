/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#ABEF5F', 
        'custom-green-transparent': 'rgba(171, 239, 95, 0.5)',
      },
      
    },
  },
  plugins: [require('daisyui')],
}

