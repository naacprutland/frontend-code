import { SimpleGrid, SimpleGridProps, useTheme } from '@chakra-ui/react'
import styled from 'styled-components'

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

function gCol(bpVal?: string): string {
  let classes = ''
  for (let i = 1; i <= columns; i++ ) {
    classes += `
      .gcol${bpVal ? `-${bpVal}` : ''}-${i} {
        grid-column: span ${i};
      }

      .gcol${bpVal ? `-${bpVal}` : ''}-${i}.center {
        grid-column: ${centerStartCol[i]} / span ${i};
      }
    `
  }
  return classes
}

interface BP {
  [key: string]: number;
}
function gColBP(breakpoints: BP): string {
  return bp.map(val => `
    @media screen and (min-width: ${breakpoints[val]})  {
      ${gCol(val)}
    }
  `).join('')
}

const GridContainer = styled(SimpleGrid)`
  @media screen and (min-width: ${({ breakpoints }) => breakpoints['sm']})  {
    ${gCol()}
  }

  ${({ breakpoints }) => gColBP(breakpoints)}
`

const GridLayout = (props: SimpleGridProps) => {
  const theme = useTheme();
  return (
    <GridContainer
      h="100%"
      w="100%"
      columns={[1, columns]}
      spacing={{ base: 4, md: 6, lg: 8 }}
      breakpoints={theme.breakpoints}
      {...props}>
      {props.children}
    </GridContainer>
)}

export default GridLayout