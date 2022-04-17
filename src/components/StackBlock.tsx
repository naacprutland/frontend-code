
import {  
    Heading,
    Box
} from "@chakra-ui/react"
import Container from "./Container"
import { AlignItemsOptions } from '../interface/enums'
import Stack, { StackProps } from './Stack'

export interface StackBlockProps {
    heading?: string;
    headingAligned?: AlignItemsOptions;
    stacks: StackProps[];
    position?: number;
    reverse?: boolean;
}

const StackBlock = ({ 
    heading,
    headingAligned="start",
    stacks=[],
    position,
    reverse
}: StackBlockProps) => (
    <Box w="100%">
        <Container className="grid" py={[8, 12, 14]} >
            <Box className="gcol-12 gcol-md-8 gcol-lg-6 center"
                w="100%">
                { heading && (<Heading as={position > 0 ? 'h2' : 'h1'}
                        textAlign={headingAligned}
                        marginBottom={["6", "8", "12"]}
                        lineHeight="1"
                        fontSize={['4xl', '5xl', '6xl']} >
                        {heading}
                </Heading>)}
                <Box>
                    {stacks.map((v, i) => (<Stack 
                        key={i + v.title} 
                        {...v} 
                        reverse={reverse? i % 2 === 0: i % 2 !== 0} />))}
                </Box>
            </Box>
        </Container>
    </Box>
)

export default StackBlock