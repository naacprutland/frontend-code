import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { SelectProps } from '../../components/Select'

export default {
    title: "Components/Select",
    component: Select
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"test",
    name: "Names",
    label: "First Name",
    placeholder: "First Name",
    options: [
        {
            label: 'Sean',
            value: 'sean'
        },
        {
            label: 'Alana',
            value: 'alana'
        },
        {
            label: 'Eli',
            value: 'eli'
        },
        {
            label: 'Philip',
            value: 'philip'
        }
    ]
};
