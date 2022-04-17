import { Story, Meta } from '@storybook/react/types-6-0';
import Stack, { StackProps } from '../../components/Stack'
import { stackData, stackDataReverse } from '../data/stackData'

export default {
  title: "Components/Stack",
  component: Stack,
} as Meta;

const Template: Story<StackProps> = (arg) => <Stack {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = stackData

export const Reverse = Template.bind({});
Reverse.args = stackDataReverse