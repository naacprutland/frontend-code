import { Heading, Box } from "@chakra-ui/react"
import ItemCard, { ItemCardProps } from './ItemCard'
import Container from "./Container"
import { AlignItemsOptions } from "../interface/enums";

export interface ItemDeckBlockProps {
    position?: number;
    heading?: string;
    headingAlign?: AlignItemsOptions;
    cards: ItemCardProps[];
}

const ItemDeckBlockProps = ({
    heading,
    headingAlign,
    cards = [],
    position = 1
}: ItemDeckBlockProps) => {
    return (
        <Container as="section" py={[8, 12, 14]} >
            {heading && (
                <Heading as={position > 0 ? 'h2' : 'h1'}
                    lineHeight="1"
                    textAlign={headingAlign}
                    paddingBottom={["6", "8", "12"]}
                    fontSize={['4xl', '5xl', '6xl']}>
                    {heading}
                </Heading>)
            }
            <Box display="flex"
                gap={["24px", "24px", "32px"]}
                flexWrap="wrap"
                flexDirection={["column", "row"]}>
                {cards.map((data, i) => (
                    <ItemCard
                        key={data.title + i}
                        {...data}
                        flex={["1 1 30%"]} />
                ))}
            </Box>
        </Container>
    )
}

export default ItemDeckBlockProps