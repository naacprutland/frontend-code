import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

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
  base: baseTheme.space['4'],
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
  styles: {
    global: {
      ".grid": grid,
    }
  },
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