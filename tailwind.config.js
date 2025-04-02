/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f9ff',
          100: '#e9f3ff',
          200: '#d4e7ff',
          300: '#b0d1ff',
          400: '#7eb1ff',
          500: '#4d8dff',
          600: '#2a6aff',
          700: '#1a4ecc',
          800: '#153fa3',
          900: '#123686',
        },
        secondary: {
          50: '#f7f8f9',
          100: '#eef0f3',
          200: '#d5dae3',
          300: '#bbc3d3',
          400: '#8794b3',
          500: '#5b6c96',
          600: '#48567a',
          700: '#394563',
          800: '#2e384f',
          900: '#252d41',
        },
        accent: {
          50: '#fef8ec',
          100: '#fcf0d9',
          200: '#f9e1b3',
          300: '#f5cd8c',
          400: '#f1b966',
          500: '#eda540',
          600: '#de8f2a',
          700: '#b97121',
          800: '#945c1d',
          900: '#794c1a',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
} 