import {
    VStack,
    Box,
    HStack,
    LinkBox,
    LinkOverlay,
    Heading,
    AspectRatio,
    Text,
    Button,
    Badge,
    Divider,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Image from 'next/image'
import { Image as MediaImage } from '../interface/generalApi'
import Moment from 'react-moment'
import Container from './Container'
import { ColorScheme } from '../interface/general'


export interface FeatureBlockProps {
    heading?: string;
    headingAlign?: 'start' | 'center' | 'end';
    image: {
        src: MediaImage
        alt: string
    }
    title?: string
    copy?: string
    link?: {
        label?: string
        path: string
        isExternal: boolean
    }
    badge?: {
        label: string
        colorScheme: ColorScheme
    }
    date?: Date | string;
    position?: number;
}

const FeatureBlock = ({
    heading,
    headingAlign = "center",
    image,
    title,
    copy,
    link,
    badge,
    date,
    position = 0
}: FeatureBlockProps) => {
    return (
        <>
            {image?.src &&
                <Container as="section" className="grid" py={[8, 12, 14]}>
                    <Box className="gcol-12 gcol-md-12 gcol-lg-10 center">
                        {heading && (<Heading
                            as={position === 0 ? 'h1' : 'h2'}
                            textAlign={headingAlign}
                            fontSize={['4xl', '5xl', '6xl']}
                            paddingBottom={['24px', '32px', '32px']}>
                            {heading}
                        </Heading>)}
                        {(image && image?.src) && (
                            <LinkBox as="figure" display="flex" gap={["16px", "24px", "32px"]} flexDirection={["column", "row"]}>
                                {image && (
                                    <AspectRatio
                                        flex="1 1"
                                        ratio={7 / 4}
                                        borderRadius="6px"
                                        layerStyle="boxShadowLight"
                                        overflow="hidden"
                                    >
                                        <div>
                                            <Image
                                                src={image?.src?.url}
                                                alt={image?.alt || heading}
                                                objectFit="cover"
                                                objectPosition="center"
                                                layout="fill"
                                            />
                                        </div>
                                    </AspectRatio>
                                )}
                                {(title || copy || link) && (
                                    <VStack
                                        as="figcaption"
                                        alignItems="flex-start"
                                        spacing="3"
                                        justify="space-between"
                                        flex="1 1"
                                        color="black"
                                        borderRadius="6px"
                                        px={["4", "0"]}
                                    >
                                        <VStack spacing="2" alignItems="flex-start">
                                            {title && (
                                                <Heading as="h3" lineHeight="1" fontSize={["lg", "3xl", "4xl"]}>
                                                    {title}
                                                </Heading>
                                            )}
                                            {(badge || date) && (
                                                <HStack spacing="2">
                                                    {badge && (
                                                        <Badge variant="solid" colorScheme={badge.colorScheme}>
                                                            {badge.label}
                                                        </Badge>
                                                    )}
                                                    {badge && date && (
                                                        <Divider
                                                            borderColor="black"
                                                            orientation="vertical"
                                                            height="16px"
                                                        />
                                                    )}
                                                    {date && (
                                                        <Text fontWeight="semibold">
                                                            <Moment format="MMMM DD, YYYY" date={date} />
                                                        </Text>
                                                    )}
                                                </HStack>
                                            )}
                                            {copy && (
                                                <Text mt="3">
                                                    {copy.slice(0, 100)}
                                                    {copy.length > 100 && '...'}
                                                </Text>
                                            )}
                                        </VStack>
                                        {link?.label && link?.path && (
                                            <NextLink href={link?.path} passHref>
                                                <LinkOverlay isExternal={link?.isExternal}>
                                                    <Button
                                                        as="span"
                                                        size="md"
                                                        rightIcon={<ChevronRightIcon />}
                                                        colorScheme="secondary4"
                                                    >
                                                        {link?.label}
                                                    </Button>
                                                </LinkOverlay>
                                            </NextLink>
                                        )}
                                    </VStack>
                                )}
                            </LinkBox>
                        )}
                    </Box>
                </Container>
            }
        </>
    )
}

export default FeatureBlock
