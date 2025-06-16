import type { AppProps } from 'next/app';  
import { inter, lexend, radio_canada } from '../lib/fonts'; 
import '@/styles/globals.css'; 

export default function MyApp({ Component, pageProps }: AppProps) {  
  return (  
    <main className={`${inter.variable} ${lexend.variable} ${radio_canada.variable}`}>  
      <Component {...pageProps} />  
    </main>  
  );  
}  


export default MyApp;
