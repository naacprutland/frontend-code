import React, { useEffect, useCallback, useRef } from "react";
import {
  Box,
  Container,
  InputLeftElement,
  Icon,
  InputGroup,
  Input,
  Stack,
  Select,
  FormControl } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai"
import DeckBlock from "./DeckBlock"
import useCardData from '../hooks/useCardsData'
import { MediaImage } from '../interface/media'
// import { useRouter } from 'next/router'
import { useForm, useWatch } from "react-hook-form";
import { debounce } from '../lib/util';
import { searchSortQuery } from '../lib/strapiClient'
import { CardProps } from '../components/Card'

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
  }
}

export interface SearchSortProps {
  // currentPage: number; 
  // totalPages: number;
  // totalResults: number;
  collectionType: string;
  results: CardProps[];
}

const SearchSortBlock = ({ collectionType, results }: SearchSortProps) => {
  // const router = useRouter()
  // const [curPage, setCurPage] = useState<number>(currentPage)
  // const [totPage, setTotPage] = useState<number>(totalPages)
  // const [curSort, setCurSort] = useState<string>('')
  // console.log({ results })
//const startData = mapToCards(results, 'View Article')
 const [cardsData, setCardsData] = useCardData(null)
  const {
    register,
    control
  } = useForm();

  const formData = useWatch({ control });
  const firstTime = useRef(true);

  const searchFilter = useCallback(
    debounce(async (data) => {
      if (Object.keys(data)?.length > 0 ) {
        const response = await searchSortQuery( collectionType, data)

        if (response) setCardsData(response)
      
      }
    }, 500),
    [])

  useEffect(() => {
    // eslint-disable-next-line no-console
    if (!firstTime.current) {
      // Run the effect.
      searchFilter(formData)
    } else {
      firstTime.current = false;
    }
  }, [formData])

  // useEffect(() => {
  //   const { page, sort } = router?.query

  //   if (page && !isNaN(Number(page))) {
  //     setCurPage(Number(page))
  //   }

  //   if (sort && !Array.isArray(sort)) {
  //     setCurSort(sort);
  //   }
  // }, [router])

  return (<Stack align="center" spacing={4}>
    <Container maxW="container.lg">
      <Box as="form" className="grid" w="100%">
        <FormControl className="gcol-6 gcol-md-8">
          <InputGroup id="search">
            <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineSearch} />
            </InputLeftElement>
            <Input type="text" 
                  placeholder="Search"
                  {...register("search")} />
        </InputGroup>
        </FormControl>
        <FormControl className="gcol-6 gcol-md-4" id="sort">
            <Select aria-label="Sort" 
                    placeholder="Sort Options"
                    {...register("sort")}>
              <option value="NEW">Newest</option>
              <option value="OLD">Oldest</option>
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </Select>
          </FormControl>
      </Box>
    </Container>
    <DeckBlock position={2} cards={cardsData || results} />

  </Stack>)
}

export default SearchSortBlock