import { Container } from "@chakra-ui/react"
import { Box, Text, Image,  HStack, useColorMode, } from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'
import Link from 'next/link'

export interface HeaderProps {
  logo: {
    src: string;
    alt: string;
  },
  pageLinks: {
    label: string;
    path: string;
  }[],
  includeDarkMode?: boolean;
  fixed?: boolean;
  transparent?:boolean;
}

const Header = ({ logo, 
  pageLinks = [],
  includeDarkMode,
  fixed,
  transparent
}: HeaderProps) => {
  const { colorMode } = useColorMode()
  return (
    <Box as="header" d="flex" alignItems="center" 
      top="0" position={fixed ? 'fixed' : 'static'}
      w="100%"
      bg={transparent ? 'none' : "blue.900"}
       h="3.5rem" >
      <Container 
        flexDir="row"
        justifyContent="space-between" 
        paddingTop="2"
        paddingBottom="2"
        centerContent
        color={transparent && colorMode === 'light' ? "black" : "white"}
        maxW="container.xl" h="100%">  
          <Box d="flex" alignItems="center" w="100px" h="100%">
            <Link href="/" passHref>
              <Box as="a" h="100%" cursor="pointer">
                <Image height="100%" src={logo.src} 
                  alt={logo.alt} />
              </Box>
            </Link>
          </Box>
          <HStack as="nav" spacing={4} h="100%" justifyContent="flex-end">
            <HStack as="ul" spacing={3} sx={{"list-style-type": "none"}}>
              {pageLinks.map((links) => (
                <Box as="li" key={links.path} margin="0">
                  <Link href={links.path} passHref>
                    <Text as="a" cursor="pointer" textTransform="capitalize">
                      {links.label}
                    </Text>
                  </Link>
                </Box>
              ))}
            </HStack>
            {includeDarkMode && <DarkModeSwitch />}
          </HStack>
      </Container>
    </Box>
   )
 }

 export default Header