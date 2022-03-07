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

const customViewports = {
  iPhone13mini: {
    name: 'iPhone 13 mini',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPadmini8 : {
    name: 'iPad mini 8.3',
    styles: {
      width: '744px',
      height: '1133px',
    },
  },
  macBookPro14 : {
    name: 'MacBook Pro 14',
    styles: {
      width: '1512px',
      height: '982px',
    },
  },
}
  
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
    viewport: { viewports: customViewports }
    // nextRouter: {
    //   Provider: RouterContext.Provider,
    // },
  }
