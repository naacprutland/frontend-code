import { Story, Meta } from '@storybook/react/types-6-0';
import DeckBlock, { DeckBlockProps } from '../../components/DeckBlock'
import { cardData } from '../data/cardData'

export default {
    title: "Components/Deck Block",
    component: DeckBlock,
} as Meta;

const Template: Story<DeckBlockProps> = (args) => <DeckBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    heading: 'News & Announcements',
    cards: new Array(4).fill(cardData),
    link: {
        label: "View More Articles",
        path: 'http://www.google.com',
        external: true
    }
};

export const OneCards = Template.bind({});
OneCards.args = {
    cards: new Array(1).fill(cardData)
};

export const FourCards = Template.bind({});
FourCards.args = {
    cards: new Array(4).fill(cardData)
};

export const SixteenCards = Template.bind({});
SixteenCards.args = {
    cards: new Array(16).fill(cardData)
};
