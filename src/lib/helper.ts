import { CardProps } from "../components/Card"
import { ResultItem } from "../components/SearchSortBlock"

export const mapToCards = (results: ResultItem[], label: string): CardProps[] => {
  return results.map(val => {
    return {
      title: val.title || val?.tile?.title || '',
      copy: val.description || val?.tile?.copy || '',
      image: val.image || val?.tile?.image || null,
      link: {
        label,
        path: val?.page?.path || val?.tile?.link?.path || '',
        isExternal: false
      }
    }
  })
}


