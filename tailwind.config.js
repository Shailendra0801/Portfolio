/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
import typography from '@tailwindcss/typography';



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'tight-custom': '1.15',
      }
    },
  },
  plugins: [tailwindScrollbar, typography],
}