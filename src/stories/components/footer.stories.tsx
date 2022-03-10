import { Story, Meta } from '@storybook/react/types-6-0';
import Footer, { FooterProps } from '../../components/Footer'
import { primaryFooterData } from '../data/footerData'

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (arg) => <Footer {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = primaryFooterData;