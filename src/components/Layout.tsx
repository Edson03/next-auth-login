import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

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
        
      <Flex w='100vw' h='100vh' position='relative'>
        <Navbar />

          {children}

        <Footer/>
      </Flex>
    </div>
  )
}