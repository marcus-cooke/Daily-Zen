/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#594D3E', // Minimalist-4-hex
        secondary: '#8C7E6C', // Minimalist-5-hex
        accent: '#BFBBB4', // Minimalist-1-hex
        light: '#F2EFE9', // Minimalist-2-hex
        highlight: '#D9D6D0', // Minimalist-3-hex
        background: {
          light: '#F2EFE9',
          dark: '#594D3E',
        },
        text: {
          light: '#594D3E',
          dark: '#F2EFE9',
        },
      },
    },
  },
  plugins: [],
} 