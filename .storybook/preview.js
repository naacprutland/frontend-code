
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../src/theme'
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});


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

export const decorators = [withThemeProvider];

export const parameters = {
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (b[1].kind === 'Welcome') {
        return 1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
}