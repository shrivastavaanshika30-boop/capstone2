/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind to scan these files for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  // Enable dark mode using a CSS class (add 'dark' to <html> to activate)
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
