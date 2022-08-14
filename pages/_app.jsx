import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>gozarche</title>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
