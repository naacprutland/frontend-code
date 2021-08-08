import originalUrl from '../assets/landscape.jpg'
import xSmallImg from '../assets/xsmall3x4_landscape.jpg'
import smallImg from '../assets/small_landscape.jpg'
import mediumImg from '../assets/medium_landscape.jpg'
import largeImg from '../assets/large_landscape.jpg'
import xLargeImg from '../assets/xlarge_landscape.jpg'

const backgroundImage = {
  src: {
    mime: "image/jpeg",
    size: 349.68,
    width: 2400,
    height: 1600,
    url: originalUrl,
    formats: {
      xsmall3x4: {
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
  },
  alt: "the city"
}

export const heroData = {
  title: "Harte Hero",
  backgroundImage,
  theme: "dark",
  imgOverlayPer: 30,
  horPos: "center",
  verPos: "bottom",
  textPos: "start",
  pagePos: 0,
  cta: [
    {
      label: "Button",
      link: "/about",
      external: false
    }, 
    {
      label: "Button",
      link: "https://www.google.com/",
      external: true
    },
    {
      label: "Button",
      link: "/about",
      external: false
    },
    {
      label: "Button",
      link: "/about",
      external: false
    },
  ],
};

export const heroSubTextData = {
  title: "Harte Hero",
  detail:"Panda Ipsum the genus Ailurus and eat bamboo in the forest as three days. That is one of pandas, the cool tiny panda red panda bear giant panda is cute panda. Panda Ipsum the only ovulate once each year. During that ovulation period, they are only living species of the reasons.",
  backgroundImage,
  theme: "dark",
  imgOverlayPer: 30,
  horPos: "center",
  verPos: "bottom",
  textPos: "start",
  pagePos: 0,
};