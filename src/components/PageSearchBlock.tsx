import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SearchBlock from './SearchBlock'
import {
    QueryFunctionContext,
    useInfiniteQuery
} from 'react-query'
import { getPageSearch, InfinityPage } from '../lib/pagesSearch'

export interface PageSearchBlockProps {
    slug: string;
}

const PageSearchBlock = ({ slug = "search" }: PageSearchBlockProps) => {
    const router = useRouter()
    const [key, setKey] = useState(null)
    const [results, setResults] = useState([])
    const [total, setTotal] = useState(null)
    const getQuery = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get("q") || null;
    }
    const {
        data: res,
        refetch,
        fetchNextPage,
        // error,
        hasNextPage,
        // isFetching,
        isFetchingNextPage,
        // status,
    } = useInfiniteQuery<InfinityPage, Error>('search',
        async ({ pageParam = 0 }: QueryFunctionContext) => {
            const res = await getPageSearch(key || getQuery(), pageParam)
            setTotal(res.resultTotal)
            return res;
        }, {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
    })

    useEffect(() => {
        if (res?.pages) {
            const pages = res.pages.reduce((acc, cur) => {
                return [
                    ...acc,
                    ...cur.page.cards
                ]
            }, [])
            setResults(pages)
        }
    }, [res])


    useEffect(() => {
        const query = getQuery()

        if (query !== key) {
            setKey(query)
        }
    }, [router])

    useEffect(() => {
        // if key changes then clear results and refetch
        if (key) {
            refetch()
        }
    }, [key])

    function onSubmit(val: { keySearch: string }) {
        const searchKey = val?.keySearch
        if (searchKey) {
            setKey(searchKey)
            const oldQuery = router.query
            delete oldQuery.slug
            router.push({
                pathname: `/${slug}`,
                query: {
                    ...oldQuery,
                    q: searchKey
                },
            },
                undefined,
                { shallow: true })
        }
    }

    function onLoadMore() {
        fetchNextPage()
    }

    return (
        <>
            <SearchBlock
                totalResults={total}
                hideButton={!hasNextPage}
                disableButton={isFetchingNextPage}
                results={results}
                onLoadMore={onLoadMore}
                searchValue={key}
                onSubmit={onSubmit} />
        </>
    )
}

export default PageSearchBlock