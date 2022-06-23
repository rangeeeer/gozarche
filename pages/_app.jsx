import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>gozarche</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
