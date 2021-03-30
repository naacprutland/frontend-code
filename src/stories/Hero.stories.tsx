import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Hero, { HeroProps } from '../components/Hero'

export default {
  title: "Blocks/Hero",
  component: Hero,
  argTypes: {
    
  }
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const ctaButtons = Template.bind({});
ctaButtons.args = {
  title: "Harte Hero",
  backgroundImage: {
    src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
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
    }
  ],
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
