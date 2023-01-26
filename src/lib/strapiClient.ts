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
  sort?: string[]
  parent?: string
  filters?: {
    $or: [
      {
        slug: {
          $containsi: string
        }
      },
      {
        seo: {
          metaTitle: {
            $containsi: string
          }
        }
      },
      {
        seo: {
          metaDescription: {
            $containsi: string
          }
        }
      }
    ]
    seo: {
      metaTitle: {
        $notNull: boolean
      }
    }
  }
  populate: {
    seo: {
      populate: {
        metaTitle: boolean
        metaDescription: boolean
        metaImage: string
      }
    }
  }
  pagination: {
    page: number
    pageSize: number
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
  { search, sort, filter }: SearchFilter = arg
): Promise<InfinityPage> => {
  const queryObject: QueryObject = {
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
      [filter]: true,
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
      pageSize: 1,
    },
  }

  if (sort) {
    switch (sort) {
      case 'NEW':
        queryObject.sort = ['publishedAt:desc']
        break
      case 'OLD':
        queryObject.sort = ['publishedAt:asc']
        break
      case 'ASC':
        queryObject.sort = ['slug:asc']
        break
      case 'DEC':
        queryObject.sort = ['slug:desc']
        break
    }
  }

  const query = stringify(queryObject, {
    encodeValuesOnly: true,
  })

  const url = `${apiEndPoints.getPages}/${query ? '?' : ''}${query}`

  const json: SearchApi = await fetchApi(url)
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
