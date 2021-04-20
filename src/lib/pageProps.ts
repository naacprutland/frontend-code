import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { formOptions } from '../tinaForms/contentPageForm'
// import { SiteConfig } from '../interface/siteConfig'
// import { HomePage } from '../interface/homePage'

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
export async function getConfigData() {
  const data = await import('../data/siteConfig.json');
  return data.default;
}

// figure out how to use the type
// interface Props {
//   sourceProvider?: unknown;
//   error?: unknown;
//   preview: boolean;
//   config: SiteConfig;
//   file: {
//     fileRelativePath: string;
//     sha: string;
//     data: HomePage;
//   }
// }


/**
 * Generates props for static props
 * @param {string} page The name of the page
 * @returns Page Props
 */
export async function getPageProps(
  page: string,
  preview = false,
  previewData = null) {
  const config =  await getConfigData();
  const pageName = page.toLowerCase();
  console.log('hey', formOptions(page))

  if (preview) {
    const gitHubProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: `/src/data/pages/${pageName}.json`,
      parse: parseJson,
    })
    const formData = formOptions(page)
    console.log(gitHubProps)

    return {
      props: {
        ...gitHubProps?.props,
        config,
        formOptions: JSON.parse(JSON.stringify(formData))
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
        fileRelativePath: `/src/data/pages/${pageName}.json`,
        data: (await import(`../data/pages/${pageName}.json`)).default,
      }
    },
  }
}
