import { stringify } from 'qs'
import { fetchApi } from './util'
import apiEndPoints from './strapiApi'
import { InfinityPage, cardBuilder } from './pagesSearch'
import { Pagination, SearchApi } from '../interface/apiSearch'
import { CardProps } from '../components/Card'

interface SearchFilter {
  search?: string
  sort?: string
  parentPage?: string
  filter?: string
}

const arg: SearchFilter = {
  search: '',
  sort: '',
  parentPage: 'blog',
  filter: '',
}

interface QueryObject {
  find?: string
  sort?: string
  parent?: string
  filter?: object
}

interface SearchSortResponse {
  data: {
    id: number
    attributes: {
      label: string
      slug: string
      path: string
      static_path: {
        slug: string[]
      }
      bulletin: boolean
      resource: boolean
    }
  }[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

/**
 * Search and Sort get request for pages
 * @param path
 * @param param1
 * @returns
 */
export const searchSortQuery = async (
  pageParam = 1,
  { search, sort, parentPage, filter }: SearchFilter = arg
): Promise<InfinityPage> => {
  const queryObject: QueryObject = {}
  if (search) {
    queryObject.find = search
  }

  if (sort) {
    queryObject.sort = sort
  }

  if (parentPage) {
    queryObject.parent = parentPage
  }

  if (filter) {
    queryObject.filter = {
      [filter]: true,
    }
  }

  const query = stringify(
    {
      populate: {
        seo: {
          populate: {
            metaTitle: true,
            metaDescription: true,
            metaImage: '*',
          },
        },
      },
      filters: {
        $or: [
          {
            slug: {
              $containsi: search,
            },
          },
          {
            seo: {
              metaTitle: {
                $containsi: search,
              },
            },
          },
          {
            seo: {
              metaDescription: {
                $containsi: search,
              },
            },
          },
        ],
        seo: {
          metaTitle: {
            $notNull: true,
          },
        },
      },
      pagination: {
        page: pageParam,
        pageSize: 16,
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  const url = `${apiEndPoints.getPages}/${query ? '?' : ''}${query}`

  const json: SearchApi = await fetchApi(url)
  console.log({ json })
  const pagination: Pagination = json.meta.pagination
  const cards: CardProps[] = json.data.map((page) =>
    cardBuilder(page.attributes)
  )
  return {
    nextCursor:
      pagination.page + 1 <= pagination.pageCount
        ? pagination.page + 1
        : undefined,
    resultTotal: pagination.total || 0,
    page: {
      cards,
      hasMore: pagination.page + 1 <= pagination.pageCount,
    },
  }
}
