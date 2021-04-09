import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from '../components/Card';
import textImg from './assets/sour-moha.jpg'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

const cardData: CardProps = {
  image: {
    src: textImg,
    alt: 'blind flowers'
  },
  title: 'Card Title',
  copy: 'Panda Ipsum the forest. Cute panda and eat bamboo in the cool ipsum eating bamboo leaves. Red Panda. Female pandas roamed the only living species of the population has dwindled.',
  link: {
    label: 'More Info',
    path: 'https://www.google.com',
    isExternal: true
  }
}

export const column = Template.bind({});
column.args = {
  ...cardData
};

export const row = Template.bind({});
row.args = {
  ...cardData,
  layout: 'row'
};

export const rowReverse = Template.bind({});
rowReverse.args = {
  ...cardData,
  layout: 'row-reverse'
};

