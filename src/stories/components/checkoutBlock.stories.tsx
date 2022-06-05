import { Story, Meta } from '@storybook/react/types-6-0';

import CheckoutBlock, { CheckoutBlockProps } from '../../components/CheckoutBlock'
import { defaultData } from '../data/checkout'


export default {
    title: "Components/Checkout",
    component: CheckoutBlock
} as Meta;

const Template: Story<CheckoutBlockProps> = (args) => <CheckoutBlock {...args} />;

export const Default = Template.bind({});
Default.args = defaultData

export const WithQueryRenew = Template.bind({});
WithQueryRenew.args = defaultData
WithQueryRenew.parameters = {
    nextRouter: {
        path: "/checkout",
        asPath: "/checkout",
        query: {
            type: "renew",
        },
    },
};

export const WithQueryRegularAdult = Template.bind({});
WithQueryRegularAdult.args = defaultData
WithQueryRegularAdult.parameters = {
    nextRouter: {
        path: "/checkout",
        asPath: "/checkout",
        query: {
            type: "regular-adult-annual-membership",
        },
    },
};

export const WithQueryLifeTimeAdult = Template.bind({});
WithQueryLifeTimeAdult.args = defaultData
WithQueryLifeTimeAdult.parameters = {
    nextRouter: {
        path: "/checkout",
        asPath: "/checkout",
        query: {
            type: "life-time-adult",
        },
    },
};


