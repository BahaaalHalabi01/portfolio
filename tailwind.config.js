const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1792px'
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl':'5rem',
        '3xl': '5rem'
      },
    },
    extend: {
      fontFamily: {
        'sans': ['"EB Garamond"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'svelte': '#ff4700'
      }
    },
  },
  plugins: [],
}

