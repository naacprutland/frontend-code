import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CtaList, { CTAListProps } from '../components/CtaList';

export default {
  title: 'Components/Cta List',
  component: CtaList,
} as Meta;

const Template: Story<CTAListProps> = (args) => <CtaList {...args} />;

const cta = [
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
]

export const Primary = Template.bind({});
Primary.args = {
  cta,
  groupPosition: 'start',
  size: "md",
  colorScheme: 'teal',
  variant: 'solid'
};


