import { Story, Meta } from '@storybook/react/types-6-0';

import FormBlock, { FormBlockProps } from '../../components/FormBlock'
import {
    formDataContactUS,
    fileAComplaint
} from '../data/formData'

export default {
    title: "Components/Form/FormBlock",
    component: FormBlock
} as Meta;

const Template: Story<FormBlockProps> = (args) => <FormBlock {...args} />;

export const ContactUs = Template.bind({});
ContactUs.args = formDataContactUS;

export const FileAComplaint = Template.bind({});
FileAComplaint.args = fileAComplaint;
