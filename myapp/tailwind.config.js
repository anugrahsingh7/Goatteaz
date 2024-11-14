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
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

