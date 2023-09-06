/** @type {import('tailwindcss').Config} */
import bg from './src/Assets/5.jpg';
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    backgroundImage: {
      'hero-pattern': "url('./src/Assets/5.jpg')",
    },
    colors:{
        'brown':"#AB7442",
        'white':'white',
        'black':'black',
        'crousalColor':'#68615E',
        'slate':'#F5F5F5'
        
    }

  },
  plugins: [],
}