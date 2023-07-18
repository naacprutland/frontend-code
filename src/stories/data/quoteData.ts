import { QuoteBlockProps } from '../../components/QuoteBlock'
import { imageApi } from './cardData'

export const quoteData: QuoteBlockProps = {
  quote:
    'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
  statedBy: 'Martin Luther King Jr.',
  citeUrl: 'www.google.com',
}

export const quoteImgData: QuoteBlockProps = {
  ...quoteData,
  image: imageApi,
  imageAlt: 'library girl',
}
