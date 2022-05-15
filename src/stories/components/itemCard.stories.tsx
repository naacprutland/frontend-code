import { Story, Meta } from '@storybook/react/types-6-0';
import ItemCard, { ItemCardProps } from '../../components/ItemCard';
import { itemCardData, itemCardDetailData } from '../data/cardData'

export default {
    title: 'Components/Item Card',
    component: ItemCard,
} as Meta;

const Template: Story<ItemCardProps> = (args) => <ItemCard {...args} />;

export const Basic = Template.bind({});
Basic.args = itemCardData

export const Details = Template.bind({});
Details.args = itemCardDetailData