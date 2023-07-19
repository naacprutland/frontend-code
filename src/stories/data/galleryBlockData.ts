import { GalleryBlockProps } from '../../components/GalleryBlock'
import { imageApi } from './cardData'

export const GalleryDataDefault: GalleryBlockProps = {
  position: 1,
  heading: 'Studio Event',
  headingPosition: 'center',
  style: 'none',
  images: Array(10)
    .fill({
      id: 0,
      src: imageApi,
      alt: 'name 1',
    })
    .map((v, i) => {
      return {
        ...v,
        id: i,
      }
    }),
}
