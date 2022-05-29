import { Story, Meta } from '@storybook/react/types-6-0';

import CheckoutBlock, { CheckoutBlockProps } from '../../components/CheckoutBlock'
import {
    formDataContactUS,
} from '../data/formData'
import { checkoutOptions, optionData, details } from '../data/checkout'

export default {
    title: "Components/Checkout",
    component: CheckoutBlock
} as Meta;

const Template: Story<CheckoutBlockProps> = (args) => <CheckoutBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    details,
    formData: formDataContactUS.sections,
    checkoutOptions,
    optionData
}

export const WithQueryRenew = Template.bind({});
WithQueryRenew.args = {
    details,
    formData: formDataContactUS.sections,
    checkoutOptions,
    optionData
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
    formData: formDataContactUS.sections,
    checkoutOptions,
    optionData
}
WithQueryRegularAdult.parameters = {
    nextRouter: {
        path: "/checkout",
        asPath: "/checkout",
        query: {
            type: "regular-adult-annual",
        },
    },
};

export const WithQueryLifeTimeAdult = Template.bind({});
WithQueryLifeTimeAdult.args = {
    details,
    formData: formDataContactUS.sections,
    checkoutOptions,
    optionData
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


