import '@serapiolabs/design-system/dist/tokens.css';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Lora } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import './tw.css';

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

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
          @font-face {
            font-family: 'Monaspace Neon';
            font-style: normal;
            font-weight: 200 800;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/githubnext/monaspace@main/fonts/Web%20Fonts/Variable%20Web%20Fonts/Monaspace%20Neon/Monaspace%20Neon%20Var.woff2') format('woff2-variations');
          }
          :root {
            --font-lora: ${lora.style.fontFamily};
          }
          body {
            font-family: 'Monaspace Neon', ui-monospace, monospace;
          }
        `}
      </style>
      
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <div className={`${lora.variable}`}>
          <Component {...pageProps} />
        </div>
      </SessionContextProvider>
    </>
  );
}

export default MyApp;