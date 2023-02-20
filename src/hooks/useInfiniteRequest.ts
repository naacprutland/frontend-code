import { useState, useEffect } from 'react'
import { InfinityPage } from '../lib/pagesSearch'
import { CardProps } from '../components/Card'
import { ArticleCardProps } from '../components/ArticleCard'

interface InfinityOption {
  initials?: InfinityPage
}

type QueryFn = (pageParam: number) => Promise<InfinityPage>

const useInfinityRequest = (queryFN: QueryFn, { initials }: InfinityOption) => {
  const [data, setData] = useState<InfinityPage>(null)
  const [cards, setCards] = useState<CardProps[] | ArticleCardProps[]>(
    initials?.page?.cards || []
  )
  const [pageParam, setPageParam] = useState<number>(initials?.nextCursor || 1)
  const [isSuccess, setIsSuccess] = useState<boolean>(null)
  const [isError, setIsError] = useState<boolean>(null)
  const [hasNextPage, setHasNextPage] = useState<boolean>(
    initials?.page.hasMore
  )
  const [isFetchingNextPage, setIsFetchingNextPage] = useState<boolean>(false)
  const [totalResults, setTotalResults] = useState<number>(
    initials?.resultTotal
  )

  const runQuery = async (initialPage?: number) => {
    try {
      setIsFetchingNextPage(true)
      const result = await queryFN(initialPage || pageParam)
      if (isNaN(initialPage)) {
        setCards((prevState) => [...prevState, ...result.page.cards])
      } else {
        setCards(result.page.cards)
      }

      setData(result)
      setHasNextPage(result.page.hasMore)
      setTotalResults(result.resultTotal)
      setPageParam(result.nextCursor)
      setHasNextPage(!isNaN(result.nextCursor))
      setIsError(false)
      setIsSuccess(true)
      setIsFetchingNextPage(false)
    } catch (e) {
      setIsError(true)
      setIsSuccess(false)
      setIsFetchingNextPage(false)
    }
  }

  const freshRequest = () => {
    runQuery(1)
  }

  useEffect(() => {
    if (!initials && queryFN) {
      runQuery()
    }
  }, [])

  return {
    data,
    isSuccess,
    isError,
    hasNextPage,
    isFetchingNextPage,
    cards,
    totalResults,
    fetchNextPage: runQuery,
    freshRequest,
  }
}

export default useInfinityRequest
