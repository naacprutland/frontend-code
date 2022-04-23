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
    },
    styleNone : {
      bg: 'none',
      color: 'black'
    },
    styleWhite : {
      bg: 'white',
      color: 'black'
    },
    styleDark : {
      bg: 'secondary7.500',
      color: 'white'
    },
    styleBlue : {
      bg: 'prime1.500',
      color: 'white'
    },
    styleYellow : {
      bg: 'prime2.500',
      color: 'prime1.500'
    }
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#EFEFEF"
      },
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