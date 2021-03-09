import { Container } from "@chakra-ui/react"
import { VStack, HStack } from "@chakra-ui/react"
import { Flex, Box, Text, Image } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box as="header">
      <VStack
        spacing={4}
        align="stretch"
      >
      </VStack>
      <Box bg="blue.900" color="white">
        <Container maxW="container.xl" h="50px">
          <Flex color="white" h="100%">
            <Box d="flex" alignItems="center" w="100px" h="100%">
              <Image src="/vercel.svg" 
                alt="Segun Adebayo" w="80px" />
            </Box>
            <Box flex="1" as="nav" h="100%">
              <HStack spacing={4} as="ul" h="100%" justifyContent="flex-end"
                sx={{"list-style-type": "none"}}>
                <li><Text>About</Text></li>
                <li><Text>blog</Text></li>
              </HStack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
   )
 }

 export default Header