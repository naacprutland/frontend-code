import { Story, Meta } from '@storybook/react/types-6-0';
import StackBlock, { StackBlockProps } from '../../components/StackBlock'
import { stackData } from '../data/stackData'

export default {
  title: "Components/StackBlock",
  component: StackBlock,
} as Meta;

const Template: Story<StackBlockProps> = (arg) => <StackBlock {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    heading: "Looking Towards the Future",
    headingAligned: "start",
    stacks: new Array(3).fill(stackData)
}

export const Reverse = Template.bind({});
Reverse.args = {
  heading: "Looking Towards the Future",
  headingAligned: "start",
  stacks: new Array(3).fill(stackData),
  reverse: true
}