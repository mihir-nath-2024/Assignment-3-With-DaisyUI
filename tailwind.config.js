/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#ABEF5F', 
        'custom-green-transparent': 'rgba(171, 239, 95, 0.5)',
        'concept-card-1':'rgb(231, 193, 211)',
        'concept-card-2':'rgb(239, 218, 110)',
        'concept-card-3':'rgb(164, 218, 195)',
        'concept-card-4':'rgb(119, 170, 234)',
        'portfolio-btn':'rgba(171, 239, 95, 0.2)',
        'port-card-border':'rgb(233, 233, 233)',
        'news-btn-bg':'rgba(171, 239, 95, 0.2)',
      },
      
    },
  },
  plugins: [require('daisyui')],
}

