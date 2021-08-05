module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "5v": "5vh",
        "8v": "8vh",
        "10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
        "82v": "82vh",
				"90v": "90vh",
				"92v": "92vh",
        "95v": "95vh",
        "2-screen": "200vh",
      },
      minHeight: {
        '10v': '10vh',
        '92v': '92vh',
        '82v': '82vh',
        '164v': '164vh',
      },
      width: {
         '3/8': '37.5%',
         '5/8': '62.5%',
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
       'layout1': '10vh minmax(0, 1fr) 10vh',
       'layout2': "10vh 30vh minmax(0, 1fr) 10vh",
      },
      gridColumn: {
         'span-13': 'span 13 / span 13',
      },
      margin: {
        '8v': '8vh',
      }

    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      fontWeight: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
}
