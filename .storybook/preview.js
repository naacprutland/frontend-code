import * as NextImage from "next/image";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../src/theme'
// import { RouterContext } from "next/dist/next-server/lib/router-context";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
  
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
