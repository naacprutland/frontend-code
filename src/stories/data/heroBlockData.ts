import originalUrl from '../../../public/librarygirl.jpg'

const backgroundImage = {
  src: {
    mime: "image/jpeg",
    size: 349.68,
    width: 2400,
    height: 1600,
    url: originalUrl,
  },
  alt: "the city"
}

export const heroData = {
  title: "Harte Hero",
  backgroundImage,
  horPos: "center",
  verPos: "bottom",
  textPos: "start",
  pagePos: 0,
  cta: [
    {
      label: "Become A Member",
      link: "/about",
      external: false
    }, 
    // {
    //   label: "Button",
    //   link: "https://www.google.com/",
    //   external: true
    // },
    // {
    //   label: "Button",
    //   link: "/about",
    //   external: false
    // },
    // {
    //   label: "Button",
    //   link: "/about",
    //   external: false
    // },
  ],
};

export const heroSubTextData = {
  title: "Harte Hero",
  backgroundImage,
  horPos: "center",
  verPos: "bottom",
  textPos: "start",
  pagePos: 0,
};

export const heroDataSize = {
  title: "Harte Hero",
  backgroundImage,
  horPos: "center",
  verPos: "bottom",
  textPos: "center",
  pagePos: 0,
  size: 'contained'
};

export const heroDataSizeCTA = {
  title: "Harte Hero",
  backgroundImage,
  horPos: "center",
  verPos: "bottom",
  textPos: "start",
  pagePos: 0,
  cta: [
    {
      label: "Become A Member",
      link: "/about",
      external: false
    }, 
  ],
  size: 'contained'
};