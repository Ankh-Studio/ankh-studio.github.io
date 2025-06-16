// fonts.ts
import { Inter, Radio_Canada } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const radio_canada = Radio_Canada({
  subsets: ['latin'],
  display: 'swap',
});

// Assuming Lexand is a local font file
export const lexand = localFont({
  src: [
    {
      path: './public/fonts/lexand-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './public/fonts/lexand-bold.woff2', 
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});