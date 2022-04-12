import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useTheme
  } from '@chakra-ui/react'
import { MenuItem as MenuItemProps } from './Header'
import NextLink from "next/link"

const externalAttr = {
    target: "_blank",
    rel: "noopener noreferrer"
}
const attr = (isExternal) => isExternal ?  externalAttr : {}


const MenuLink = (props: MenuItemProps) => {
    const theme = useTheme()
    return (
    <Menu >
        <MenuButton
            _focus={{
                boxShadow: theme.shadows.outline
            }}
            fontWeight="semibold"
            textTransform="capitalize">
            {props.label}
        </MenuButton>
        <MenuList bg="secondary7.500"
            sx={{
                'a:hover,a:active,a:focus': {
                    background: "gray.600"
                }
            }}>
            {props.subitems.map((item, i) => (
                <NextLink key={item.label + i} href={item.path} passHref>
                    <MenuItem as="a"
                        {...attr(item.external)}
                        fontWeight="semibold"
                        textTransform="capitalize">
                        {item.label}
                    </MenuItem>
                </NextLink>
                )
            )}
        </MenuList>
    </Menu>
)}

export default MenuLink