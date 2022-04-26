import { Story, Meta } from '@storybook/react/types-6-0';

import TextArea, { TextAreaProps } from '../../components/TextArea'

export default {
    title: "Components/TextArea",
    component: TextArea
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"test",
    name: "description",
    label: "Description",
    placeholder: "Please enter in some details",
};

export const Error = Template.bind({});
Error.args = {
    id:"test",
    name: "description",
    label: "Description",
    placeholder: "Please enter in some details",
    isRequired: true,
    requiredMessage: 'Please fill in the form',
    errors: {
        "description": {
            types: {
                required: 'Please fill in the form'
            }
        } 
    }
};