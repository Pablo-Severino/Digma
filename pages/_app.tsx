import { useState } from 'react'
import React from 'react'
import Head from 'next/head'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

function App({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session,
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon" />
      </Head>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <Component {...pageProps} />
      </SessionContextProvider>
    </React.Fragment>
  )
}

export default App