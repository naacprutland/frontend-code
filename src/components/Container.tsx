import { Box, BoxProps } from '@chakra-ui/react'

const Container = (props: BoxProps) => {
  return (
    <Box
      margin={'auto'}
      maxW='1452px'
      w={'100%'}
      px={[5,8,10]}
      {...props}
    />
  )
}

export default Container