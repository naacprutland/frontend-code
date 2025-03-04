import {
    VStack,
    HStack,
    LinkBox,
    LinkOverlay,
    Heading,
    AspectRatio,
    Text,
    Button,
    Badge
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import { Image as MediaImage } from '../interface/generalApi'
import { createMarkup } from "../lib/util"
import Image from "./Image"

export interface ArticleCardProps {
    image?: {
        src: MediaImage;
        alt: string;
    },
    title?: string;
    copy?: string;
    link?: {
        label?: string;
        path: string;
        isExternal: boolean;
    },
    badges?: {
        label: string;
        colorScheme: 'prime1' | 'prime2' | 'secondary1' | 'secondary2' | 'secondary3' | 'secondary4' | 'secondary5' | 'secondary6'
    }[],
}

const ArticleCard = ({
    image,
    title,
    copy,
    link,
    badges = [],
}: ArticleCardProps) => {
    return (
        <LinkBox as="article"
            display="flex"
            flexDirection={["column", "row"]}
            overflow="hidden"
            borderRadius="6px"
            width="100%"
            backgroundColor="white"
            layerStyle="boxShadowLight" >
            {
                (image && image.src) && (
                    <AspectRatio ratio={7 / 3}
                        flex={['none', "1 1 50%"]}
                    >
                        <div>
                            <Image
                                image={image?.src}
                                alt={image?.alt}
                                srcSetWidth={{
                                    min: 200,
                                    max: 800
                                }}
                            />
                        </div>
                    </AspectRatio>)
            }
            {
                (title || copy || link) && (
                    <VStack
                        alignItems="flex-start"
                        spacing="3"
                        justify="space-between"
                        flex="1 1 50%"
                        color="black"
                        backgroundColor="white"
                        p={['4', '1rem 1.5rem', '1.5rem 2rem']}
                    >
                        <VStack spacing="2"
                            alignItems="flex-start">
                            {title && <Heading as="h3"
                                lineHeight="1"
                                size="lg" >
                                {title}
                            </Heading>
                            }

                            {
                                (badges?.length > 0) && (
                                    <HStack spacing="2">
                                        {
                                            badges.map((badge) => (
                                                <Badge key={badge.label}
                                                    variant="solid"
                                                    colorScheme={badge.colorScheme}>
                                                    {badge.label}
                                                </Badge>))
                                        }
                                    </HStack>
                                )
                            }
                            {
                                copy && <Text as="div" mt="3" dangerouslySetInnerHTML={createMarkup(copy)}>
                                </Text>
                            }
                        </VStack>
                        {
                            (link?.label && link?.path) && (
                                <NextLink href={link?.path} passHref>
                                    <LinkOverlay isExternal={link?.isExternal} >
                                        <Button as="span" size="xs"
                                            fontWeight="bold"
                                            rightIcon={<ChevronRightIcon />}
                                            colorScheme="secondary4">
                                            {link?.label}
                                        </Button>
                                    </LinkOverlay>
                                </NextLink>
                            )
                        }
                    </VStack>
                )
            }
        </LinkBox>
    )
}

export default ArticleCard