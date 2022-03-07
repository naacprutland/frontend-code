import { useRef, useEffect, useState, MouseEvent } from "react";
import { 
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Stack,
    Icon,
    Link as ChakraLink,
    useBreakpointValue
} from '@chakra-ui/react'
import NextLink from "next/link"
import { MenuItem, SubItem } from './Header'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Slide } from '@chakra-ui/react'

interface CTA {
    label: string;
    path: string;
    external: boolean;
    style: 'outline' | 'solid';
    color: string;
    textColor: string;
}

export interface MobileMenuProps {
    ctas?: CTA[];
    megaMenu: MenuItem[];
    isOpen: boolean;
    onClose: () => null;
}

const MobileMenu = ({
    ctas=[],
    megaMenu=[],
    onClose,
    isOpen }: MobileMenuProps) => {
    const viewSize = useBreakpointValue({ base: 'full', sm: 'md' })
    const firstField = useRef(null);
    const [navLinks, setNavLinks] = useState<MenuItem[] | SubItem[]>([])
    const [prvLinks, setPrvLinks] = useState(null)
    const onNavLink = (
        e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
        subItems: MenuItem[] | SubItem[],
        label?: string): void => {
        if (!subItems?.length) return;
        e.preventDefault();
        setNavLinks(subItems);
        setPrvLinks(label ? {
            label,
            prevItems: megaMenu
        } : null);
    }

    useEffect(() => {
        setNavLinks(megaMenu);
    }, []);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            size={viewSize}
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent >
                <DrawerCloseButton />
                <DrawerHeader display={'flex'}
                    px={[5,8]}
                    paddingTop={"12"}>
                    {ctas.map((cta, i) => (
                        <NextLink key={cta.label + i}
                            href={cta.path} 
                            passHref>
                            <Button as="a" 
                                mr={i !== (ctas.length - 1) ? '6': '0'}
                                variant={cta.style}
                                color={cta.style !== 'outline' ? cta.textColor : null}
                                colorScheme={cta.color}
                                isFullWidth={true}
                                size='lg'>
                                {cta.label}
                            </Button>
                        </NextLink>
                    ))}
                </DrawerHeader>

                <DrawerBody as="nav" px={[5,8]} paddingTop='0'>
                    { prvLinks && (
                        <Button
                            color="secondary6.500"
                            variant={'ghost'}
                            leftIcon={<Icon 
                                color={'secondary6.500'} 
                                as={FaChevronLeft} />}
                            isFullWidth={true}
                            justifyContent="flex-start"
                            px="4"
                            py="2"
                            fontSize="xl"
                            textTransform={'capitalize'}
                            fontWeight="600"
                            cursor="pointer"
                            onClick={(e) => onNavLink(e, prvLinks.prevItems)}
                           >
                            { prvLinks.label }
                        </Button>)
                    }
                    <Stack as="ul"
                        spacing={0}
                        borderTopWidth='1px'
                        position={'relative'}
                        listStyleType='none'>
                        {navLinks.map((item, i) => (
                            <Box key={item.label + i} as="li"
                                m="0"
                                borderBottomWidth='1px'>
                                <NextLink href={item.path || '#'} passHref>
                                    <ChakraLink
                                        isExternal={item.external}
                                        px="4"
                                        py="2"
                                        fontSize="xl"
                                        textTransform={'capitalize'}
                                        fontWeight="600"
                                        alignItems='center'
                                        display={'flex'}
                                        cursor="pointer"
                                        onClick={(e) => onNavLink(e, item.subitems, item.label)}
                                        justifyContent="space-between">
                                        { item.label }
                                        { item.subitems && (
                                            <Icon color={'secondary6.500'} as={FaChevronRight} />) }
                                    </ChakraLink>
                                </NextLink>
                            </Box>
                        ))}
                    </Stack>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    )
}

export default MobileMenu