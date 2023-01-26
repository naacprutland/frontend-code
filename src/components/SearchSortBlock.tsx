import React, { useState, useEffect } from "react";
import {
    Box,
    InputLeftElement,
    Icon,
    InputGroup,
    Input,
    Select,
    useToast,
    FormControl,
    IconButton
} from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai"
import Container from './Container';
import DeckBlock from "./DeckBlock"
import { MediaImage } from '../interface/media'
import { useForm } from "react-hook-form";
import { searchSortQuery } from '../lib/strapiClient'
import { CardProps } from '../components/Card'
import { InfinityPage } from "../lib/pagesSearch";
import {
    QueryFunctionContext,
    useInfiniteQuery
} from 'react-query'
import { SearchIcon } from "@chakra-ui/icons";

export interface ResultItem {
    id: string;
    title: string;
    slug: string;
    description?: string;
    image: {
        src: MediaImage;
        alt: string;
    },
    page: {
        id: string;
        slug: string;
        homePage: boolean;
        path: string;
    },
    tile: {
        title: string;
        copy?: string;
        image: {
            src: MediaImage;
            alt: string;
        },
        link: {
            isExternal: boolean,
            label: string,
            path: string
        }
    }
}

export interface SearchSortBlockProps {
    queryID?: string;
    results: CardProps[];
    filter?: string;
    resultTotal?: number;
    hasMore?: boolean;
}

const SearchSortBlock = ({ queryID = `sort-something`, results, filter = '', hasMore, resultTotal }: SearchSortBlockProps) => {
    const [loaded, setLoaded] = useState(false);
    const [cardsData, setCardsData] = useState(results)
    const { register, handleSubmit } = useForm();
    const [options, setOptions] = useState({ filter: filter || '' })
    const [moreToLoad, setMoreToLoad] = useState(false)
    const [total, setTotal] = useState(resultTotal)
    const {
        refetch,
        fetchNextPage,
        error,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery<InfinityPage, Error>(queryID,
        async (arg: QueryFunctionContext) => {
            const { pageParam = 1 } = arg
            const res = await searchSortQuery(pageParam, options)
            setTotal(res.resultTotal)
            setCardsData(res.page.cards)
            return res;
        }, {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
    })

    const toast = useToast()

    const onLoadMore = () => {
        fetchNextPage()
    }

    const onSubmit = async (searchData) => {
        setOptions(prevState => ({
            ...prevState,
            ...searchData
        }))
    }

    useEffect(() => {
        if (loaded) {
            refetch();
        }
    }, [options])

    useEffect(() => {
        if (error) {
            toast({
                title: 'Search Error',
                description: 'There was an error while processing the search.',
                status: 'error',
                isClosable: true,
            })
        }
    }, [error])

    useEffect(() => {
        if (loaded) {
            setMoreToLoad(hasNextPage)
        } else {
            setMoreToLoad(hasMore)
        }
    }, [hasMore, hasNextPage])

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (<>
        <Container as="form" py={[8, 12, 14]} onSubmit={handleSubmit(onSubmit)}>
            <Box className="grid">
                <Box className="gcol-12 gcol-md-12 gcol-lg-10 gcol-xl-8 center" w="100%">
                    <Box display="flex" flexDirection={["column", "row"]} gap={[5, 5, 8]}>
                        <FormControl flex="1 1">
                            <InputGroup id="search">
                                <InputLeftElement pointerEvents="none">
                                    <Icon as={AiOutlineSearch} />
                                </InputLeftElement>
                                <Input type="text"
                                    placeholder="Search"
                                    {...register("search")} />
                            </InputGroup>
                        </FormControl>
                        <Box display="flex" flex="1 1">
                            <FormControl id="sort">
                                <Select aria-label="Sort"
                                    placeholder="Sort Options"
                                    {...register("sort")}>
                                    <option value="NEW">Newest</option>
                                    <option value="OLD">Oldest</option>
                                    <option value="ASC">Ascending</option>
                                    <option value="DESC">Descending</option>
                                </Select>
                            </FormControl>
                            <IconButton
                                colorScheme='prime1'
                                borderRadius='50%'
                                type="submit"
                                aria-label='Submit'
                                marginLeft="4px"
                                icon={<SearchIcon color='prime2.500' />}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            {typeof total === 'number' && (
                <Box fontSize="24px"
                    fontWeight="bold"
                    textAlign="center"
                    paddingTop="24px"
                    w="100%">{total} Results</Box>)}
        </Container>
        {cardsData ? <DeckBlock position={2}
            onAction={{
                action: onLoadMore,
                label: 'Load More'
            }}
            disableButton={isFetchingNextPage}
            hideButton={!moreToLoad}
            cards={cardsData} />
            : (<Container paddingBottom={[8, 12, 14]} textAlign="center">
                <p>No Results</p>
            </Container>)}
    </>)
}

export default SearchSortBlock