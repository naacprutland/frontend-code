import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'


const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={theme}>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App