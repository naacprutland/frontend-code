import { useEffect, useState, useRef, useCallback } from "react"
import { 
  Box,
  Button,
  Flex,
  VStack,
  HStack,
  useColorMode,
  IconButton,
  useBreakpointValue,
  Link as ChakraLink,
  Collapse
} from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'
import Link from 'next/link'
import { MdMenu, MdSearch } from "react-icons/md"
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchDrawer from "./SearchDrawer"
import { CTA } from '../interface/general'
import NextLink from "next/link"
import MenuLink from './MenuLink'
import { v4 as uuidv4 } from 'uuid';
import Banner, { BannerProps } from './Banner'
import SkipToMainContent from './SkipToMainContent'
import Image from 'next/image'

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
  ctas?: CTA[];
  mega_menu?: MenuItem[];
  includeDarkMode?: boolean;
  fixed?: boolean;
  transparent?:boolean;
  banners?: BannerProps[]; 
}

const Header = ({ 
  logo,
  ctas=[],
  mega_menu = [],
  includeDarkMode,
  fixed,
  transparent,
  banners
}: HeaderProps) => {
  const [ isOpen, setShowMenu ] = useState(false)
  const [ bannerList, setBannerList ] = useState([])
  const [ isSearchOpen, setIsSearchOpen ] = useState(false)
  const { colorMode } = useColorMode()
  const onOpen = useCallback(() => { setShowMenu(true) }, [])
  const onClose = useCallback(() => { setShowMenu(false) }, [])
  const onSearchOpen = useCallback(() => { setIsSearchOpen(true) }, [])
  const onSearchClose = useCallback(() => { setIsSearchOpen(false) }, [])
  const variant = useBreakpointValue({ md: "md" })
  const headerRef = useRef<HTMLDivElement>(null)
  const onBannerClose = (index) => {
    setBannerList(prev => prev.map((val, i) => {
      const show = i === index ? false : val.show
      return {
        ...val,
        show 
      }
    }))
  }

  useEffect(() => {
    if (variant === "md") onClose();
  }, [variant])

  useEffect(() => {
    if (!bannerList.length) {
      setBannerList(banners?.map(data => {
        return {
          show: true,
          ...data
        }
      }))
    } 
  }, [banners])

  return (
    <Flex as="header"
      ref={headerRef}
      direction="column"
      alignItems="center" 
      top="0"
      position={fixed ? "absolute" : "static"}
      w="100%"
      sx={{
        "&>*": {
          width: "100%"
        }
      }}
      bg={transparent ? "none" : 
        fixed ? '#000000BF' : "black"}
       >
      <SkipToMainContent href="#mainContent"/>
      {bannerList?.map(( data, i ) => (
        <Collapse key={uuidv4()} in={data.show} animateOpacity >
          <Banner  {...data} onClose={() => onBannerClose(i)}/>
        </Collapse>
      ))}
      <Container
        d="flex"
        alignItems="center"
        flexDir="row"
        justifyContent="space-between" 
        py={["3", "0"]}
        color={transparent && colorMode === 'light' ? "black" : "white"}
        h={["3.25rem", "4.75rem"]}>  
          <Link href="/" passHref>
            <Box as="a" h="100%" maxH="2.875rem" w={["78px", "132px"]} cursor="pointer" >
              {logo && <Image
                  className="largeLogo"
                  src={logo.src}
                  alt={logo.alt}
                  layout="intrinsic"
                  sizes="100%"
                  width="132px"
                  height="46px"
                  priority
                />}
            </Box>
          </Link>
        
          <VStack as="nav"
            spacing={2.5}
            h="100%"
            alignItems="flex-end"
            justifyContent="center">
            <HStack spacing={{ base: "4", md: "6" }} display="flex" >
              {ctas?.map((cta) => (
                <NextLink key={uuidv4()}
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
                onClick={onSearchOpen}
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
              {mega_menu?.map((item) => {
                return !item?.subitems?.length ? (
                  <Box as="li" key={uuidv4()} margin="0">
                    <Link href={item?.path || ''} passHref>
                      <ChakraLink cursor="pointer"
                        isExternal={item.external}
                        fontWeight="semibold" 
                        textTransform="capitalize">
                        {item.label}
                      </ChakraLink>
                    </Link>
                  </Box>) : <MenuLink key={uuidv4()} {...item}/> }
              )}
              {includeDarkMode && <DarkModeSwitch />}
            </HStack>
          </VStack>
          <MobileMenu
            headerRef={headerRef.current}
            ctas={ctas}
            megaMenu={mega_menu}
            isOpen={isOpen}
            onClose={onClose} />
          <SearchDrawer isOpen={isSearchOpen} onClose={onSearchClose} />
      </Container>
    </Flex>
   )
 }

 export default Header