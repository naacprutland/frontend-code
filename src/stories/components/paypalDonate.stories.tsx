import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import PaypalDonate, { PaypalDonateBlockProps } from '../../components/PaypalDonateBlock';
import { defaultData } from '../data/paypalDonateData'

export default {
    title: 'Components/PaypalDonate',
    component: PaypalDonate,
} as Meta;

const Template: Story<PaypalDonateBlockProps> = (args) => <PaypalDonate {...args} />;

export const Basic = Template.bind({});
Basic.args = defaultData;