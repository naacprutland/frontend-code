import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box
} from '@chakra-ui/react'
import NextLink from "next/link"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { v4 as uuidv4 } from 'uuid';
import Container from './Container';

export interface Breadcrumb {
    path: '',
    label: ''
}

export interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
    style?: 'none' | 'white' | 'dark'
}

const styling = {
    none: {
        color: 'black'
    },
    white: {
        color: 'black',
        backgroundColor: 'white'
    },
    dark: {
        color: 'white',
        backgroundColor: 'secondary7.500'
    }
}


const Breadcrumbs = ({
    breadcrumbs = [],
    style = "none"
}: BreadcrumbsProps) => (
    <Box py="8px" w="100%" {...styling[style]}>
        <Container>
            <Breadcrumb spacing='4px' separator={<ChevronRightIcon color='secondary6.500' />}>
                {
                    breadcrumbs.map(crumb => (
                        <BreadcrumbItem key={uuidv4()} >
                            <NextLink href={crumb.path} passHref>
                                <BreadcrumbLink fontSize="sm" textTransform="uppercase" lineHeight="1">
                                    {crumb.label}
                                </BreadcrumbLink>
                            </NextLink>
                        </BreadcrumbItem>
                    ))
                }
            </Breadcrumb>
        </Container>
    </Box>
)

export default Breadcrumbs