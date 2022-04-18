
import {
    Box,
    Icon
} from "@chakra-ui/react"
import Image from 'next/image'
import Container from "./Container"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export interface QuoteBlockProps {
    quote: string;
    statedBy?: string;
    citeUrl?: string;
    imageSrc?: string;
    imageAlt?: string;
}

const QuoteBlock = ({
    quote,
    statedBy,
    citeUrl,
    imageSrc,
    imageAlt
}: QuoteBlockProps) => (
    <Box w="100%">
        <Container className="grid"
            position="relative"
            py={[8, 12, 6]} overflow="hidden" >
           {
               (imageSrc && imageAlt) && (
                    <Box position="absolute"
                        overflow="hidden"
                        bottom="0"
                        top="0"
                        left="0"
                        right="0"
                        zIndex="-1">
                        <Image 
                            src={imageSrc} 
                            alt={imageAlt}
                            objectFit="cover"
                            objectPosition="center"
                            layout="fill" />
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
                        fontWeight="semibold" cite={citeUrl}>
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

export default QuoteBlock