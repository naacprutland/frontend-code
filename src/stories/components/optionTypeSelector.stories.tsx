import { Story, Meta } from '@storybook/react/types-6-0';
import { withQuery } from '@storybook/addon-queryparams';
import OptionTypeSelector, { OptionsTypeSelectorProps } from '../../components/OptionTypeSelector'
import { subscriptionOptions as membershipOptions, optionData } from '../data/checkout'
import { transformItemsToOptions } from '../../lib/transformProductItems';

export default {
    title: "Components/Option Type Selector",
    component: OptionTypeSelector,
    argTypes: { onUpdate: { action: 'update' } },
    decorators: [withQuery]
} as Meta;

const checkoutOptions = transformItemsToOptions(membershipOptions)
const Template: Story<OptionsTypeSelectorProps> = (args) => <OptionTypeSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkoutOptions,
    membershipOptions,
    optionData
}

export const WithQueryRenew = Template.bind({});
WithQueryRenew.args = {
    checkoutOptions,
    membershipOptions,
    optionData
}
WithQueryRenew.parameters = {
    query: {
        type: 'renew',
    },
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
    checkoutOptions,
    membershipOptions,
    optionData
}
WithQueryRegularAdult.parameters = {
    query: {
        type: 'regular-adult-annual-membership',
    },
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
    checkoutOptions,
    membershipOptions,
    optionData
}
WithQueryLifeTimeAdult.parameters = {
    query: {
        type: 'life-time-adult',
    },
    nextRouter: {
        path: "/checkout",
        asPath: "/checkout",
        query: {
            type: "life-time-adult",
        },
    },
};

export const WithQueryInvalidValue = Template.bind({});
WithQueryInvalidValue.args = {
    checkoutOptions,
    membershipOptions,
    optionData
}
WithQueryInvalidValue.parameters = {
    nextRouter: {
        path: "/checkout",
        asPath: "/checkout",
        query: {
            type: "wrong",
        },
    },
};
