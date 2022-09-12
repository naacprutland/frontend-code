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
import { NextSeoProps } from 'next-seo'

const {
  getStaticPaths,
  getPages,
  getGlobal,
  getPagesPreview,
  getHomePage,
  get404Page,
  getCalenderPage,
  getCheckoutPage,
  getSearchPage,
  getCheckoutConfirmationPage,
  getDonationConfirmationPage,
} = apiEndPoints
// const siteBaseUrl = process.env.SITE_BASE_URL
interface ApiError {
  status: string
  message: string
}

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getDynamicPageData(
  page: string,
  preview: boolean
): Promise<PageResponseProps | null> {
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
export async function getStaticPageData<T>(url: string): Promise<T | null> {
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
  } catch (e) {
    return {
      status: 'error',
      message: 'Unable to load config file',
    }
  }
}

/**
 * Generates props for static props
 * @param {string} location The name of the page
 * @param {boolean} preview If in preview mode
 * @returns Page Props
 */
export async function getPageProps(location: string, preview: boolean) {
  const config = await getConfigData()

  let pageData: PageResponseProps

  switch (location.toLowerCase()) {
    case '':
      pageData = await getStaticPageData(getHomePage)
      break
    case 'calender':
      pageData = await getStaticPageData(getCalenderPage)
      break
    case 'checkout':
      pageData = await getStaticPageData(getCheckoutPage)
      break
    case 'search':
      pageData = await getStaticPageData(getSearchPage)
      break
    case 'checkout-confirmation':
      pageData = await getStaticPageData(getCheckoutConfirmationPage)
      break
    case 'donation-confirmation':
      pageData = await getStaticPageData(getDonationConfirmationPage)
      break
    case '404':
      pageData = await getStaticPageData(get404Page)
      break
    default:
      pageData = await getDynamicPageData(location, preview)
  }

  let data: PageTemplateProps = {} as PageTemplateProps

  // 404 doesn't appear in preview mode with out this
  if (!pageData) {
    pageData = await getStaticPageData(get404Page)
  }

  if (pageData) {
    const pageSEO: NextSeoProps = pageData.seo
      ? seoBuilder(pageData.seo as SEOApi)
      : null
    data = {
      pageSEO,
      ...(await buildPageStructure(pageData)),
    } as PageTemplateProps
  }

  return {
    props: {
      formTitle: location,
      preview: false,
      notFound: false,
      config,
      data,
    },
  }
}

/**
 * Get full list of static paths
 * @returns {
      "params": { "slug": string[]}
    }[]
 */
export async function getPathsList(): Promise<
  {
    params: { slug: string[] }
  }[]
> {
  try {
    const result = await fetchApi(getStaticPaths)
    const data: {
      params: { slug: string[] }
    }[] = result
    return data.filter((v) => v.params.slug[0] !== '404')
  } catch (e) {
    return []
  }
}
