import React, { ReactNode } from 'react';
import Head from 'next/head';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ankh Studio</title>
        <meta name="description" content="Creating innovative digital experiences" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ankh Studio" />
        <meta property="og:description" content="Creating innovative digital experiences" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ankh-studio.github.io/" />
      </Head>
      {children}
    </>
  );
};

export default DefaultLayout;
