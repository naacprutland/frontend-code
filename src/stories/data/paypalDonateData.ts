import { PaypalDonateProps } from '../../components/PaypalDonate'
import { Image } from '../../interface/generalApi'
import originalUrl from '../../../public/librarygirl.jpg'

const image: Image = {
  mime: 'image/jpeg',
  size: 349.68,
  width: 2400,
  height: 1600,
  url: originalUrl as unknown as 'string',
  formats: {
    large: {
      url: originalUrl as unknown as 'string',
      width: 200,
      height: 200,
    },
    xlarge: {
      url: originalUrl as unknown as 'string',
      width: 200,
      height: 200,
    },
    small: {
      url: originalUrl as unknown as 'string',
      width: 200,
      height: 200,
    },
    xsmall: {
      url: originalUrl as unknown as 'string',
      width: 200,
      height: 200,
    },
    medium: {
      url: originalUrl as unknown as 'string',
      width: 200,
      height: 200,
    },
    thumbnail: {
      url: originalUrl as unknown as 'string',
      width: 200,
      height: 200,
    },
  },
}

export const defaultData: PaypalDonateProps = {
  brandName: 'Rutland Area NAACP',
  heading: 'Sample Handing',
  image: {
    src: image,
    alt: 'sample img',
  },
  defaultValue: 10,
  fundingStyling: ['paypal', 'card'],
  clientId:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
}
