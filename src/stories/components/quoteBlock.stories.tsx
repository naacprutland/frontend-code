import { Story, Meta } from '@storybook/react/types-6-0';
import QuoteBlock, { QuoteBlockProps } from '../../components/QuoteBlock'
import { quoteData, quoteImgData } from '../data/quoteData'

export default {
  title: "Components/Quote Block",
  component: QuoteBlock,
} as Meta;

const Template: Story<QuoteBlockProps> = (arg) => <QuoteBlock {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = quoteData

export const ImageBackground = Template.bind({})
ImageBackground.args = quoteImgData;
