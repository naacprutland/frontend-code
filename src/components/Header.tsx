import { Container } from "@chakra-ui/react"
import { Box, Text, Image,  HStack, useColorMode, } from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'
import Link from 'next/link'
import { MediaImage } from '../interface/media'

interface MenuItem {
  title: string;
  page : {
    path: string;
  }
  subitems: SubItem;
}

interface SubItem {
  title: string;
  page : {
    path: string;
  }
}

export interface HeaderProps {
  logo?: {
    src: MediaImage;
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
                {logo && <Image height="100%" src={logo.src.formats?.iconSmall?.url} 
                  alt={logo.alt} />
                }
              </Box>
            </Link>
          </Box>
          <HStack as="nav" spacing={4} h="100%" justifyContent="flex-end">
            <HStack as="ul" spacing={3} sx={{"listStyleType": "none"}}>
              {mega_menu.map((item, i) => (
                <Box as="li" key={item.title + i} margin="0">
                  <Link href={item?.page?.path} passHref>
                    <Text as="a" cursor="pointer" textTransform="capitalize">
                      {item.title}
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