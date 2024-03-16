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
        grey: {
         1: '#FAFAFA',
         2: '#FDFDFD'
        },
        error: '#E5363D',
        textColor: {
          1: '#1B212D',
          2: '#929EAE',
          3: '#78778B'
        },
        dark : {
          1: '#201E34',
          2: '#1E1C30'
        }
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

