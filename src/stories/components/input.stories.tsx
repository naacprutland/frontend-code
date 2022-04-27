import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '../../components/Input'
import { 
    inputDefault,
    inputPhone,
    inputDate,
    inputError
} from '../data/formData'

export default {
    title: "Components/Input",
    component: Input
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = inputDefault;

export const Phone = Template.bind({});
Phone.args = inputPhone;

export const Date = Template.bind({});
Date.args = inputDate;


export const Error = Template.bind({});
Error.args = inputError;