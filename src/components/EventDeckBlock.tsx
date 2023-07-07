import { useState, useEffect } from 'react'
import {
    Heading,
    Flex,
    Button,
    SimpleGrid,
    Box,
    IconButton,
    useToast
} from "@chakra-ui/react"
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Card, { CardProps } from './Card'
import Container from "./Container"
import { StyleType } from "../interface/general"
import { Styling } from "../interface/enums"
import Moment from 'react-moment'
import { getEvents } from '../lib/eventSearch'

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
    const [currentMonth, setCurrentMonth] = useState(0);
    const [cardResults, setCardResults] = useState<CardProps[]>(cards)
    const [hideButton, setHideButton] = useState(true)
    const [disableButton, setDisableButton] = useState(false)
    const [page, setPage] = useState(1)
    const [isError, setIsError] = useState(false)

    const toast = useToast()

    const onPreviousMonth = () => {
        setPage(1)
        setCurrentMonth(prev => prev > 0 ? --prev : 0)
    }

    const onNextMonth = () => {
        setPage(1)
        setCurrentMonth(prev => ++prev)
    }

    const onLoadMore = () => {
        setDisableButton(true)
        getEvents(page, currentMonth).then((data) => {
            setIsError(false)
            setHideButton(data.page.hasMore)
            setCardResults(prevState => {
                return [...prevState, ...data.page.cards] as CardProps[]
            })
            if (data.page.hasMore) setPage(prevState => ++prevState)
            setDisableButton(false)
        }).catch(() => {
            setIsError(true)
        })
    }

    useEffect(() => {
        getEvents(page, currentMonth).then((data) => {
            setIsError(false)
            setHideButton(data.page.hasMore)
            setCardResults(data.page.cards as CardProps[])
            if (data.page.hasMore) setPage(2)
        }).catch(() => {
            setIsError(true)
        })
    }, [currentMonth])

    useEffect(() => {
        if (isError) {
            toast({
                title: 'Event Error',
                description: 'Unable Populate Event Results',
                status: 'error',
                isClosable: true,
            })
        }
    }, [isError])

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
                    disabled={!currentMonth}
                    onClick={onPreviousMonth}
                    icon={<ChevronLeftIcon />} />
                <Box as="p" fontSize={["3xl", "3xl", "4xl"]}
                    fontWeight="semibold">
                    <Moment format="MMMM, YYYY" add={{ months: currentMonth }} />
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
                cardResults.length === 0 && <Box className="gcol-6 center"
                    width="100%"
                    fontSize="2xl"
                    color="prime.500"
                    border="2px solid"
                    borderRadius="6px"
                    padding="2"
                    aria-live="polite"
                    fontWeight="bold"
                    textAlign="center">No Available Events </Box>
            }
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