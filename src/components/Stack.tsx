import {
    Heading,
    Box,
    Stack as ChakraStack,
    VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import { AlignItemsOptions } from '../interface/enums'
import ContentText from './ContentText';


export interface StackProps {
    img: {
        src: string;
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
                <Image src={img.src} alt={img.alt}
                    objectFit="cover"
                    objectPosition="center"
                    height={156}
                    width={156} />
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