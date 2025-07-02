module.exports = {
  theme: {
    //screens: {
    //  'ms'  : '320px',
    //  'mm'  : '375px',
    //  'ml'  : '425px',
    //  'md'  : '768px',
    //  'lg'  : '1024px',
    //  'xl'  : '1280px',
    //  '2xl' : '1536px',
    //},
    extend: {
      height: {
        'screen-dvh': '100dvh',
      },
      minHeight: {
        'screen-dvh': '100dvh',
      },
    },
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,scss,sass}',
  ],
  safelist: [
    'border_left',
    'border_right',
    'border_top',
    'border_bottom',
  ],
};
