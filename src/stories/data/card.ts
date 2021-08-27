import { CardProps } from '../../components/Card';
import originalUrl from '../assets/landscape.jpg'
import xSmallImg from '../assets/xsmall3x4_landscape.jpg'
import smallImg from '../assets/small_landscape.jpg'
import mediumImg from '../assets/medium_landscape.jpg'
import largeImg from '../assets/large_landscape.jpg'
import xLargeImg from '../assets/xlarge_landscape.jpg'


export const cardData: CardProps = {
  image: {
    src: {
      mime: "image/jpeg",
      size: 349.68,
      width: 2400,
      height: 1600,
      url: originalUrl as unknown as string,
      formats: {
        xsmall: {
          url: xSmallImg as unknown as string,
          width: 480,
          height: 300
        },
        small: {
          url: smallImg as unknown as string,
          width: 480,
          height: 300
        },
        medium: {
          url: mediumImg as unknown as string,
          width: 720,
          height: 300
        },
        large: {
          url: largeImg as unknown as string,
          width: 1020,
          height: 300
        },
        xlarge: {
          url: xLargeImg as unknown as string,
          width: 1980,
          height: 300
        },
      }
    },
    alt: 'blind flowers'
  },
  title: 'Card Title',
  copy: 'Panda Ipsum the forest. Cute panda and eat bamboo in the cool ipsum eating bamboo leaves. Red Panda. Female pandas roamed the only living species of the population has dwindled.',
  link: {
    label: 'More Info',
    path: 'https://www.google.com',
    isExternal: true
  }
}