import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { SearchPageTemplateProps } from '../interface/page'
import { getSearchPageProps } from '../lib/searchPageProps'
import DynamicComponent from '../components/DynamicComponent'
import HeroBlock from '../components/HeroBlock'
import Breadcrumbs from '../components/Breadcrumbs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SearchBlock from '../components/SearchBlock'
import {
    QueryFunctionContext,
    useInfiniteQuery
  } from 'react-query'
import { getPageSearch, InfinityPage } from '../lib/pagesSearch'

interface Props {
    data: SearchPageTemplateProps
}

const SearchPage = ({ data }: Props) => {
    const { pageSEO, breadCrumbsSEO,  pageStructure= [], breadcrumbs, heroBlock } = data
    const router = useRouter()
    const [key, setKey] = useState(null)
    const [results, setResults] = useState([])
    const [total, setTotal] = useState(null)
    const getQuery = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get("q") || null;
    }
    const {
            data:res,
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
            },[])
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

    function onSubmit(val) {
        const searchKey = val?.keySearch
        if (searchKey) {
            setKey(searchKey)
            router.push('/Search', {
                query: {
                    ...router.query,
                    q: searchKey
                },
            },
            { 
                shallow: true,
            })
        }
    }

    function onLoadMore() {
        fetchNextPage()
    }

    return (
    <>
        <NextSeo {...pageSEO} />
        {breadCrumbsSEO && <BreadcrumbJsonLd {...breadCrumbsSEO} />}
        {heroBlock && <HeroBlock {...heroBlock} />}
        {breadcrumbs && <Breadcrumbs {...breadcrumbs} />}
        <SearchBlock 
            totalResults={total}
            hideButton={!hasNextPage}
            disableButton={isFetchingNextPage}
            results={results}
            onLoadMore={onLoadMore} 
            searchValue={key} 
            onSubmit={onSubmit} />
        {pageStructure?.map((cProps, i) => (
            <DynamicComponent 
                key={`pageComp${i}`}
                {...cProps} position={i}/>
            ))}
    </>
)}

export const getStaticProps = async () => {
    return getSearchPageProps()
};

export default SearchPage
