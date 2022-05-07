import { useState } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../theme/fonts'
import theme from '../theme/theme'
import Layout from './Layout'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  }))
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <DefaultSeo {...pageProps?.config?.defaultSeo} />
          <Layout headerProps={pageProps?.config?.headerProps} 
            footerProps={pageProps?.config?.footerProps}>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
)}

export default App