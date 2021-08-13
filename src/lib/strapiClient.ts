import { stringify } from 'qs'

const STRAPI_API_URL = 'http://localhost:1337'

interface SearchFilter {
  search: string;
  sort: string;
}

/**
 * get request for strapi collection types
 * @param path url minus the domain and shceme
 * @returns 
 */
export const fetchData = async (path) => {
  const resURL = `${STRAPI_API_URL}${path}`
  const res = await fetch(resURL)
  const data =  await res.json()
  console.log(resURL, data)

  return data
}

const sortMethod = {
  NEW: {
    _sort: 'published_at:DESC'
  },
  OlD: {
    _sort: 'published_at:ASC'
  },
  ASC: {
    _sort: 'title:ASC'
  },
  DESC: {
    _sort: 'title:DESC'
  }
}

/**
 * Search and Sort get request
 * @param path 
 * @param param1 
 * @returns 
 */
export const searchSortQuery = async (
  path: string, 
  { search , sort }: SearchFilter) => {
  let query = ''
  if (!!search || !!sort ) {
    let queryObject = {}
    const sortOpt = sortMethod[sort];
    const searchOpt = {
      _or: [
        { description_contains: search },
        { title_contains: search }
      ]
    }
    if (search && !sort) {
      queryObject = searchOpt
    } else if (!search && sort) {
      queryObject = sortOpt
    } else {
      queryObject = {
        _where: [
          searchOpt
        ],
        ...sortOpt
      }
    }
    query = stringify(queryObject); 
  }

  return await fetchData(`/${path}${query ? '?' : ''}${query}`)
}