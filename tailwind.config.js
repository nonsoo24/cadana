/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E75423',
        secondary: '#FFF0EB',
        white: '#FFFFFF',
        success: '#19D076',
        error: '#E5363D',
        text1: '#1B212D',
        text2: '#929EAE'
      },
      fontSize: {
        size1: ['1.5625rem', '1.89125rem'], // fontSize: 25px line-height: 30.26px
        size2: ['1.25rem', '1.5125rem'], // fontSize: 20px line-height: 24.2px
        size3: ['1rem', '1.21rem'], // fontSize: 16px line-height: 19.36px
        size4: ['0.875rem', '1.05875rem'], // fontSize: 14px line-height: 16.94px
      },
    },
  },
  plugins: [],
}

