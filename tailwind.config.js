/** @type {import('tailwindcss').Config} */
import { customColors } from './src/utils/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        satoshi: ['Satoshi']
      }
    }
  },
  safelist: [{ pattern: /.*brand.*/ }],
  plugins: []
}
