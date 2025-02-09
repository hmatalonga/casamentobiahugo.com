import tailwindTypography from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero6.jpeg')",
      },
      fontFamily: {
        sans: ['Noto-Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [tailwindTypography],
}

