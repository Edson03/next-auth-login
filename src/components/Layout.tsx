import Head from 'next/head'
import Navbar from './navbar/Navbar'

export default function Layout({
  children
}: any) {
  return (
    <div>
      <Head>
        <title>NextAuth Login Example</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="pt-br"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>

      {children}

      <footer>
        shared footer 
      </footer>
    </div>
  )
}