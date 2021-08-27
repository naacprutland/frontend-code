import { useState, useEffect } from "react";
import { CardProps } from '../components/Card'
import { ResultItem } from '../components/SearchSortBlock'
import { mapToCards } from "../lib/helper";

type Tuple = [CardProps[], (results?: ResultItem[]) => void];

const useCardData = (results: ResultItem[] = []): Tuple => {
  const [data, setData] = useState<CardProps[]>([])

  const setCardsData = (results: ResultItem[] = []) => {
    setData(mapToCards(results, 'View Article'))
  }

  useEffect(() => {
    setCardsData(results)
  }, [results])

  return [data, setCardsData]
}

export default useCardData