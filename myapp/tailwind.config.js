/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {textShadow: {
      DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.3)',  // Custom shadow style
      md: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      lg: '4px 4px 8px rgba(0, 0, 0, 0.7)',
      xl: '5px 5px 10px rgba(0, 0, 0, 0.9)',
    }},
    backgroundImage: {
      'gradient-animated': `linear-gradient(94.7deg, rgba(228, 254, 90, 1) 0%, rgba(86, 214, 215, 1) 35%, rgba(118, 61, 181, 1) 68.5%, rgba(239, 31, 162, 1) 100%)`,
      'gradient-66deg-opacity': 'linear-gradient(66deg, rgba(118, 61, 181, 0.5) 30%, rgba(239, 31, 162, 0.5) 60%, rgba(228, 254, 90, 0.5) 100%)',
    },
    animation: {
      'gradient-move': 'gradient-move 1.5s ease infinite',
    },
    keyframes: {
      'gradient-move': {
        '0%': {
          'background-position': '0% 50%',
        },
        '50%': {
          'background-position': '100% 50%',
        },
        '100%': {
          'background-position': '0% 50%',
        },
      },
    },
    
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

