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
    useInfiniteQuery
  } from 'react-query'
import { getPageSearch } from '../lib/pagesSearch'
// import { CardProps } from '../components/Card'

interface Props {
    data: SearchPageTemplateProps
}

const SearchPage = ({ data }: Props) => {
    const { pageSEO, breadCrumbsSEO,  pageStructure= [], breadcrumbs, heroBlock } = data
    const router = useRouter()
    const [key, setKey] = useState(null)
    const [results, setResults] = useState([])
    const {
            data:res,
            refetch,
            fetchNextPage,
            // error,
            // hasNextPage,
            // isFetching,
            // isFetchingNextPage,
            // status,
        } = useInfiniteQuery('search', ({ pageParam = 0 }) => {
            return getPageSearch(key, pageParam)
        }, {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            // getNextPageParam: (lastPage, pages) => lastPage?.nextCursor,
        })

    useEffect(() => {
        if (res?.pages) {
            const pages = res.pages.reduce((acc, cur) => {
                return [
                    ...acc,
                    ...cur
                ]
            },[])
            setResults(pages)
        }
    }, [res])
 
    useEffect(() => {
        const { q } = router.query
        if (q) {
            setKey(q)
        }
    }, [router])

    useEffect(() => {
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
                shallow: true
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
        <SearchBlock results={results} onLoadMore={onLoadMore} searchValue={key} onSubmit={onSubmit} />
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
