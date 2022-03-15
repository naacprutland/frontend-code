
import { Story, Meta } from '@storybook/react/types-6-0';
import TextBlock, { TextBlockProps } from '../../components/TextBlock'
import { primaryFooterData } from '../data/footerData'

export default {
  title: "Blocks/Text Block",
  component: TextBlock,
} as Meta;

const Template: Story<TextBlockProps> = (arg) => <TextBlock {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = primaryFooterData;