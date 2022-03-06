import { Story, Meta } from '@storybook/react/types-6-0'
import MobileMenu, { MobileMenuProps } from '../../components/MobileMenu'

export default {
  title: "Components/Mobile Menu",
  component: MobileMenu,
} as Meta;

const Template: Story<MobileMenuProps> = (arg) => <MobileMenu {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    ctas: [
        {
            label: 'Donate',
            path: '/donate',
            external: false,
            style: 'solid',
            color: 'prime1',
            textColor: 'white'
        },
        {
            label: 'Join Us',
            path: '/membership',
            external: false,
            style: 'solid',
            color: 'prime2',
            textColor: 'prime1'
        }
    ],
    megaMenu: [
      {
        label: 'about',
        path: '/about',
        external: false
      },
      {
        label: 'blog',
        path: '/blog',
        external: false
      }
    ],
    isOpen: true,
    onClose: () => console.log('close')
};
