/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files inside `src`
    "./public/index.html",        // Ensures public HTML is also scanned
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        primary: 'var(--color)',
        link: '#646cff',
        'hover-link': '#535bf2',
        surface: '#f9f9f9',
      },
      fontSize: {
        '3.2em': '3.2em',
      },
    },
  },
  plugins: [],
};
