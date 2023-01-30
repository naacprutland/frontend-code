import { useState } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import Fonts from '../theme/fonts'
import theme from '../theme/theme'
import Layout from './Layout'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { PageProps } from '../interface/page'
import { SiteConfig } from '../interface/siteConfig'

const manager = createLocalStorageManager('naacp-key')

export interface MainApp extends AppProps {
  pageProps: PageProps
}


const App = ({ Component, pageProps }: MainApp) => {
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
    <ChakraProvider colorModeManager={manager} resetCSS theme={theme}>
      <Fonts />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={{}}>
          <DefaultSeo {...(pageProps?.config as SiteConfig)?.defaultSeo} />
          <Layout headerProps={(pageProps?.config as SiteConfig)?.headerProps}
            footerProps={(pageProps?.config as SiteConfig)?.footerProps}>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
