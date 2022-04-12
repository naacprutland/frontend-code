import { useState, useEffect } from "react";
import { CardProps } from '../components/Card'
import { ResultItem } from '../components/SearchSortBlock'
// import { mapToCards } from "../lib/helper";

type Tuple = [CardProps[], (results?: ResultItem[]) => void];

const useCardData = (results: ResultItem[] | null): Tuple => {
  const [data, setData] = useState<CardProps[]>(null)

  const setCardsData = (results: ResultItem[] = []) => {
    setData([])
    // eslint-disable-next-line no-console
    console.log(results);
  }

  useEffect(() => {
    if (results) setCardsData(results)
  }, [results])

  return [data, setCardsData]
}

export default useCardData