/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.red,
      secondary: colors.red,
      
    },
    screens: {
      'xs': '480px',  // Extra small screens
      'sm': '640px',  // Small screens
      'md': '768px',  // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // Double extra large screens
      '3xl': '1920px', // Triple extra large screens
      '4xl': '2560px', // Quad extra large screens
    },
    scale: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '115': '1.15',
      '120': '1.2',
      '125': '1.25',
      '130': '1.3',
      '140': '1.4',
      '150': '1.5',
    },
  },
  plugins: [],
};
