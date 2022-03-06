import * as NextImage from "next/image";
// import { ThemeProvider } from 'styled-components';
// import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../src/theme/theme'
import Fonts from '../src/theme/fonts'
// import { RouterContext } from "next/dist/next-server/lib/router-context";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withThemeProvider=(Story,context)=>{
  return (
    <>
      <Fonts />
      <Story {...context} />
    </>
  )
}
export const decorators = [withThemeProvider];
  
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    chakra: {
        theme,
    },
    controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/,
        },
    },
    layout: 'fullscreen',
    // nextRouter: {
    //   Provider: RouterContext.Provider,
    // },
  }
