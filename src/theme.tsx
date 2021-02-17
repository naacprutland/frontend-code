import { extendTheme } from '@chakra-ui/react'
// import { createBreakpoints } from '@chakra-ui/theme-tools'

// const fonts = { mono: `'Menlo', monospace` }

// const breakpoints = createBreakpoints({
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
//   "2xl": '100%'
// })

// const Button: ThemeComponents = {
//   baseStyle: {
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     _hover: {
//       textDecoration: "none",
//     }
//   }
// }

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        }
      }
    }
  },
})

export default theme