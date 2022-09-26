import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createDOMRenderer, RendererProvider } from "@griffel/react";

export default function App(props: AppProps) {
  const { Component, pageProps, renderer } = props as any;

  return (
    <>
      <Head>
        <title>Pokemon Battle Simulator</title>
      </Head>
      <RendererProvider renderer={renderer || createDOMRenderer()}>
        <Component {...pageProps} />
      </RendererProvider>
    </>
  );
}
