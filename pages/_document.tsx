import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

