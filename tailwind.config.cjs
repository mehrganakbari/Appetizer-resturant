/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'lite': '#eee',
      'lite-gray': '#FAFAFA',
      'dark': '#333333',
      'orange': '#FFA323',
      'lite-text': '#707981',
    },
    extend: {
      backgroundImage: {
        'slider-2': "url('/assets/images/bg_2.jpg')",
        'slider-3': "url('/assets/images/bg_3.jpg')",
        'bottomAbout': "url('/assets/images/bg_4.jpg')",
        'Testimony': "url('/assets/images/bg_5.jpg')",
        'insat-1': "url('/assets/images/insta-1.jpg')",
        'insat-2': "url('/assets/images/insta-2.jpg')",
        'insat-3': "url('/assets/images/insta-3.jpg')",
        'insat-4': "url('/assets/images/insta-4.jpg')",
        'insat-5': "url('/assets/images/insta-5.jpg')",
      },
      screens: {
        'xs': '400px',
        'xs2': '515px',
        'sm': '568px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};