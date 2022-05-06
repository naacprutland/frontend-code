import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { SearchPageTemplateProps } from '../interface/page'
import { getSearchPageProps } from '../lib/searchPageProps'
import DynamicComponent from '../components/DynamicComponent'
import HeroBlock from '../components/HeroBlock'
import Breadcrumbs from '../components/Breadcrumbs'

interface Props {
    data: SearchPageTemplateProps
}

const SearchPage = ({ data }: Props) => {
    const { pageSEO, breadCrumbsSEO,  pageStructure= [], breadcrumbs, heroBlock } = data
    return (
    <>
        <NextSeo {...pageSEO} />
        {breadCrumbsSEO && <BreadcrumbJsonLd {...breadCrumbsSEO} />}
        {heroBlock && <HeroBlock {...heroBlock} />}
        {breadcrumbs && <Breadcrumbs {...breadcrumbs} />}
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
