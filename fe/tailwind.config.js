const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: 'url(/bg-login.jpg)',
        hero: 'url(/home-page/banner-home.png)',
      },
      backgroundColor: {
        'over-lay': 'linear-gradient(to right, #364574, #405189)',
        primary: '#3b5286'
      },
      colors: {
        primary: '#3b5286',
        grayNormal: '#878a99'
      },
      width: {
        'sidebar-open': '250px',
        'sidebar-close': '80px'
      },
      height: {
        header: '70px'
      },
      boxShadow: {
        header: '0 1px 2px rgba(56, 65, 74, .15)'
      }
    }
  },
  plugins: [nextui()]
}
