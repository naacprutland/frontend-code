import { PageTemplateProps } from '../interface/page'
import { PageResponseProps } from '../interface/pageResponse'
import { buildPageStructure } from './pageStructureBuilder'
import apiEndPoints from './strapiApi'
import { fetchApi } from './util'

const { getStaticPaths, getPages, getConfig } = apiEndPoints
const siteBaseUrl = process.env.SITE_BASE_URL

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getPageData(page: string): Promise<PageResponseProps| null> {
  try {
    const url = `${getPages}/${page}`
    return await fetchApi(url)
  } catch (e) {
    return null
  }
}

/**
 * Get Data associated with the app
 */
export async function getConfigData() { 
  try {
    return await fetchApi(getConfig)
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
 * @returns Page Props
 */
export async function getPageProps(formTitle: string) {
  const config =  await getConfigData();
  const pageData:PageResponseProps = await getPageData(formTitle);
  let data: PageTemplateProps = {} as PageTemplateProps

  if (pageData) {
    data = await buildPageStructure(pageData)
    if (data.pageSEO) {
      data.pageSEO.canonical = siteBaseUrl + data.pageSEO.canonical
    }
  }

  return {
    props: {
      formTitle,
      preview: false,
      notFound: false,
      config,
      file: {
        data
      }
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