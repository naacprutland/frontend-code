import { Story, Meta } from '@storybook/react/types-6-0';
import { withQuery } from '@storybook/addon-queryparams';
import OptionTypeSelector, { OptionsTypeSelectorProps } from '../../components/OptionTypeSelector'
import { checkoutOptions, optionData } from '../data/checkout'

export default {
    title: "Components/Option Type Selector",
    component: OptionTypeSelector,
    argTypes: { onUpdate: { action: 'update' } },
    decorators: [withQuery]
} as Meta;

const Template: Story<OptionsTypeSelectorProps> = (args) => <OptionTypeSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkoutOptions,
    optionData
}

export const WithQueryRenew = Template.bind({});
WithQueryRenew.args = {
    checkoutOptions,
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
    optionData
}
WithQueryRegularAdult.parameters = {
    query: {
        type: 'regular-adult-annual',
    },
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
    checkoutOptions,
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
