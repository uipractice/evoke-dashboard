/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        headerBlue: '#1B154C',
        headerOrange: '#F16A22',
        headerWhite: '#FFF',
        footerGray: '#454151',
      },
      height: {
        '166': '166px', // Define custom height for 2rd row
        '132': '132px',
      }
    },
  },
  purge:{
    options: {
      safelist: [
        // Safelist your dynamic class patterns here
        /^col-span-/,
        /^row-span-/,
      ],
    },
  },

  extend: {
    spacing: {
      '22': '22px', // Add custom 22px spacing
    },
  },



  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

