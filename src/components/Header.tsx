import { useEffect, useState } from "react"
import { 
  Box,
  Button,
  Text,
  VStack,
  HStack,
  useColorMode,
  IconButton,
  useBreakpointValue,
  Link as ChakraLink
} from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'
import Link from 'next/link'
import { MdMenu, MdSearch } from "react-icons/md"
import Container from './Container'
import MobileMenu from './MobileMenu'
import { CTA } from '../interface/general'
import NextLink from "next/link"
import MenuLink from './MenuLink'


export interface MenuItem {
  label: string;
  path: string;
  external?: boolean;
  subitems?: SubItem[];
}

export interface SubItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
  },
  ctas: CTA[];
  mega_menu?: MenuItem[],
  includeDarkMode?: boolean;
  fixed?: boolean;
  transparent?:boolean;
}

const Header = ({ 
  logo,
  ctas=[],
  mega_menu = [],
  includeDarkMode,
  fixed,
  transparent
}: HeaderProps) => {
  const [ isOpen, setShowMenu ] = useState(false)
  const { colorMode } = useColorMode()
  const onOpen = () => { setShowMenu(true) }
  const onClose = () => { setShowMenu(false) }
  const variant = useBreakpointValue({ md: "md" })

  useEffect(() => {
    if (variant === "md") onClose();
  }, [variant])

  return (
    <Box as="header" 
      d="flex"
      alignItems="center" 
      top="0"
      position={fixed ? "fixed" : "static"}
      w="100%"
      bg={transparent ? "none" : 
        fixed ? '#000000BF' : "black"}
      h={["3.25rem", "4.75rem"]} >
      <Container
        d="flex"
        alignItems="center"
        flexDir="row"
        justifyContent="space-between" 
        py={["3", "0"]}
        color={transparent && colorMode === 'light' ? "black" : "white"}
        h="100%">  
          <Link href="/" passHref>
            <Box as="a" h="100%" maxH="2.875rem" cursor="pointer" sx={{ 
              img: {
                height: "100%"
              }}}>
              {logo && <img src={logo.src} alt={logo.alt} />}
            </Box>
          </Link>
        
          <VStack as="nav"
            spacing={2.5}
            h="100%"
            alignItems="flex-end"
            justifyContent="center">
            <HStack spacing={{ base: "4", md: "6" }} display="flex" >
              {ctas.map((cta, i) => (
                <NextLink key={cta.label + i}
                    href={cta.path} 
                    passHref>
                    <Button as="a"
                      display={{ base: "none", sm: "flex" }}
                      h="7"
                      px="5"
                      variant={cta.style}
                      color={cta.style !== "outline" ? cta.textColor : null}
                      colorScheme={cta.color}
                      size="sm">
                      {cta.label}
                    </Button>
                </NextLink>
              ))}
              <IconButton
                variant="outline"
                h="7"
                minW="2"
                w="7"
                borderRadius="50%"
                fontSize="md"
                colorScheme="white"
                aria-label="search"
                icon={<MdSearch />}
              />
              <IconButton
                onClick={onOpen}
                display={{ base: "flex", md: "none" }}
                variant="outline"
                h="7"
                minW="2"
                w="7"
                borderRadius="50%"
                fontSize="md"
                colorScheme="white"
                aria-label="menu"
                icon={<MdMenu />}
              />
            </HStack>
            <HStack as="ul"
              display={{ base: "none", md: "flex" }}
              spacing={6}
              sx={{ "listStyleType": "none" }}>
              {mega_menu.map((item, i) => {
                return !item?.subitems?.length ? (
                  <Box as="li" key={item.label + i} margin="0">
                    <Link href={item?.path || ''} passHref>
                      <ChakraLink cursor="pointer"
                        isExternal={item.external}
                        fontWeight="semibold" 
                        textTransform="capitalize">
                        {item.label}
                      </ChakraLink>
                    </Link>
                  </Box>) : <MenuLink {...item}/> }
              )}
              {includeDarkMode && <DarkModeSwitch />}
            </HStack>
          </VStack>
          <MobileMenu
            ctas={ctas}
            megaMenu={mega_menu}
            isOpen={isOpen}
            onClose={onClose} />
      </Container>
    </Box>
   )
 }

 export default Header