import { CardProps } from '../../components/Card'
import { ItemCardProps } from '../../components/ItemCard'
import originalUrl from '../../../public/librarygirl.jpg'
import { Image as ImageApi } from '../../interface/generalApi'

const xSmallImg = originalUrl
const smallImg = originalUrl
const mediumImg = originalUrl
const largeImg = originalUrl
const xLargeImg = originalUrl

export const imageApi: ImageApi = {
  mime: 'image/jpeg',
  size: 349.68,
  width: 2400,
  height: 1600,
  url: originalUrl as unknown as string,
  formats: {
    thumbnailLarge: {
      url: xSmallImg as unknown as string,
      width: 480,
      height: 300,
    },
    thumbnailMedium: {
      url: xSmallImg as unknown as string,
      width: 480,
      height: 300,
    },
    thumbnailSmall: {
      url: xSmallImg as unknown as string,
      width: 480,
      height: 300,
    },
    thumbnailXsmall: {
      url: xSmallImg as unknown as string,
      width: 480,
      height: 300,
    },
    xsmall: {
      url: xSmallImg as unknown as string,
      width: 480,
      height: 300,
    },
    small: {
      url: smallImg as unknown as string,
      width: 480,
      height: 300,
    },
    medium: {
      url: mediumImg as unknown as string,
      width: 720,
      height: 300,
    },
    large: {
      url: largeImg as unknown as string,
      width: 1020,
      height: 300,
    },
    xlarge: {
      url: xLargeImg as unknown as string,
      width: 1980,
      height: 300,
    },
  },
}
export const image = {
  src: imageApi,
  alt: 'blind flowers',
}

export const cardData: CardProps = {
  image,
  title: 'Honoring Dr. King with Voting Rights Action',
  copy: 'Panda Ipsum panda bear. Giant panda is cute tiny panda is cute panda. Panda Ipsum panda red panda bear giant panda is cute tiny dancing panda. Panda Ipsum panda cute panda. Board panda eat bamboo in the reasons why the cool ipsum eating bamboo leaves. Red panda likes great panda dancing bear. It is the forest as early as three days. That is cute panda. Panda Ipsum the family Ailuridae. Panda, panda, panda, panda ipsum with.',
  link: {
    label: 'More Info',
    path: 'https://www.google.com',
    isExternal: true,
  },
  backShadow: 'boxShadowLight',
  badge: {
    label: 'press release',
    colorScheme: 'secondary6',
  },
  date: '2022-03-24T17:14:27.816Z',
}

export const itemCardData: ItemCardProps = {
  title: 'Regular Adult Annual',
  subText1: '(Ages 21 & Older)',
  subText2: '$30 a year',
  link: {
    label: 'Join Us',
    path: '/',
    external: false,
  },
}

export const itemCardDetailData: ItemCardProps = {
  ...itemCardData,
  subText3: '$750 one time payment or annual payments of $75.',
}
