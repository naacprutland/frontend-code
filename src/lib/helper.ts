import { CardProps } from "../components/Card"
import { ResultItem } from "../components/SearchSortBlock"

export const mapToCards = (results: ResultItem[], label: string): CardProps[] => {
  return results.map(val => {
    return {
      title: val.title,
      copy: val.description,
      image: val.image,
      link: {
        label,
        path: val?.page?.path,
        isExternal: false
      }
    }
  })
}


