import { ArticleCardProps } from '../../components/ArticleCard'
import originalUrl from '../../../public/librarygirl.jpg'

const xSmallImg = originalUrl
const smallImg = originalUrl
const mediumImg = originalUrl
const largeImg = originalUrl
const xLargeImg = originalUrl

export const basicData: ArticleCardProps = {
  image: {
    src: {
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
        thumbnailXsmall: {
          url: xSmallImg as unknown as string,
          width: 480,
          height: 300,
        },
        thumbnailSmall: {
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
    },
    alt: 'blind flowers',
  },
  title: 'Honoring Dr. King with Voting Rights Action',
  copy: 'Panda Ipsum panda bear. Giant panda is cute tiny panda is cute panda. Panda Ipsum panda red panda bear giant panda is cute tiny dancing panda. Panda Ipsum panda cute panda. Board panda eat bamboo in the reasons why the cool ipsum eating bamboo leaves. Red panda likes great panda dancing bear. It is the forest as early as three days. That is cute panda. Panda Ipsum the family Ailuridae. Panda, panda, panda, panda ipsum with.',
  link: {
    label: 'Read On',
    path: 'https://www.google.com',
    isExternal: true,
  },
  badges: [
    {
      label: 'history',
      colorScheme: 'secondary5',
    },
    {
      label: 'blm',
      colorScheme: 'secondary3',
    },
  ],
}

export const noImageData: ArticleCardProps = {
  title: 'Honoring Dr. King with Voting Rights Action',
  copy: 'Panda Ipsum panda bear. Giant panda is cute tiny panda is cute panda. Panda Ipsum panda red panda bear giant panda is cute tiny dancing panda. Panda Ipsum panda cute panda. Board panda eat bamboo in the reasons why the cool ipsum eating bamboo leaves. Red panda likes great panda dancing bear. It is the forest as early as three days. That is cute panda. Panda Ipsum the family Ailuridae. Panda, panda, panda, panda ipsum with.',
  link: {
    label: 'Read On',
    path: 'https://www.google.com',
    isExternal: true,
  },
  badges: [
    {
      label: 'history',
      colorScheme: 'secondary5',
    },
    {
      label: 'blm',
      colorScheme: 'secondary3',
    },
  ],
}

export const noImageNoLinkData: ArticleCardProps = {
  title: 'Honoring Dr. King with Voting Rights Action',
  copy: 'Panda Ipsum panda bear. Giant panda is cute tiny panda is cute panda. Panda Ipsum panda red panda bear giant panda is cute tiny dancing panda. Panda Ipsum panda cute panda. Board panda eat bamboo in the reasons why the cool ipsum eating bamboo leaves. Red panda likes great panda dancing bear. It is the forest as early as three days. That is cute panda. Panda Ipsum the family Ailuridae. Panda, panda, panda, panda ipsum with.',
  badges: [
    {
      label: 'history',
      colorScheme: 'secondary5',
    },
    {
      label: 'blm',
      colorScheme: 'secondary3',
    },
  ],
}

export const noLinkData: ArticleCardProps = {
  image: {
    src: {
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
    },
    alt: 'blind flowers',
  },
  title: 'Honoring Dr. King with Voting Rights Action',
  copy: 'Panda Ipsum panda bear. Giant panda is cute tiny panda is cute panda. Panda Ipsum panda red panda bear giant panda is cute tiny dancing panda. Panda Ipsum panda cute panda. Board panda eat bamboo in the reasons why the cool ipsum eating bamboo leaves. Red panda likes great panda dancing bear. It is the forest as early as three days. That is cute panda. Panda Ipsum the family Ailuridae. Panda, panda, panda, panda ipsum with.',
  badges: [
    {
      label: 'history',
      colorScheme: 'secondary5',
    },
    {
      label: 'blm',
      colorScheme: 'secondary3',
    },
  ],
}
