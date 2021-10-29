import { stringify } from 'qs'
import { fetchApi } from './util'
import StrapiApi from './strapiApi'

interface SearchFilter {
  search?: string;
  sort?: string;
  parentPage?: string;
}

const arg: SearchFilter = { 
  search: '' ,
  sort: '' ,
  parentPage: 'blog'
}

interface QueryObject {
  find?: string;
  sort?: string;
  parent?: string;
}

/**
 * Search and Sort get request for pages
 * @param path 
 * @param param1 
 * @returns 
 */
export const searchSortQuery = async (
  path: string, 
  { search , sort, parentPage }: SearchFilter = arg) => {

  const queryObject: QueryObject = {}
  if(search) {
    queryObject.find = search
  }

  if(sort) {
    queryObject.sort = sort
  }

  if(parentPage) {
    queryObject.parent = parentPage
  }

  const query = stringify(queryObject);

  const url = `${StrapiApi.getPagesSearch}/${query ? '?' : ''}${query}`
 
  const res =  await fetchApi(url)
  return res.results
}