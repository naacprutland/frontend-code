import { useRef } from "react";
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
    Flex,
    IconButton,
    Link as ChakraLink,
} from '@chakra-ui/react'
import NextLink from "next/link"
import { MenuItem, SubItem } from './Header'
import { CTA } from '../interface/general'
import { MdClose } from "react-icons/md"


export interface MobileMenuProps {
    ctas?: CTA[];
    megaMenu: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
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
    const firstField = useRef(null);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            size={'sm'}
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent bg="none">
                <IconButton
                    position='absolute'
                    background="black"
                    height={'28px'}
                    color='white'
                    top='12px'
                    right={['20px', '32px']}
                    onClick={onClose}
                    variant='outline'
                    h={'100%'}
                    minW='2'
                    w='7'
                    borderRadius='50%'
                    fontSize={'16px'}
                    colorScheme='white'
                    aria-label='menu'
                    icon={<MdClose />} />
                <DrawerHeader 
                    onClick={onClose}
                    paddingBottom={0}
                    paddingTop="3.25rem">
                </DrawerHeader>

                <DrawerBody as="nav" bg="white" px={[5,8]} paddingTop='0'>
                    <Flex py={"4"}>
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
                    </Flex>
                    <Accordion as="ul"
                        allowMultiple
                        borderTopWidth='1px'
                        listStyleType='none'>
                        {megaMenu.map((item: MenuItem | SubItem, i: number) => (
                            <Box key={item.label + i} as="li"
                                m="0"
                                borderBottomWidth='1px'>
                                {!((item as MenuItem)?.subitems && (item as MenuItem)?.subitems?.length) ? (
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