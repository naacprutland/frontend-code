import { useRef } from "react";
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
    Icon
} from '@chakra-ui/react'
import NextLink from "next/link"
import { MenuItem } from './Header'
import { FaChevronRight } from "react-icons/fa";

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
    const firstField = useRef(null);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            size={'full'}
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent top="34px">
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
                    <Stack as="ul"
                        borderTopWidth='1px'
                        listStyleType='none'>
                        {megaMenu.map((item, i) => (
                            <Box key={item.label + i} as="li"
                                borderBottomWidth='1px'>
                                <Box px="4"
                                    py="2"
                                    alignItems='center'
                                    display={'flex'} 
                                    justifyContent="space-between">
                                    {item.label}
                                    <Icon color={'secondary6.500'} as={FaChevronRight} />
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    )
}

export default MobileMenu