import {
  Box,
  IconButton
} from '@chakra-ui/react'
import DeckBlock from "./DeckBlock"
import { MediaImage } from '../interface/media'
import { useForm } from "react-hook-form";
import { CardProps } from '../components/Card'
import Container from './Container';
import Input from './Input'
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect } from 'react';

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

export interface SearchSortProps {
  collectionType?: string;
  searchValue: string;
  results?: CardProps[];
  hideButton?: boolean;
  onLoadMore?: () => void;
  onSubmit?: (val: object) => void;
  disableButton?: boolean;
  totalResults?: number;
}

const SearchBlock = ({
  onLoadMore,
  searchValue,
  results = [],
  onSubmit,
  hideButton = true,
  disableButton,
  totalResults
}: SearchSortProps) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (searchValue) {
      setValue('keySearch', searchValue)
    }
  }, [searchValue])

  return (
    <>
      <Container as="form" py={[8, 12, 14]} onSubmit={handleSubmit(onSubmit)} >
        <Box className="grid">
          <Box className="gcol-12 gcol-md-12 gcol-lg-10 gcol-xl-8 center"
            w="100%">
            <Box display="flex"
              alignItems="end">
              <Input id="keySearch"
                type="text"
                name="keySearch"
                register={register}
                label="Keyword Search"
                placeholder="Search" />
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
        {typeof totalResults === 'number' && (
          <Box fontSize="24px"
            fontWeight="bold"
            textAlign="center"
            paddingTop="24px"
            w="100%">{totalResults} Results</Box>)}
      </Container>
      {results ? <DeckBlock position={2}
        onAction={{
          action: onLoadMore,
          label: 'Load More'
        }}
        disableButton={disableButton}
        hideButton={hideButton}
        cards={results} />
        : (<Container paddingBottom={[8, 12, 14]} textAlign="center">
          <p>No Results</p>
        </Container>)}
    </>)
}

export default SearchBlock