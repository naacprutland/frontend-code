import { Stack, StackProps } from '@chakra-ui/react'

const Main = (props: StackProps) => (
  <Stack
    as="main"
    bg="white"
    spacing="1.5rem"
    width="100%"
    minH="80vh"
    maxWidth="48rem"
    {...props}
  />
)

export default Main