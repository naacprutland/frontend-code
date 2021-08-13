import React, { useEffect, useCallback } from "react";
import {
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

export interface CLPProps {
  // currentPage: number; 
  // totalPages: number;
  // totalResults: number;
  collectionType: string;
  results: ResultItem[];
}

const SearchSortBlock = ({ collectionType, results }: CLPProps) => {
  // const router = useRouter()
  // const [curPage, setCurPage] = useState<number>(currentPage)
  // const [totPage, setTotPage] = useState<number>(totalPages)
  // const [curSort, setCurSort] = useState<string>('')
  const [cardsData, setCardsData] = useCardData(results)
  const {
    register,
    control
  } = useForm();

  const formData = useWatch({ control });

  const searchFilter = useCallback(
    debounce(async (data) => {
      if (Object.keys(data)?.length > 0 ) {
        const response = await searchSortQuery( collectionType, data)

        if (response) setCardsData(response)
      
      }
    }, 500),
    [])

  useEffect(() => {
    searchFilter(formData)
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
      <form className="grid" >
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
      </form>
    </Container>
    <DeckBlock position={2} cards={cardsData} />
  </Stack>)
}

export default SearchSortBlock