/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0076CE',
        'accent': '#FF6600',
        'text-primary': '#1a1a1a',
        'text-secondary': '#666',
        'bg-secondary': '#f5faff',
      }
    },
  },
  plugins: [],
}

