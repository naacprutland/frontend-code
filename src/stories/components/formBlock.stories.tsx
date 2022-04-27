import { Story, Meta } from '@storybook/react/types-6-0';

import FormBlock, { FormBlockProps } from '../../components/FormBlock'
import { 
    formDataContactUS
} from '../data/formData'

export default {
    title: "Components/FormBlock",
    component: FormBlock
} as Meta;

const Template: Story<FormBlockProps> = (args) => <FormBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = formDataContactUS;
