import Head from 'next/head';
import '../styles/globals.css'; 
import './tw.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { Rubik } from 'next/font/google';
import { theme } from '../components/theme';
import { Fonts } from '../components/theme/font';
import Script from 'next/script';
import Document from 'next/document';


// Set font for Rubik
const rubik = Rubik({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
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
      </Head>
      {/* <Document
      href="https://fonts.googleapis.com/css2?family=Inconsolata"
      rel="stylesheet"
      /> */}
      
      <Script src='https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/build/three-min.js'/>
      <Script src='https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/examples/js/SimplexNoise.js'/>
      <Script src='https://jeromeetienne.github.io/threex.terrain/threex.terrain.js'/>
      <style jsx global>
        {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;