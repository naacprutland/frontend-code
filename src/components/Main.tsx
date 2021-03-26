import { Stack, StackProps } from '@chakra-ui/react'

const Main = (props: StackProps) => (
  <Stack
    as="main"
    alignItems="center"
    spacing="3"
    width="100%"
    minH="80vh"
    {...props}
  />
)

export default Main