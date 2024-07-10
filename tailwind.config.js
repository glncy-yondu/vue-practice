/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'techy-blue': {
          50: '#F3FAFF',
          75: '#95CFF9',
          100: '#6ABCF6',
          200: '#2B9FF3',
          300: '#008DF0',
          400: '#0062A8',
          500: '#005694',
          default: '#008DF0'
        },
        'hello-yellow': {
          50: '#FFF8EB',
          75: '#FFE2AD',
          100: '#FFD68C',
          200: '#FFC45A',
          300: '#FFB838',
          400: '#B35927',
          500: '#81401C',
          default: '#151C36'
        },
        pink: {
          50: '#FBECF1',
          75: '#F0B1C6',
          100: '#EA91AF',
          200: '#E0618C',
          300: '#DA4175',
          400: '#992E52',
          500: '#852847',
          default: '#DA4175'
        },
        purple: {
          50: '#F0ECF4',
          75: '#C3AFD2',
          100: '#AA8EBF',
          200: '#865EA4',
          300: '#6D3D91',
          400: '#4C2B66',
          500: '#422558',
          default: '#6D3D91'
        },
        teal: {
          50: '#422558',
          75: '#A0F3EB',
          100: '#A0F3EB',
          200: '#3FE7D6',
          300: '#18E2CE',
          400: '#119E90',
          500: '#0F8A7E',
          default: '#18E2CE'
        }
      }
    }
  },
  plugins: []
}
