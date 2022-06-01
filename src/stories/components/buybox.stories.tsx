import { Story, Meta } from '@storybook/react/types-6-0';
import BuyBox, { BuyBoxProps } from '../../components/BuyBox';
import { subscriptionOptions } from '../data/checkout'

export default {
    title: 'Components/Buy Box',
    component: BuyBox,
} as Meta;

const Template: Story<BuyBoxProps> = (args) => <BuyBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    additionalFees: [{
        label: 'PayPal Fee',
        amount: 1.20
    }],
    selectedItem: subscriptionOptions.find(v => v.slug === 'regular-adult-annual-membership'),
    optionType: {
        isValid: true,
        values: { type: 'regular-adult-annual-membership' }
    },
    userData: undefined
};

export const RenewItemPrice = Template.bind({});
RenewItemPrice.args = {
    additionalFees: [{
        label: 'PayPal Fee',
        amount: 1.20
    }],
    selectedItem: subscriptionOptions.find(v => v.slug === 'renew-youth-annual'),
    optionType: {
        isValid: true,
        values: { type: 'renew', membershipType: 'renew-youth-annual' }
    },
    userData: undefined
};

export const ItemsWithSelectedPaymentOption = Template.bind({});
ItemsWithSelectedPaymentOption.args = {
    additionalFees: [{
        label: 'PayPal Fee',
        amount: 1.20
    }],
    selectedItem: subscriptionOptions.find(v => v.slug === 'life-time-adult'),
    optionType: {
        isValid: true,
        values: { type: 'life-time-adult', paymentType: 'life-time-adult-installment' }
    },
    userData: undefined
};