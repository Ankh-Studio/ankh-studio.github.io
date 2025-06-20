import type { AppProps } from 'next/app';  
import { inter, lexand, radio_canada } from '@/fonts'; 
import '@/styles/globals.scss'; 

export default function MyApp({ Component, pageProps }: AppProps) {  
  return (  
    <main className={`${inter.variable} ${lexand.variable} ${radio_canada.variable}`}>  
      <Component {...pageProps} />  
    </main>  
  );  
}  
