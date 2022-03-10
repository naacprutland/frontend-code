import { Story, Meta } from '@storybook/react/types-6-0'
import SearchDrawer, { SearchDrawerProps } from '../../components/SearchDrawer'

export default {
  title: "Components/Search Drawer",
  component: SearchDrawer,
  argTypes: { onClose: { action: 'clicked closed' } },
} as Meta;

const Template: Story<SearchDrawerProps> = (arg) => <SearchDrawer {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    isOpen: true
};