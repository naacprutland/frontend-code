import { Story, Meta } from '@storybook/react/types-6-0';

import OptionTypeSelector, { OptionsTypeSelectorProps } from '../../components/OptionTypeSelector'
import { checkoutOptions } from '../data/checkout'

export default {
    title: "Components/Option Type Selector",
    component: OptionTypeSelector,
    argTypes: { onUpdate: { action: 'update' } },
} as Meta;

const Template: Story<OptionsTypeSelectorProps> = (args) => <OptionTypeSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkoutOptions
};
