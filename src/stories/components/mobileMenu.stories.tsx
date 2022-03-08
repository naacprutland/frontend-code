import { Story, Meta } from '@storybook/react/types-6-0'
import MobileMenu, { MobileMenuProps } from '../../components/MobileMenu'
import { primary } from '../data/mobileMenuData';

export default {
  title: "Components/Mobile Menu",
  component: MobileMenu,
  argTypes: { onClose: { action: 'clicked closed' } },
} as Meta;

const Template: Story<MobileMenuProps> = (arg) => <MobileMenu {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = primary;
