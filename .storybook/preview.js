import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../src/theme'
import * as NextImage from 'next/image';
import { RouterContext } from "next/dist/next-server/lib/router-context";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})


const withThemeProvider=(Story,context)=>{
  return (
    <>
      <ColorModeScript />
      <ChakraProvider resetCSS theme={theme}>
        <Story {...context} />
      </ChakraProvider>
    </>
  )
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [withThemeProvider];
