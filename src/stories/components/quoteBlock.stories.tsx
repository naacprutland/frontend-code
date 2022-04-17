import { Story, Meta } from '@storybook/react/types-6-0';
import QuoteBlock, { QuoteBlockProps } from '../../components/QuoteBlock'

export default {
  title: "Components/Quote Block",
  component: QuoteBlock,
} as Meta;

const Template: Story<QuoteBlockProps> = (arg) => <QuoteBlock {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    statedBy: "Martin Luther King Jr.",
    citeUrl: "www.google.com",
}

// export const Reverse = Template.bind({});
// Reverse.args = stackDataReverse