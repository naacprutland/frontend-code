import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'

const GridLayout = (props: SimpleGridProps) => (
  <SimpleGrid
    h="100%"
    w="100%"
    {...props}
    spacing={{ base: 4, md: 6, lg: 8 }}
    >
    {props.children}
  </SimpleGrid>
)

export default GridLayout