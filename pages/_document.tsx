import { Html, Head, Main, NextScript } from 'next/document';
import {
  lexand,
  radio_canada,
  inter,
} from "@/fonts";

export default function Document() {
  return (
    <Html 
      lang="en"
      content={"width=device-width, initial-scale=1.0"}
      className={inter.className}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ankh Studio - Breathing Life into Software" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
