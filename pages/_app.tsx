import { ChakraProvider } from '@chakra-ui/react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useState } from 'react';
import theme from '../components/theme';
import '../styles/globals.css';
import './tw.css';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  const router = useRouter();
  
  // Use Chakra only for sub-apps (behavior-buzz, etc.) for backwards compatibility
  const needsChakra = router.pathname.includes('/app/');

  return (
    <>
      <Head>
        <title>Nick White - Software Engineer & Builder</title>
        <meta name="description" content="Software engineer building products that matter" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="./mountain.ico" />
      </Head>

      <Script src='https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/build/three-min.js' />
      <Script src='https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/examples/js/SimplexNoise.js' />
      <Script src='https://jeromeetienne.github.io/threex.terrain/threex.terrain.js' />
      
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
          body {
            font-family: var(--font-inter), sans-serif;
          }
        `}
      </style>
      
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        {needsChakra ? (
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        ) : (
          <div className={inter.className}>
            <Component {...pageProps} />
          </div>
        )}
      </SessionContextProvider>
    </>
  );
}

export default MyApp;
