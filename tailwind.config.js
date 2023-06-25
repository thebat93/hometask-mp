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
      white: '#FFFFFF',
      blue: {
        500: '#0050FF',
      },
      gray: {
        50: '#F8FAFC',
        200: '#E2E8F0',
        300: '#CBD5E1',
        500: '#64748B',
        700: '#334155',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        sm: '0px 1px 2px 0px rgba(15, 23, 42, 0.05)'
      }
    },
  },
  plugins: [],
};
