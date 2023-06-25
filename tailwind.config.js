/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: {
        subtle: '#16181B',
        DEFAULT: '#000000',
      },
      darkblack: {
        100: '#070916',
        200: '#0D1627'
      },
      white: '#FFFFFF',
      blue: {
        500: '#0050FF',
      },
      darkblue: {
        100: '#121828',
        200: '#1E2939',
        300: '#202938',
        350: '#2A3546',
        400: '#364154',
        450: '#333E4E',
        500: '#354050',
      },
      gray: {
        50: '#F8FAFC',
        200: '#E2E8F0',
        300: '#CBD5E1',
        500: '#64748B',
        700: '#334155',
      },
      darkgray: {
        50: '#445764',
        100: '#99A0B2',
        400: '#C8CFDC',
        500: '#C9CEDC',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        sm: '0px 1px 2px 0px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
};
