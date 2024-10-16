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
        primary: '#3b5286',
        light: '#1565c0',
        dark: '#2c3e50'
      },
      colors: {
        primary: '#3b5286',
        grayCustom: '#44546f',
      },
      width: {
        'sidebar-open': '250px',
        'sidebar-close': '80px'
      },
      height: {
        'app-bar-height': '58px',
        'board-bar-height': '60px',
        'board-content-height': 'calc(100vh - 58px)',
        'column-header-height': '50px',
        'column-footer-height': '56px'
      },
      boxShadow: {
        header: '0 1px 2px rgba(56, 65, 74, .15)'
      }
    }
  },
  plugins: [nextui()]
}
