import { Story, Meta } from '@storybook/react/types-6-0';
import DividerBlock, { DividerBlockProps } from '../../components/DividerBlock'
import { primaryFooterData } from '../data/footerData'

export default {
  title: "Components/Divider Block",
  component: DividerBlock,
} as Meta;

const Template: Story<DividerBlockProps> = (arg) => <DividerBlock{...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = primaryFooterData;

export const Dark = Template.bind({});
Dark.args = {
    style: "dark"
}

export const White = Template.bind({});
White.args = {
    style: "white"
}