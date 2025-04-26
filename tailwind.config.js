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
        primary: {
          light: '#805ad5', // Light theme primary
          dark: '#805ad5',  // Dark theme primary
        },
        secondary: {
          light: '#553c9a', // Light theme secondary
          dark: '#6b46c1',  // Dark theme secondary
        },
        accent: {
          light: '#805ad5',  // Light theme accent
          dark: '#9f7aea',   // Dark theme accent
        },
        background: {
          light: '#ffffff', // Light theme background
          dark: '#1a202c',  // Dark theme background
        },
        text: {
          light: '#333333', // Light theme text
          dark: '#f7fafc',  // Dark theme text
        },
        muted: {
          light: '#e9d8fd', // Light theme muted
          dark: '#44337a',  // Dark theme muted
        },
      },
    },
  },
  plugins: [],
} 