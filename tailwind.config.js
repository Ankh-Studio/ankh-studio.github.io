// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html}',

    // 👇 Add this line
    './src/**/*.{scss,sass}', // if your class names are used in SASS
  ],
  safelist: [
    'border_left',
    'border_right',
    'border_top',
    'border_bottom',
  ],
}
