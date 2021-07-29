import originalUrl from '../assets/landscape.jpg'
import xSmallImg from '../assets/xsmall3x4_landscape.jpg'
import smallImg from '../assets/small_landscape.jpg'
import mediumImg from '../assets/medium_landscape.jpg'
import largeImg from '../assets/large_landscape.jpg'
import xLargeImg from '../assets/xlarge_landscape.jpg'

const src = {
  mime: "image/jpeg",
  size: 349.68,
  width: 2400,
  height: 1600,
  url: originalUrl,
  formats: {
    xsmall: {
      url: xSmallImg,
      width: 480,
      height: 300
    },
    small: {
      url: smallImg,
      width: 480,
      height: 300
    },
    medium: {
      url: mediumImg,
      width: 720,
      height: 300
    },
    large: {
      url: largeImg,
      width: 1020,
      height: 300
    },
    xlarge: {
      url: xLargeImg,
      width: 1980,
      height: 300
    },
  }
};

export const mediaImageData = {
  bgType: 'image',
  bgImg: {
    src,
    alt: "in the rain"
  },
  overlayOpacity: 25
};

export const mediaImagePlayData = {
  bgType: 'image',
  bgImg: {
    src,
    alt: "in the rain"
  },
  overlayOpacity: 25,
  youTubeVideo: {
    key: 'SUxD_hzWRWU',
    label: 'AMV'
  }
};