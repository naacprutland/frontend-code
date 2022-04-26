import { Story, Meta } from '@storybook/react/types-6-0';

import Radios, { RadiosProps } from '../../components/Radios'

export default {
    title: "Components/Radios",
    component: Radios
} as Meta;

const Template: Story<RadiosProps> = (args) => <Radios {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"test",
    label: "Indicate type of Complaint:",
    name: "options",
    defaultValue: '2',
    radios: [
        {
            label: 'Civic engagement',
            value: '1'
        },
        {
            label: 'Environmental and Climate Justice ',
            value: '2'
        },
        {
            label: 'Health ',
            value: '3'
        },
        {
            label: 'Veteran Issues ',
            value: '4'
        }
    ]
};


export const Error = Template.bind({});
Error.args = {
    id:"test",
    label: "Indicate type of Complaint:",
    name: "options",
    radios: [
        {
            label: 'Civic engagement',
            value: '1'
        },
        {
            label: 'Environmental and Climate Justice ',
            value: '2'
        },
        {
            label: 'Health ',
            value: '3'
        },
        {
            label: 'Veteran Issues ',
            value: '4'
        }
    ],
    errors: {
        "options": {
            types: {
                required: 'Please fill in the form'
            }
        } 
    }
};