// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#84cc16',
          500: '#65a30d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
