import { PaypalDonateBlockProps } from '../../components/PaypalDonateBlock'
import { imageApi } from './cardData'

export const defaultData: PaypalDonateBlockProps = {
  brandName: 'Rutland Area NAACP',
  heading: 'Sample Handing',
  image: {
    src: imageApi,
    alt: 'sample img',
  },
  placeholder: 'Enter An Amount',
  fundingStyling: ['paypal', 'card'],
  clientId:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
}
