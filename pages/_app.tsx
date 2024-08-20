import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Rubik } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import { theme } from '../components/theme';
import { Fonts } from '../components/theme/font';
import '../styles/globals.css';
import './tw.css';
import { ModalService } from '../components/modal';


// Set font for Rubik
const rubik = Rubik({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <>
      <Head>
        <title>Serapio Labs</title>
        <meta name="description" content="Web application design & engineering. Come check out our current projects!" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="./volcano_mountain_icon_187744.ico" style={{ color: "white" }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        /* Pacifico Text */
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Pacifico&display=swap" rel="stylesheet"></link>
      </Head>
          {/* <Document
      href="https://fonts.googleapis.com/css2?family=Inconsolata"
      rel="stylesheet"
      /> */}

          <Script src='https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/build/three-min.js' />
          <Script src='https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/examples/js/SimplexNoise.js' />
          <Script src='https://jeromeetienne.github.io/threex.terrain/threex.terrain.js' />
          <style jsx global>
            {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
          </style>
          <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
          >
            <CacheProvider>
              <ChakraProvider theme={theme}>
                <Fonts />
                <Component {...pageProps} />
                <ModalService />
              </ChakraProvider>
            </CacheProvider>
          </SessionContextProvider>
        </>
        );
}

        export default MyApp;