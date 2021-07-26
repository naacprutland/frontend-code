import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import DeckBlock, { DeckBlockProps } from '../components/DeckBlock'
import { cardData } from './data/card'

export default {
  title: "Blocks/Deck Block",
  component: DeckBlock,
} as Meta;

const Template: Story<DeckBlockProps> = (args) => <DeckBlock {...args} />;

export const oneCards = Template.bind({});
oneCards.args = {
  cards: new Array(1).fill(cardData)
};

export const fourCards = Template.bind({});
fourCards.args = {
  cards: new Array(4).fill(cardData)
};

export const sixCards = Template.bind({});
sixCards.args = {
  cards: new Array(6).fill(cardData)
};

export const rowsOfCards = Template.bind({});
rowsOfCards.args = {
  cards: new Array(6).fill(cardData),
  layout: 'rows'
};

export const reverseRowsOfCards = Template.bind({});
reverseRowsOfCards.args = {
  cards: new Array(6).fill(cardData),
  layout: 'rowsReverse'
};

export const alternatingRowsOfCards = Template.bind({});
alternatingRowsOfCards.args = {
  cards: new Array(6).fill(cardData),
  layout: 'alternatingRows'
};