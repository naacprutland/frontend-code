import { Story, Meta } from '@storybook/react/types-6-0';
import { withQuery } from '@storybook/addon-queryparams';
import OptionTypeSelector, { OptionsTypeSelectorProps } from '../../components/OptionTypeSelector'
import { checkoutOptions } from '../data/checkout'

export default {
    title: "Components/Option Type Selector",
    component: OptionTypeSelector,
    argTypes: { onUpdate: { action: 'update' } },
    decorators: [withQuery]
} as Meta;

const Template: Story<OptionsTypeSelectorProps> = (args) => <OptionTypeSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkoutOptions
}

export const WithQueryRenew = Template.bind({});
WithQueryRenew.args = {
    checkoutOptions
}
WithQueryRenew.parameters = {
    query: {
        type: 'renew',
    },
};
