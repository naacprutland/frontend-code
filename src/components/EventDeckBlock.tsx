import { useState } from 'react'
import { Heading, Flex, Button, SimpleGrid, Box, IconButton } from "@chakra-ui/react"
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Card, { CardProps } from './Card'
import Container from "./Container"
import { StyleType } from "../interface/general"
import { Styling } from "../interface/enums"

export interface EventDeckBlockProps {
    position?: number;
    heading?: string;
    headingPos?: "start" | "center" | "end";
    cards?: CardProps[];
    hideButton?: boolean;
    style?: StyleType;
}

const EventDeckBlock = ({
    heading,
    style = "none",
    position,
    cards = [],
    headingPos = "start"
}: EventDeckBlockProps) => {
    const [cardResults, setCardResults] = useState<CardProps[]>(cards)
    const [hideButton, setHideButton] = useState(true)
    const [disableButton, setDisableButton] = useState(false)
    const [disableBackBtn, setDisableBackBtn] = useState(true)

    const onPreviousMonth = () => {
        console.log('previous month')
    }

    const onNextMonth = () => {
        console.log('next month')
    }

    const onLoadMore = () => {
        console.log('load more')
        setDisableButton(true)
    }

    return (
        <Container className="grid" as="section" py={[8, 12, 14]}
            layerStyle={Styling[style]} >
            {heading && (
                <Heading className="gcol-12" as={position > 0 ? 'h2' : 'h1'}
                    lineHeight="1"
                    textAlign={headingPos}
                    paddingBottom={["6", "8", "12"]}
                    fontSize={['4xl', '5xl', '6xl']}>
                    {heading}
                </Heading>)
            }
            <Flex className="gcol-12" width="100%"
                paddingBottom={["6", "6", "12"]}
                justify="space-between">
                <IconButton aria-label='Back'
                    bg="prime1.500"
                    color="prime2.500"
                    borderRadius='50%'
                    _active={{
                        background: 'prime1.400'
                    }}
                    _hover={{
                        background: 'prime1.300'
                    }}
                    disabled={disableBackBtn}
                    onClick={onPreviousMonth}
                    icon={<ChevronLeftIcon />} />
                <Box as="p" fontSize={["3xl", "3xl", "4xl"]}
                    fontWeight="semibold">
                    February, 2022
                </Box>
                <IconButton aria-label='Forward'
                    bg="prime1.500"
                    color="prime2.500"
                    borderRadius='50%'
                    _active={{
                        background: 'prime1.400'
                    }}
                    _hover={{
                        background: 'prime1.300'
                    }}
                    onClick={onNextMonth}
                    icon={<ChevronRightIcon />} />
            </Flex>
            <SimpleGrid className="gcol-12" columns={[1, 2, 4]} spacingX={[1, 6, 8]} spacingY={[6, 8]} >
                {cardResults.map((data, i) => (
                    <Card key={data.title + i} {...data} />
                ))}
            </SimpleGrid>
            {
                (hideButton) && (
                    <Flex width="100%"
                        className="gcol-12"
                        paddingTop={["6", "8", "12"]}
                        justify="center">
                        <Button
                            type="button"
                            disabled={disableButton}
                            width='auto'
                            onClick={onLoadMore}
                            size="lg"
                            colorScheme="secondary4">
                            {"Load More"}
                        </Button>
                    </Flex>)
            }
        </Container>
    )
}

export default EventDeckBlock;