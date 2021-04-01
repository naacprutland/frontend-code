import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { HeaderProps } from '../components/Header'
import LogoImg from './assets/Firefox_logo.svg'

export default {
  title: 'Layout/Header',
  component: Header,
} as Meta;

const data: HeaderProps = { 
  logo: {
    src: LogoImg,
    alt: 'FireFox'
  }, 
  pageLinks: [
    {
      label: 'about',
      path: '/about'
    },
    {
      label: 'blog',
      path: '/blog'
    }
  ],
  includeDarkMode: false,
  fixed: false,
  transparent: false
}

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const baseHeader = Template.bind({});
baseHeader.args = {
  ...data
};

export const fixed = Template.bind({});
fixed.args = {
  ...data,
  fixed: true
};

export const transparent = Template.bind({});
transparent.args = {
  ...data,
  transparent: true
};

export const includeDarkMode = Template.bind({});
includeDarkMode.args = {
  ...data,
  includeDarkMode: true
}