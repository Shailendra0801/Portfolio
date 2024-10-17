/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

const tailwindConfig = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindScrollbar],
};

export default tailwindConfig;
