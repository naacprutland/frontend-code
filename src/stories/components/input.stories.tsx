import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '../../components/Input'

export default {
    title: "Components/Input",
    component: Input
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"test",
    name: "first-name",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
};

export const Phone = Template.bind({});
Phone.args = {
    id:"test",
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "Phone Number",
};

export const Error = Template.bind({});
Error.args = {
    id:"test",
    name: "first-name",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
    isRequired: true,
    requiredMessage: 'Please fill in the form',
    errors: {
        "first-name": {
            types: {
                required: 'Please fill in the form'
            }
        } 
    }
};