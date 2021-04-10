import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardProps }  from '../components/Card'
import DeckBlock, { DeckBlockProps } from '../components/DeckBlock'
import textImg from './assets/sour-moha.jpg'

export default {
  title: "Blocks/Deck Block",
  component: DeckBlock,
} as Meta;

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