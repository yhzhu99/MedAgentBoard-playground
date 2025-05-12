// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,html,css}", // Scans JS/TS files too, good for Alpine templates
  ],
  theme: {
    extend: {
      colors: {
        primary: { // Your custom sky blue palette
          50: '#f0f9ff',  // sky-50
          100: '#e0f2fe', // sky-100
          200: '#bae6fd', // sky-200
          300: '#7dd3fc', // sky-300
          400: '#38bdf8', // sky-400
          500: '#0ea5e9', // sky-500
          600: '#0284c7', // sky-600
          700: '#0369a1', // sky-700
          800: '#075985', // sky-800
          900: '#0c4a6e', // sky-900
          950: '#082f49', // sky-950
        },
      },
      fontFamily: {
        // You can set 'sans' to your preferred font if you import one
        // e.g., sans: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'), // Uncomment if you want to use the `prose` classes for rich text
  ],
}