import tailwindTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Cormorant Garamond', 'ui-serif'],
    },
    extend: {
      fontFamily: {
        display: ['Cinzel', 'ui-serif'],
        note: ['Bad Script', 'cursive'],
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero2.jpeg')",
      },
    },
  },
  plugins: [tailwindTypography],
}

