import { Container } from "@chakra-ui/react"
import { Box, Text, HStack, useColorMode, } from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'
import Link from 'next/link'

interface MenuItem {
  label: string;
  path: string;
  external?: boolean;
  subitems: SubItem[];
}

interface SubItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
  },
  mega_menu?: MenuItem[],
  includeDarkMode?: boolean;
  fixed?: boolean;
  transparent?:boolean;
}

const Header = ({ logo, 
  mega_menu = [],
  includeDarkMode,
  fixed,
  transparent
}: HeaderProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box as="header" d="flex" alignItems="center" 
      top="0" position={fixed ? 'fixed' : 'static'}
      w="100%"
      bg={transparent ? 'none' : 
        fixed ? '#000000BF' : "black"}
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
              <Box as="a" h="100%" cursor="pointer" sx={{ img: {
                height: '100%',
                width: '100%'
              } }}>
                {logo && <img src={logo.src} alt={logo.alt} />}
              </Box>
            </Link>
          </Box>
          <HStack as="nav" spacing={4} h="100%" justifyContent="flex-end">
            <HStack as="ul" spacing={3} sx={{"listStyleType": "none"}}>
              {mega_menu.map((item, i) => (
                <Box as="li" key={item.label + i} margin="0">
                  <Link href={item?.path || ''} passHref>
                    <Text as="a" cursor="pointer"
                      fontWeight={600} 
                      textTransform="capitalize">
                      {item.label}
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