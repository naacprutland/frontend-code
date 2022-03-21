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
  theme: "dark",
  imgOverlayPer: 30,
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
  detail:"Panda Ipsum the genus Ailurus and eat bamboo in the forest as three days. That is one of pandas, the cool tiny panda red panda bear giant panda is cute panda. Panda Ipsum the only ovulate once each year. During that ovulation period, they are only living species of the reasons.",
  backgroundImage,
  theme: "dark",
  horPos: "center",
  verPos: "bottom",
  textPos: "start",
  pagePos: 0,
};