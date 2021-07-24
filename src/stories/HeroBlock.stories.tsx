import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Hero, { HeroProps } from '../components/HeroBlock'
// import originalUrl from './assets/jcs-chen-sGblr5yVXiM-jimmy_dean_toa_Ow_Azq8c_unsplash_ece9ad2bb1.jpg'
// import xSmallImg from './assets/xsmall_jcs-chen-sGblr5yVXiM-jimmy_dean_toa_Ow_Azq8c_unsplash_ece9ad2bb1.jpg'
import testImg1 from './assets/image2.jpg'
import tes from './assets/'

export default {
  title: "Blocks/Hero Block",
  component: Hero,
  argTypes: {
    imgOverlayPer: {
      control: {
        type:'range',
        min: 0,
        max: 100
      }
    }
  }
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const maxOfFourCta = Template.bind({});
maxOfFourCta.args = {
  title: "Harte Hero",
  backgroundImage: {
    src: {
      mime: "image/jpeg",
      size: 349.68,
      width: 2400,
      height: 1600,
      url: '',
      formats: {
        xsmall: {
          url: '',
          width: 480,
          height: 300
        }
      }
    },
    alt: "the city"
  },
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

export const subText = Template.bind({});
subText.args = {
  title: "Harte Hero",
  detail:"Panda Ipsum the genus Ailurus and eat bamboo in the forest as three days. That is one of pandas, the cool tiny panda red panda bear giant panda is cute panda. Panda Ipsum the only ovulate once each year. During that ovulation period, they are only living species of the reasons.",
  backgroundImage: {
    src: testImg1,
    alt: "the city"
  },
  theme: "dark",
  imgOverlayPer: 50,
  horPos: "center",
  verPos: "bottom",
  textPos: "start",
  pagePos: 0,
};
