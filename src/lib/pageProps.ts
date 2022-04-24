import { PageTemplateProps } from '../interface/page'
import { PageResponseProps } from '../interface/pageResponse'
import { buildPageStructure } from './pageStructureBuilder'
import apiEndPoints from './strapiApi'
import { fetchApi } from './util'
import { GlobalApi } from '../interface/globalApi'
import { SiteConfig } from '../interface/siteConfig'
import convertToConfig from './getConfig'
import { seoBuilder } from './seoBuilder'
import { SEOApi } from '../interface/apiSeo'

const { getStaticPaths, getPages, getGlobal, getPagesPreview, getHomePage } = apiEndPoints
const siteBaseUrl = process.env.SITE_BASE_URL
interface ApiError {
  status: string;
  message: string;
}

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getDynamicPageData(page: string, preview: boolean): Promise<PageResponseProps| null> {
  try {
    if (preview) {
      const url = `${getPagesPreview}${page}`
      const res = await fetchApi(url)
      return res[0]
    }
    const url = `${getPages}/${page}`
    return await fetchApi(url)
  } catch (e) {
    return null
  }
}

/**
 * Get data associated with page from markdown file
 * @param {string} url - api url
 */
 export async function getStaticPageData(url: string): Promise<PageResponseProps| null> {
  try {
    return await fetchApi(url)
  } catch (e) {
    return null
  }
}

/**
 * Get Data associated with the app
 */
export async function getConfigData(): Promise<ApiError | SiteConfig> { 
  try {
    const globalData: GlobalApi = await fetchApi(getGlobal)
    return convertToConfig(globalData)
  } catch(e) {
    return { 
      status: 'error',
      message: 'Unable to load config file'
    };
  }
}

/**
 * Generates props for static props
 * @param {string} page The name of the page
 * @param {boolean} preview If in preview mode
 * @param {object} previewData the page data
 * @returns Page Props
 */
export async function getPageProps(formTitle: string, preview: boolean) {
  const config =  await getConfigData()
  let pageData:PageResponseProps;


  switch (formTitle) {
    case 'homePageKey':
      pageData = await getStaticPageData(getHomePage)
    break;
 
    // case 'B': document.write("Pretty good<br />");
    // break;
 
    default:  
     pageData = await getDynamicPageData(formTitle, preview)
  }

  // let pageData:PageResponseProps = await getPageDynamicPageData(formTitle, preview)
  let data: PageTemplateProps = {} as PageTemplateProps

  // 404 doesn't appear in preview mode with out this
  if (formTitle === '404' && !pageData) {
    pageData = await getDynamicPageData(formTitle, true)
  }
 
  if (pageData) {
    data = await buildPageStructure(pageData)

    if (pageData.seo) {
      data.pageSEO = seoBuilder(pageData.seo as SEOApi)
      // data.pageSEO.canonical = siteBaseUrl + data.pageSEO.canonical
    }
  }

  return {
    props: {
      formTitle,
      preview: false,
      notFound: false,
      config,
      data
    },
  }
}

/**
 * Get full list of static paths
 * @returns {
      "params": { "slug": string[]}
    }[]
 */
export async function getPathsList(): Promise<{
  params: { slug: string[];}
}[]> {
  try {
    const result  = await fetchApi(getStaticPaths);
    const data: {
      params: { slug: string[]; }
    }[] = result
    return data.filter(v => v.params.slug[0] !== '404');
  } catch (e) {
    return []
  }
}