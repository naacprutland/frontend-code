import apiEndPoints from './strapiApi'
import { stringify } from 'qs'
import { fetchApi } from './util'
import { SearchApi, Pagination } from '../interface/apiSearch'
import { CardProps } from '../components/Card'
import momentDate from 'moment'

export const cardBuilder = (data): CardProps => {
  return {
    title: data?.seo?.metaTitle,
    copy: data?.seo?.metaDescription,
    badge: {
      label: 'event',
      colorScheme: 'secondary5',
    },
    date: data.date as string,
    link: {
      label: 'Read On',
      path: data.path,
      isExternal: false,
    },
    image: {
      src: data?.image?.data?.attributes,
      alt: data?.imageAlt || data?.seo?.metaTitle,
    },
  }
}

export const getEvents = async (pageParam = 1, month: number) => {
  const query = stringify(
    {
      populate: {
        seo: {
          populate: {
            metaTitle: true,
            metaDescription: true,
          },
        },
        image: '*',
      },
      filters: {
        date: {
          $gte: month
            ? momentDate()
                .add(month, 'months')
                .startOf('month')
                .format('YYYY-MM-DD')
                .toString()
            : momentDate().add(month, 'months').format('YYYY-MM-DD').toString(),
          $lte: momentDate()
            .add(month, 'months')
            .endOf('month')
            .format('YYYY-MM-DD')
            .toString(),
        },
        seo: {
          metaTitle: {
            $notNull: true,
          },
          metaDescription: {
            $notNull: true,
          },
        },
      },
      pagination: {
        page: pageParam,
        pageSize: 2,
      },
    },
    {
      encodeValuesOnly: true,
    }
  )
  const json: SearchApi = await fetchApi(
    `${apiEndPoints.getEventPage}?$${query}`
  )
  const pagination: Pagination = json.meta.pagination
  const cards: CardProps[] = json.data.map((page) => {
    return cardBuilder(page.attributes)
  })
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
