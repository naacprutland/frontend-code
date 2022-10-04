import { useEffect, useState, useRef, useCallback, ComponentType } from "react"
import dynamic from 'next/dynamic'
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
import { MdMenu, MdSearch } from "react-icons/md"
import Container from './Container'
import { MobileMenuProps } from './MobileMenu'
import { SearchDrawerProps } from "./SearchDrawer"
import { CTA } from '../interface/general'
import NextLink from "next/link"
import MenuLink from './MenuLink'
import Banner, { BannerProps } from './Banner'
import SkipToMainContent from './SkipToMainContent'
import Image from 'next/image'

const DynamicMobileMenu: ComponentType<MobileMenuProps> = dynamic(() => import('./MobileMenu'))
const DynamicSearch: ComponentType<SearchDrawerProps> = dynamic(() => import('./SearchDrawer'))

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
  transparent?: boolean;
  banners?: BannerProps[];
}

const Header = ({
  logo,
  ctas = [],
  mega_menu = [],
  fixed,
  transparent,
  banners = []
}: HeaderProps) => {
  const [isOpen, setShowMenu] = useState(false)
  const [bannerList, setBannerList] = useState([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { colorMode } = useColorMode()
  const onOpen = useCallback(() => { setShowMenu(true) }, [])
  const onClose = useCallback(() => { setShowMenu(false) }, [])
  const onSearchOpen = useCallback(() => { setIsSearchOpen(true) }, [])
  const onSearchClose = useCallback(() => { setIsSearchOpen(false) }, [])
  const variant = useBreakpointValue({ md: "md" })
  const headerRef = useRef<HTMLDivElement>(null)
  const [keepMenu, setKeepMenu] = useState<boolean>(false)
  const [keepSearch, setKeepSearch] = useState<boolean>(false)
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
    if (!keepMenu && isOpen) {
      setKeepMenu(true);
    }
  }, [isOpen])

  useEffect(() => {
    if (!keepSearch && isSearchOpen) {
      setKeepSearch(true);
    }
  }, [isSearchOpen])

  useEffect(() => {
    if (variant === "md") onClose();
  }, [variant])

  useEffect(() => {
    if (!bannerList.length && banners.length > 0) {
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
      zIndex="1"
      w="100%"
      bg={transparent ? "none" :
        fixed ? '#000000BF' : "black"}
    >
      <SkipToMainContent href="#mainContent" />
      {bannerList?.map((data, i) => (
        <Collapse key={data.richText.trim() + i} in={data.show} animateOpacity >
          <Banner  {...data} onClose={() => onBannerClose(i)} />
        </Collapse>
      ))}
      <Container
        display="flex"
        alignItems="center"
        flexDir="row"
        justifyContent="space-between"
        py={["3", "0"]}
        color={transparent && colorMode === 'light' ? "black" : "white"}
        h={["3.25rem", "4.75rem"]}>
        <NextLink href="/" passHref>
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
        </NextLink>

        <VStack as="nav"
          spacing={2.5}
          h="100%"
          alignItems="flex-end"
          justifyContent="center">
          <HStack spacing={{ base: "4", md: "6" }} display="flex" >
            {ctas?.map(((cta, i) => (
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
            )))}
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
            {mega_menu?.map((item, i) => {
              return !item?.subitems?.length ? (
                <Box as="li" key={item.label + i} margin="0">
                  <NextLink href={item?.path || ''} passHref>
                    <ChakraLink cursor="pointer"
                      isExternal={item.external}
                      fontWeight="semibold"
                      textTransform="capitalize">
                      {item.label}
                    </ChakraLink>
                  </NextLink>
                </Box>) : <MenuLink key={i} {...item} />
            }
            )}
          </HStack>
        </VStack>
        {(keepMenu || isOpen) && <DynamicMobileMenu
          headerRef={headerRef.current}
          ctas={ctas}
          megaMenu={mega_menu}
          isOpen={isOpen}
          onClose={onClose} />}
        {(keepSearch || isSearchOpen) && <DynamicSearch
          isOpen={isSearchOpen} onClose={onSearchClose} />}
      </Container>
    </Flex>
  )
}

export default Header