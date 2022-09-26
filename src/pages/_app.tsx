import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App(props: AppProps) {
  const { Component, pageProps } = props as any;

  return (
    <>
      <Head>
        <title>Pokemon Battle Simulator</title>
      </Head>
      <Component {...pageProps} />
    </>

    // <RendererProvider renderer={pageProps.renderer || createDOMRenderer()}>
    //   <SSRProvider>
    //     <AppProvider value={{ setTheme, findTheme }}>
    //       {isMounted && (
    //         <Provider theme={theme}>
    //           <AppContainer>
    //             <Component {...pageProps} />
    //           </AppContainer>
    //         </Provider>
    //       )}
    //     </AppProvider>
    //   </SSRProvider>
    // </RendererProvider>
  );
}
