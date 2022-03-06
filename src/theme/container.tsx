import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Container: ComponentStyleConfig = {
  // Two sizes: sm and md
  sizes: {
    sm: {
        maxW: '1452px',
        w: '100%',
        px: 5, // <-- px is short for paddingLeft and paddingRight
    },
    md: {
        maxW: '1452px',
        w: '100%',
        px: 8, // <-- these values are tokens from the design system
    },
    lg: {
        maxW: '1452px',
        w: '100%',
        px: 10, // <-- these values are tokens from the design system
    }
  },

  // The default size and variant values
  defaultProps: {
    size: 'sm',
    // variant: 'outline',
  },
}