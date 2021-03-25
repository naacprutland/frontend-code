import { Container } from "@chakra-ui/react"
import { Flex, Box, Text, Image,  HStack } from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'

const Header = () => {
  return (
    <Box as="header" d="flex" alignItems="center" bg="blue.900" color="white" h="50px" >
      <Container  maxW="container.xl">
        <Flex color="white" h="100%" justifyContent="space-between">
          <Box d="flex" alignItems="center" w="100px" h="100%">
            <Image src="/vercel.svg" 
              alt="Segun Adebayo" w="80px" />
          </Box>
          <HStack as="nav" spacing={4} h="100%" justifyContent="flex-end">
            <HStack as="ul" spacing={3} sx={{"list-style-type": "none"}}>
              <li> <Text>About</Text></li>
              <li><Text>blog</Text></li>
            </HStack>
            <DarkModeSwitch />
          </HStack>
        </Flex>
      </Container>
    </Box>
   )
 }

 export default Header