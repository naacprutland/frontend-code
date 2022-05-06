import { NextSeoProps } from 'next-seo';
import { SEOApi } from '../interface/apiSeo';
import { Breadcrumbs } from '../interface/componentBlock';
import { SearchPageTemplateProps } from '../interface/page';
import { SearchPageResponseProps } from '../interface/pageResponse';
import { getConfigData, getStaticPageData } from './pageProps'
import { heroBlockBuilder, breadcrumbBuilder } from './pageStructureBuilder';
import { seoBreadcrumbsBuilder, seoBuilder } from './seoBuilder';
import apiEndPoints from './strapiApi'

const { 
    getSearchPage,
    get404Page
  } = apiEndPoints

/**
 * Generates props for static props
 * @returns Page Props
 */
 export async function getSearchPageProps() {
    const config =  await getConfigData()
  
    let pageData:SearchPageResponseProps = await getStaticPageData<SearchPageResponseProps>(getSearchPage);

    // let pageData:PageResponseProps = await getPageDynamicPageData(formTitle, preview)
    let data: SearchPageTemplateProps = {} as SearchPageTemplateProps
  
    // 404 doesn't appear in preview mode with out this
    if (!pageData) {
      pageData = await getStaticPageData(get404Page)
    }
   
    if (pageData) {
      const pageSEO: NextSeoProps = pageData.seo ? seoBuilder(pageData.seo as SEOApi) : null
      const breadcrumbs = pageData.breadcrumbs ? breadcrumbBuilder(
        { __component: 'blocks.breadcrumbs', ...pageData.breadcrumbs }) : null
      const breadCrumbsSEO = seoBreadcrumbsBuilder(breadcrumbs as Breadcrumbs)
      data = {
        pageSEO,
        breadCrumbsSEO,
        heroBlock: heroBlockBuilder({ __component: 'blocks.hero-block', ...pageData.hero}),
        breadcrumbs
      } as SearchPageTemplateProps
    }
  
    return {
      props: {
        preview: false,
        notFound: false,
        config,
        data
      },
    }
  }