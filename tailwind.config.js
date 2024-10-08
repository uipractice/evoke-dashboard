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
      },
      // gridTemplateColumns: {
      //   '1.5': 'repeat(2, 1fr) 0.5fr', // Custom grid with 1.5 columns
      // }
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

  plugins: [],
}

