import { ChakraProvider} from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider session={pageProps.session} >
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
export default MyApp
