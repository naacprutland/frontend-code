import { Story, Meta } from '@storybook/react/types-6-0';
import BuyBox, { BuyBoxProps } from '../../components/BuyBox';
import { defaultData, renewItemPriceData, itemsWithSelectedPaymentOptionData } from '../data/buyBoxData'

export default {
    title: 'Components/Buy Box',
    component: BuyBox,
    argTypes: { onSubmit: { action: 'payment approved' } },
} as Meta;

const Template: Story<BuyBoxProps> = (args) => <BuyBox {...args} />;

export const Default = Template.bind({});
Default.args = defaultData

export const RenewItemPrice = Template.bind({});
RenewItemPrice.args = renewItemPriceData

export const ItemsWithSelectedPaymentOption = Template.bind({});
ItemsWithSelectedPaymentOption.args = itemsWithSelectedPaymentOptionData