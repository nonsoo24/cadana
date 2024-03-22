/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        gordita: ['Gordita', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        white: '#FFFFFF',
        success: '#19D076',
        background: {
          1: "#4a4a49",
          2: "#20201f",
          3: "#2E2B4A",
          4: "#29263F"
        },
        grey: {
         1: '#FAFAFA',
         2: '#FDFDFD',
         3: '#F5F5F5',
         4: '#626260',
         5: '#F2F2F2'
        },
        error: '#E5363D',
        textColor: {
          1: '#1B212D',
          2: '#929EAE',
          3: '#78778B'
        },
        dark : {
          1: '#201E34',
          2: '#1E1C30',
          3: '#282541',
          4: '#1C1A2E'
        }
      },
      fontSize: {
        size1: ['1.5625rem', '1.89125rem'], // fontSize: 25px line-height: 30.26px
        size2: ['1.25rem', '1.5125rem'], // fontSize: 20px line-height: 24.2px
        size3: ['1rem', '1.21rem'], // fontSize: 16px line-height: 19.36px
        size4: ['0.875rem', '1.05875rem'], // fontSize: 14px line-height: 16.94px
        size5: ['0.75rem', '1.06875rem'], // fontSize: 12px line-height: 17.1px
      },
    },
  },
  plugins: [],
}

