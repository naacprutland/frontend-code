import { useState, useEffect } from "react";
import { CardProps } from '../components/Card'
import { ResultItem } from '../components/SearchSortBlock'

type Tuple = [CardProps[], (results?: ResultItem[]) => void];

const useCardData = (results: ResultItem[] = []): Tuple => {
  const [data, setData] = useState<CardProps[]>([])

  const setCardsData = (results: ResultItem[] = []) => {
    const adjustedData: CardProps[] = results.map(val => {
      return {
        title: val.title,
        copy: val.description,
        image: val.image,
        link: {
          label: 'View Article',
          path: val?.page?.path,
          isExternal: false
        }
      }
    })

    setData(adjustedData)
  }

  useEffect(() => {
    setCardsData(results)
  }, [results])

  return [data, setCardsData]
}

export default useCardData