import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { breakpoints } from './breakpoints'
import fontSizes from './fontSizes'

const columns = 12
const centerStartCol = {
  2: 6,
  4: 5,
  6: 4,
  8: 3,
  10: 2,
  12: 1,
}
const bp = [ 'sm', 'md', 'lg', 'xl', '2xl'];
const gap = {
  base: baseTheme.space['6'],
  md: baseTheme.space['6'],
  lg: baseTheme.space['8']
}

function gCol(bpVal?: string) {
  const classes = {}

  for (let i = 1; i <= columns; i++ ) {

    classes[`.gcol${bpVal ? `-${bpVal}` : ''}-${i}`] = {
        gridColumn: "span " + i
    }

    if (i % 2 === 0) {
      classes[`.gcol${bpVal ? `-${bpVal}` : ''}-${i}.center`] = {
        gridColumn: `${centerStartCol[i]} / span ${i}`
      }
    }
  }
  return classes
}

function gColBP(breakpoints) {
  return bp.reduce((acc, cur) => {
    acc[`@media screen and (min-width: ${breakpoints[cur]})`] = gCol(cur)
    return acc
  }, {})
}

let grid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: gap.base
}

grid = {
  ...grid,
  ...gColBP(baseTheme.breakpoints)
}

grid[`@media screen and (min-width: ${baseTheme.breakpoints['sm']})`] = {
  "gridTemplateColumns": `repeat(${columns}, 1fr)`,
  ...grid[`@media screen and (min-width: ${baseTheme.breakpoints['sm']})`],
  ...gCol()
}

grid[`@media screen and (min-width: ${baseTheme.breakpoints['md']})`] = {
  gap: gap.md,
  ...grid[`@media screen and (min-width: ${baseTheme.breakpoints['md']})`]
}

grid[`@media screen and (min-width: ${baseTheme.breakpoints['lg']})`] = {
  gap: gap.lg,
  ...grid[`@media screen and (min-width: ${baseTheme.breakpoints['lg']})`]
}

const theme = extendTheme({
  breakpoints,
  fontSizes,
  fonts: {
    heading: 'Gothic CG No3, sans-serif',
    body: 'Verlag, sans-serif',
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
  colors: {
    ...baseTheme.colors,
    prime1: {
      50: '#4797FF',
      100: '#1F80FF',
      200: '#006AF5',
      300: '#0058CC',
      400: '#0047A3',
      500: '#002F6C',
      600: '#002C66',
      700: '#002352',
      800: '#001B3D',
      900: '#001229'
    },
    prime2: {
      50: '#FEF6D7',
      100: '#FDEEB0',
      200: '#FBE688',
      300: '#FADE61',
      400: '#F9D639', 
      500: '#F5CB08',
      600: '#EDC307',
      700: '#DAB307',
      800: '#C6A306',
      900: '#B29206'
    },
    secondary1: {
      500: '#ED8B00'
    },
    secondary2: {
      500: '#F3BA16'
    },
    secondary3: {
      500: '#90A2BF'
    },
    secondary4: {
      500: '#0081C8'
    },
    secondary5: {
      500: '#51BAE8'
    },
    secondary6: {
      500: '#845FA1'
    },
    secondary7: {
      500: '#282828'
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
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        }
      }
    },
  },
})

export default theme