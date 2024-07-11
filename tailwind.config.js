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
          DEFAULT: '#008DF0'
        },
        'hello-yellow': {
          50: '#FFF8EB',
          75: '#FFE2AD',
          100: '#FFD68C',
          200: '#FFC45A',
          300: '#FFB838',
          400: '#B35927',
          500: '#81401C',
          DEFAULT: '#151C36'
        },
        pink: {
          50: '#FBECF1',
          75: '#F0B1C6',
          100: '#EA91AF',
          200: '#E0618C',
          300: '#DA4175',
          400: '#992E52',
          500: '#852847',
          DEFAULT: '#DA4175'
        },
        purple: {
          50: '#F0ECF4',
          75: '#C3AFD2',
          100: '#AA8EBF',
          200: '#865EA4',
          300: '#6D3D91',
          400: '#4C2B66',
          500: '#422558',
          DEFAULT: '#6D3D91'
        },
        teal: {
          50: '#422558',
          75: '#A0F3EB',
          100: '#A0F3EB',
          200: '#3FE7D6',
          300: '#18E2CE',
          400: '#119E90',
          500: '#0F8A7E',
          DEFAULT: '#18E2CE'
        },
        success: {
          50: '#E9F9EB',
          75: '#A4E7AC',
          100: '#7EDD89',
          200: '#47CE57',
          300: '#21C434',
          400: '#178924',
          500: '#147820',
          DEFAULT: '#21C434'
        },
        danger: {
          50: '#FDEAEA',
          75: '#F7A9A9',
          100: '#F38585',
          200: '#EE5151',
          300: '#EB2D2D',
          400: '#A51F1F',
          500: '#8F1B1B',
          DEFAULT: '#EB2D2D'
        },
        gray: {
          50: '#E8E8E8',
          75: '#CFCFCF',
          100: '#BBBBBB',
          200: '#9D9D9D',
          300: '#898989',
          400: '#606060',
          500: '#545454',
          DEFAULT: '#898989'
        },
        'serious-navy': {
          50: '#E8E8E8',
          75: '#9FA2AD',
          100: '#777B8A',
          200: '#3D4358',
          300: '#151C36',
          400: '#0F1426',
          500: '#0D1121',
          DEFAULT: '#151C36'
        },
        background: '#FCFCFC'
      },
      fontFamily: {
        satoshi: ['Satoshi']
      }
    }
  },
  plugins: []
}
