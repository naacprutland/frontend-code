import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from '../components/Card';
import { cardData } from './data/card'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

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

