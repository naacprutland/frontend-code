import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { GetStaticProps } from 'next'
import { SiteConfig } from '../interface/siteConfig'
import { HomePage } from '../interface/homePage'

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getPageData(page) {
  const content  = await import(`../data/pages/${page}.json`);
  return content ;
}

/**
 * Get Data associated with the app
 */
export async function getConfigData(): Promise<SiteConfig> {
  const data = await import('../data/siteConfig.json');
  return data.default;
}

interface Props {
  sourceProvider?: unknown;
  error?: unknown;
  preview: boolean;
  config: SiteConfig;
  file: {
    fileRelativePath: string;
    sha: string;
    data: HomePage;
  }
}


/**
 * Generates props for static props
 * @param {string} page The name of the page
 * @returns Page Props
 */
export async function getPageProps(
  page: string,
  preview = false,
  previewData = null): Promise<{ props: Props }> {
  const config =  await getConfigData();

  if (preview) {
    const gitHubProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: `/src/data/pages/${page}.json`,
      parse: parseJson,
    })

    return {
      props: {
        ...gitHubProps?.props,
        config
      },
    };
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      config,
      file: {
        sha: '',
        fileRelativePath: `/src/data/pages/${page}.json`,
        data: (await import(`../data/pages/${page}.json`)).default,
      }
    },
  }
}
