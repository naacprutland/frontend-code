import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { breakpoints } from './breakpoints'
import fontSizes from './fontSizes'
import { Link, Heading } from './components'
import colors from './colors'
import grid from './girdStyling'


const theme = extendTheme({
  breakpoints,
  fontSizes,
  colors,
  fonts: {
    heading: 'Gothic CG No3, sans-serif',
    body: 'Verlag, sans-serif',
  },
  layerStyles: {
    boxShadowLight: {
      boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 25%)"
    },
    boxShadowDark: {
      boxShadow: "0px 4px 4px 0px rgb(255 255 255 / 25%)"
    }
  },
  styles: {
    global: {
      ".grid": grid,
      ".content": {
        a: {
          "textDecoration": "underline"
        }
      }
    }
  },
  space: {
    ...baseTheme.space,
    offset: {
      sm: '2rem',
      md: '3rem',
      lg: '5rem'
    },
  },
  sizes: {
    ...baseTheme.sizes,
    container: {
      sm: '100%',
      md: '100%',
      lg: '100%',
      xl: '1452px',
    },
  },
  components: {
    Link,
    Heading
  },
})

export default theme