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
  useToast,
  FormControl } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai"
import DeckBlock from "./DeckBlock"
import useCardData from '../hooks/useCardsData'
import { MediaImage } from '../interface/media'
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
  collectionType: string;
  results: CardProps[];
}

const SearchSortBlock = ({ collectionType, results }: SearchSortProps) => {
  const [ cardsData, setCardsData ] = useCardData(null)
  const { register, control } = useForm();

  const formData = useWatch({ control });
  const firstTime = useRef(true);
  const toast = useToast()

  const searchFilter = useCallback(
    debounce(async (data) => {
      if (Object.keys(data)?.length > 0 ) {
        try {
          const response = await searchSortQuery( collectionType, data)
          setCardsData(response)
        } catch (e) {
          toast({
            title: 'Server Error',
            description: 'There was an issue with your request. Please try again later',
            status: 'error',
            isClosable: true,
          })
        }
      }
    }, 500), [])

  useEffect(() => {
    if (!firstTime.current) {
      searchFilter(formData)
    } else {
      firstTime.current = false;
    }
  }, [formData])

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