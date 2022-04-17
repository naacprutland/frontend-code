
import {
    Box,
    Icon
} from "@chakra-ui/react"
import Container from "./Container"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export interface QuoteBlockProps {
    quote: string;
    statedBy?: string;
    citeUrl?: string;
    image?: {
        src: string;
        alt: string;
    }
}

const QuoteBlock = ({
    quote,
    statedBy,
    citeUrl,
}: QuoteBlockProps) => (
    <Box w="100%">
        <Container className="grid" py={[8, 12, 14]} >
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
                    px="8">
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