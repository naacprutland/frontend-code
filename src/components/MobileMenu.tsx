import { useRef, useEffect, useState } from "react";
import { 
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link as ChakraLink,
    useBreakpointValue
} from '@chakra-ui/react'
import NextLink from "next/link"
import { MenuItem, SubItem } from './Header'

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

interface NavLinkProps {
    item: MenuItem | SubItem;
}

const NavLink = ({ item }: NavLinkProps) => (
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
            justifyContent="space-between">
            { item.label }
        </ChakraLink>
    </NextLink>
)

const MobileMenu = ({
    ctas=[],
    megaMenu=[],
    onClose,
    isOpen }: MobileMenuProps) => {
    const viewSize = useBreakpointValue({ base: 'xl', sm: 'md' })
    const firstField = useRef(null);
    const [navLinks, setNavLinks] = useState<MenuItem[] | SubItem[]>([])
 
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
                    <Accordion as="ul"
                        allowMultiple
                        borderTopWidth='1px'
                        listStyleType='none'>
                        {navLinks.map((item: MenuItem | SubItem, i: number) => (
                            <Box key={item.label + i} as="li"
                                m="0"
                                borderBottomWidth='1px'>
                                {!(item?.subitems && item?.subitems?.length) ? (
                                    <NavLink item={item}/>
                                ): (<AccordionItem border="none">
                                        <AccordionButton fontSize="xl"
                                            _expanded={{ color: 'secondary6.500' }}
                                            textTransform={'capitalize'}
                                            fontWeight="600">
                                            <Box flex='1' textAlign='left'>
                                                { item.label }
                                            </Box>
                                            <AccordionIcon color={'secondary6.500'} />
                                        </AccordionButton>
                                        
                                        <AccordionPanel as='ul' py={0}>
                                            {(item as MenuItem).subitems.map(
                                                (subItem: SubItem, i: number) => (
                                                    <NavLink key={subItem.label + i} item={subItem}/>))}
                                        </AccordionPanel>
                                    </AccordionItem>)
                                }
                                
                            </Box>
                        ))}
                    </Accordion>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    )
}

export default MobileMenu