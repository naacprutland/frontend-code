import apiEndPoints from './strapiApi'
import { stringify } from 'qs'
import { fetchApi } from './util'
import { SearchApi, DatumAttributes, Pagination } from '../interface/apiSearch'
import { CardProps } from '../components/Card'
import { ArticleCardProps } from '../components/ArticleCard'
import { ResourceData } from '../interface/apiResoruce'

export interface InfinityPage {
  nextCursor: number | undefined
  resultTotal: number | undefined
  page: {
    cards: CardProps[] | ArticleCardProps[]
    hasMore: boolean
  }
}

export const cardBuilder = (data: DatumAttributes): CardProps => {
  return {
    title: data?.seo?.metaTitle,
    copy: data?.seo?.metaDescription,
    link: {
      label: 'Read On',
      path: data.path,
      isExternal: false,
    },
    image: {
      src: data?.seo?.metaImage?.data?.attributes,
      alt: data?.seo?.metaTitle,
    },
  }
}

export const articleBuilder = ({
  title,
  copy,
  link,
  badges,
  image: apiImage,
  page,
}: ResourceData): ArticleCardProps => {
  let linkData = {
    label: 'Read On',
    ...link,
    isExternal: link?.external,
  }

  const image = {
    alt: apiImage?.alt,
    src: apiImage?.src?.data?.attributes,
  }

  if (page) {
    const alt = page.data?.attributes?.seo?.metaTitle
    const src = page.data?.attributes?.seo?.metaImage?.data?.attributes

    linkData = {
      ...linkData,
      path: page?.data?.attributes?.path,
      isExternal: false,
    }

    if (alt) {
      image.alt = alt
    }

    if (src) {
      image.src = src
    }
  }

  return {
    title: title || page?.data?.attributes?.seo?.metaTitle,
    copy: copy || page?.data?.attributes?.seo?.metaDescription,
    image,
    link: linkData,
    badges,
  }
}

export const getPageSearch = async (
  key: string | null,
  pageParam = 1
): Promise<InfinityPage> => {
  if (key === null) {
    return {
      nextCursor: undefined,
      resultTotal: null,
      page: {
        cards: [],
        hasMore: false,
      },
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
              $containsi: key,
            },
          },
          {
            seo: {
              metaTitle: {
                $containsi: key,
              },
            },
          },
          {
            seo: {
              metaDescription: {
                $containsi: key,
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
  const json: SearchApi = await fetchApi(`${apiEndPoints.getPages}?$${query}`)
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
