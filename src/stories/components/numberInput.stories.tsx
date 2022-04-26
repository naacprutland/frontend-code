import { Story, Meta } from '@storybook/react/types-6-0';

import NumberInput, { NumberInputProps } from '../../components/NumberInput'

export default {
    title: "Components/Number Input",
    component: NumberInput
} as Meta;

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"test",
    name: "age",
    label: "Your Age",
    defaultValue: 30,
    minLength: {
        value: 18,
    },
    maxLength: {
        value: 50
    }
};

export const Error = Template.bind({});
Error.args = {
    id:"test",
    name: "age",
    label: "Your Age",
    isRequired: true,
    requiredMessage: 'Please fill in the form',
    errors: {
        "age": {
            types: {
                required: 'Please fill in the form'
            }
        } 
    }
};