import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ContentLandingPage, { CLPProps } from '../components/ContentLandingPage'
import { src } from './data/mediaBlock'

export default {
  title: 'Layout/Content Landing Page',
  component: ContentLandingPage,
} as Meta;

const Template: Story<CLPProps> = (args) => <ContentLandingPage {...args} />;

const resultItem = {
  title: 'Test Item',
  slug: '/',
  description: 'Panda Ipsum panda bear. Giant panda bear. It is one of pandas, the family Ailuridae. Panda, panda, panda cute panda.',
  image: {
    src,
    alt: 'test'
  },
  page: {
    id: '5',
    slug: 'test',
    homePage: false,
    path: '/page/test'
  }
}
const arr = new Array(9).fill(resultItem).map((val, i) => ({ id: i, ...val}))

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 1, 
  totalPages: 1,
  totalResults: 4,
  results: arr,
  collectionType: 'articles'
};