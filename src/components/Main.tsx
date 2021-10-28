import { Stack, StackProps } from '@chakra-ui/react'

const Main = (props: StackProps) => (
  <Stack
    as="main"
    alignItems="center"
    spacing="16"
    marginBottom="16"
    width="100%"
    minH="90vh"
    {...props}
  />
)

export default Main