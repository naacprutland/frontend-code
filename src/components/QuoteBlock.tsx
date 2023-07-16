import { useMemo } from 'react'
import {
    Box,
    Icon,
    Image
} from "@chakra-ui/react"
import Container from "./Container"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Image as ImageApi } from '../interface/generalApi'
import { imageSrcSet } from '../lib/util'

export interface QuoteBlockProps {
    quote: string;
    statedBy?: string;
    citeUrl?: string;
    image?: ImageApi;
    imageAlt?: string;
}

const QuoteBlock = ({
    quote,
    statedBy,
    citeUrl = null,
    image,
    imageAlt
}: QuoteBlockProps) => {
    const srcSet = useMemo(() => {
        return imageSrcSet(image, {
            min: 350,
            max: 1300
        })
    }, [image]);
    return (
        <Box w="100%">
            <Container className="grid"
                position="relative"
                py={[8, 12, 6]} overflow="hidden" >
                {
                    (image && imageAlt) && (
                        <Box position="absolute"
                            overflow="hidden"
                            bottom="0"
                            top="0"
                            left="0"
                            right="0"
                            zIndex="-1">
                            <Image
                                src={image?.url}
                                alt={imageAlt}
                                srcSet={srcSet}
                                loading="lazy"
                                objectFit='cover'
                                objectPosition='center'
                                h="100%"
                                w="100%" />
                        </Box>
                    )
                }
                <Box className="gcol-12 gcol-md-8 gcol-lg-6 center" position="relative" py="8">
                    <Icon as={FaQuoteLeft}
                        color="prime2.500"
                        position="absolute"
                        fontSize="4.5rem"
                        top="0"
                        left="0"
                        zIndex="-1" />
                    <Icon as={FaQuoteRight}
                        color="prime2.500"
                        position="absolute"
                        fontSize="4.5rem"
                        bottom="0"
                        right="0"
                        zIndex="-1" />
                    <Box as="figure"
                        backgroundColor="#FFFFFFE5"
                        borderRadius="6px"
                        layerStyle="boxShadowLight"
                        py="4"
                        px="8"
                        zIndex="1">
                        <Box as="blockquote"
                            fontWeight="semibold" cite={citeUrl || null}>
                            {quote}
                        </Box>
                        {
                            statedBy && (
                                <Box as="figcaption">
                                    <span>-</span><cite>{statedBy}</cite>
                                </Box>
                            )
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default QuoteBlock