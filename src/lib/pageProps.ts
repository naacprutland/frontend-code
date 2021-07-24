const baseApiUrl = 'http://localhost:1337';

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getPageData(page): Promise<unknown| null> {
  try {
    let response = await fetch(`${baseApiUrl}/pages?slug=${page}`);
    let json = await response.json();
    if (json.length > 0) {
      return json.pop();
    }
    response = await fetch(`${baseApiUrl}/pages?slug=404`);
    json = await response.json();
    return json.pop();
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
  let data = await getPageData(formTitle);

  if (!data) {
    data = {}
  }

  return {
    props: {
      formTitle,
      preview: false,
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
export async function getPathsList() {
  try {
    const data  = await fetch(`${baseApiUrl}/staticPaths`);
    return data.json();
  } catch (e) {
    return []
  }
}