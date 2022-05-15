import {
    VStack,
    LinkBox,
    LinkOverlay,
    Heading,
    Text,
    Button
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import { Link } from "../interface/general";

export interface ItemCardProps {
    title?: string;
    subText1?: string;
    subText2?: string;
    subText3?: string;
    link?: Link,
}

const ItemCard = ({
    title,
    subText1,
    subText2,
    subText3,
    link
}: ItemCardProps) => {
    return (
        <LinkBox backgroundColor="white"
            display="flex"
            flexDirection="column"
            textAlign="center"
            borderRadius="6px"
            layerStyle="boxShadowLight"
            p="4">
            <VStack spacing="8px">
                {
                    title && <Heading as="h3"
                        lineHeight="1"
                        fontSize="2xl" >
                        {title}
                    </Heading>
                }
                {
                    subText1 && <Text fontWeight="semibold">
                        {subText1}
                    </Text>
                }
                {
                    subText2 && <Text fontWeight="semibold">
                        {subText2}
                    </Text>
                }
                {
                    subText3 && <Text>
                        {subText3}
                    </Text>
                }
            </VStack>
            {
                (link?.label && link?.path) && (
                    <NextLink href={link?.path} passHref>
                        <LinkOverlay isExternal={link?.external} >
                            <Button as="span" size="sm"
                                marginTop="8px"
                                w="100%"
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="secondary4">
                                {link?.label}
                            </Button>
                        </LinkOverlay>
                    </NextLink>
                )
            }
        </LinkBox >
    )
}

export default ItemCard