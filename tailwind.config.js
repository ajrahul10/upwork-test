module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#272B35",
        label: '#872341',
        divider: '#343C4B',
        inputBox: '#5F7495'
      },
      fontFamily: {
        body: ['Lato'],
        heading: ['Poppins']
      },
      fontSize: {
        xxs: '10px',
        xs: '12px',
        normal: '15px',
        base: '16px',
        lg: '21px'
      },
      width: {
        line: '1px',
        card: '640px'
      },
      height: {
        line: '1px',
        card: '312px'
      },
      padding: {
        '1/2': '6px' 
      },
      lineHeight: {
        '5/6': '22.5px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
