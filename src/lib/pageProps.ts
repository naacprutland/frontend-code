import { PageTemplateProps } from '../interface/page'
import { PageResponseProps } from '../interface/pageResponse';
import { buildPageStructure } from './pageStructureBuilder';

const baseApiUrl = process.env.STRAPI_API_URL

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getPageData(page: string): Promise<PageResponseProps| null> {
  try {
    let response = await fetch(`${baseApiUrl}/pages/${page}`);
    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      response = await fetch(`${baseApiUrl}/pages?slug=404`);
      if (!response.ok) return null
      return response.json();
    }  
  } catch (e) {
    return null
  }
}

/**
 * Get Data associated with the app
 */
export async function getConfigData() { 
  try {
    const response = await fetch(`${baseApiUrl}/config`);
    return response.json();
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
    const result  = await fetch(`${baseApiUrl}/staticPaths`);
    const data: {
      params: { slug: string[];}
    }[] = await result.json()
    return data.filter(v => v.params.slug[0] !== '404');
  } catch (e) {
    return []
  }
}