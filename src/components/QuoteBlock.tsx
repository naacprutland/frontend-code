
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
            <Box className="gcol-12 gcol-md-8 gcol-lg-6 center"  position="relative" py="32px">
                <Icon as={FaQuoteLeft} 
                    color="prime2.500"
                    position="absolute"
                    fontSize="72px"
                    top="0"
                    left="0"
                    zIndex="-1" />
                <Icon as={FaQuoteRight} 
                    color="prime2.500" 
                    position="absolute"
                    fontSize="72px"
                    bottom="0"
                    right="0"
                    zIndex="-1" />
                <Box as="figure" 
                    backgroundColor="#FFFFFFE5"
                    borderRadius="6px"
                    py="16px" px="36px">
                    <Box as="blockquote"
                        fontWeight="600" cite={citeUrl}>
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