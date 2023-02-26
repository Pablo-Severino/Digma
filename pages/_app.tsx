import React from 'react'
import Head from 'next/head'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
