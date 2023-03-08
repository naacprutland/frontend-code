import { stringify } from 'qs'
import { fetchApi } from './util'
import apiEndPoints from './strapiApi'
import { InfinityPage, articleBuilder, cardBuilder } from './pagesSearch'
import { Pagination, SearchApi } from '../interface/apiSearch'
import { CardProps } from '../components/Card'
import { ResourceApiData } from '../interface/apiResoruce'
import { ArticleCardProps } from '../components/ArticleCard'

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

interface QueryBase {
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
  pagination: {
    page: number
    pageSize: number
  }
}

interface QueryObject extends QueryBase {
  populate: {
    seo: {
      populate: {
        metaTitle: boolean
        metaDescription: boolean
        metaImage: string
      }
    }
  }
}

interface ResourceQueryObject extends QueryBase {
  populate: {
    link: {
      populate: {
        label: boolean
        path: boolean
        external: boolean
      }
    }
    badges: boolean
    image: {
      populate: {
        src: boolean
        alt: boolean
      }
    }
    page: {
      populate: {
        seo: {
          populate: {
            metaTitle: boolean
            metaDescription: boolean
            metaImage: string
          }
        }
      }
    }
  }
  filters: {
    $or: object[]
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
      pageSize: 16,
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

/**
 * Search and Sort get request for pages
 * @param path
 * @param param1
 * @returns
 */
export const resourceQuery = async (
  pageParam = 1,
  { search, sort }: SearchFilter = arg
): Promise<InfinityPage> => {
  const queryObject: ResourceQueryObject = {
    populate: {
      link: {
        populate: {
          label: true,
          path: true,
          external: true,
        },
      },
      badges: true,
      image: {
        populate: {
          src: true,
          alt: true,
        },
      },
      page: {
        populate: {
          seo: {
            populate: {
              metaTitle: true,
              metaDescription: true,
              metaImage: '*',
            },
          },
        },
      },
    },
    filters: {
      $or: [
        {
          title: {
            $containsi: search,
          },
        },
        {
          copy: {
            $containsi: search,
          },
        },
        {
          link: {
            path: {
              $containsi: search,
            },
          },
        },
        {
          page: {
            slug: {
              $containsi: search,
            },
          },
        },
        {
          page: {
            seo: {
              metaTitle: {
                $containsi: search,
              },
            },
          },
        },
        {
          page: {
            seo: {
              metaDescription: {
                $containsi: search,
              },
            },
          },
        },
      ],
    },
    pagination: {
      page: pageParam,
      pageSize: 16,
    },
  }

  if (sort) {
    switch (sort) {
      case 'NEW':
        queryObject.sort = ['publishedAt:desc', 'page.publishedAt:desc']
        break
      case 'OLD':
        queryObject.sort = ['publishedAt:asc', 'page.publishedAt:asc']
        break
      case 'ASC':
        queryObject.sort = [
          'title:asc',
          'page.slug:asc',
          'page.seo.metaTitle:asc',
        ]
        break
      case 'DEC':
        queryObject.sort = [
          'title:desc',
          'page.slug:desc',
          'page.seo.metaTitle:desc',
        ]
        break
    }
  }

  const query = stringify(queryObject, {
    encodeValuesOnly: true,
  })

  const url = `${apiEndPoints.getResources}/${query ? '?' : ''}${query}`

  const json: ResourceApiData = await fetchApi(url)
  const pagination: Pagination = json.meta.pagination
  const cards: ArticleCardProps[] = json.data.map((page) =>
    articleBuilder(page.attributes)
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
