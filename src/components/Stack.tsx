import {
    Heading,
    Box,
    Stack as ChakraStack,
    VStack
} from '@chakra-ui/react'
import { AlignItemsOptions } from '../interface/enums'
import ContentText from './ContentText'
import Image from './Image'
import { Image as ImageApi } from '../interface/generalApi'


export interface StackProps {
    img: {
        src: ImageApi;
        alt: string;
    },
    title: string;
    text: string;
    textAlign?: AlignItemsOptions;
    reverse?: boolean;
}

const Stack = ({ img, title, text, reverse }: StackProps) => {
    return (
        <ChakraStack align="center" spacing="6"
            direction={reverse ? "row-reverse" : "row"}>
            <Box borderRadius="50%"
                h="156px"
                layerStyle="boxShadowLight"
                overflow="hidden"
                minWidth="156px"
                width="156px">
                <Image image={img.src}
                    alt={img.alt}
                    srcSetWidth={{
                        min: 100,
                        max: 300
                    }}
                />
            </Box>
            <VStack spacing="2" w="100%">
                <Heading as="h3" fontSize={"2xl"}
                    lineHeight="1"
                    width="100%">
                    {title}
                </Heading>
                <ContentText richText={text} width="100%" />
            </VStack>
        </ChakraStack>
    )
}

export default Stack 