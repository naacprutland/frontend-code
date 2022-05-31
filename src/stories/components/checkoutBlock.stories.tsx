import { Story, Meta } from '@storybook/react/types-6-0';

import CheckoutBlock, { CheckoutBlockProps } from '../../components/CheckoutBlock'
import {
    checkout
} from '../data/formData'
import { optionData, details, subscriptionOptions as membershipOptions } from '../data/checkout'
import { transformItemsToOptions } from '../../lib/transformProductItms';

export default {
    title: "Components/Checkout",
    component: CheckoutBlock
} as Meta;

const checkoutOptions = transformItemsToOptions(membershipOptions)

const Template: Story<CheckoutBlockProps> = (args) => <CheckoutBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    details,
    formData: checkout.sections || [],
    checkoutOptions,
    optionData,
    membershipOptions
}

export const WithQueryRenew = Template.bind({});
WithQueryRenew.args = {
    details,
    formData: checkout.sections,
    checkoutOptions,
    optionData,
    membershipOptions
}
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
WithQueryRegularAdult.args = {
    details,
    formData: checkout.sections,
    checkoutOptions,
    optionData,
    membershipOptions
}
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
WithQueryLifeTimeAdult.args = {
    details,
    formData: checkout.sections,
    checkoutOptions,
    optionData,
    membershipOptions
}
WithQueryLifeTimeAdult.parameters = {
    nextRouter: {
        path: "/checkout",
        asPath: "/checkout",
        query: {
            type: "life-time-adult",
        },
    },
};


