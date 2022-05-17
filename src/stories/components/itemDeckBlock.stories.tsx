import { Story, Meta } from '@storybook/react/types-6-0';
import ItemDeckBlock, { ItemDeckBlockProps } from '../../components/ItemDeckBlock';
import { itemCardData, itemCardDetailData } from '../data/cardData'

export default {
    title: 'Components/Item Deck Block',
    component: ItemDeckBlock,
} as Meta;

const Template: Story<ItemDeckBlockProps> = (args) => <ItemDeckBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    heading: 'Membership',
    headingAlign: 'center',
    cards: [
        ...new Array(3).fill(itemCardData),
        ...new Array(2).fill(itemCardDetailData),
    ]
}
