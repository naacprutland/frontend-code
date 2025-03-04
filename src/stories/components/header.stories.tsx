import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { HeaderProps } from "../../components/Header";
import { primary } from '../data/mobileMenuData'

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (arg) => <Header {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    logo: {
        src: './logo.png',
        alt: 'logo'
    },
    ctas: primary.ctas,
    mega_menu: primary.megaMenu,
    includeDarkMode: false,
    fixed: true,
    transparent: false
};

export const Banners = Template.bind({});
Banners.args = {
    logo: {
        src: './logo.png',
        alt: 'logo'
    },
    ctas: primary.ctas,
    mega_menu: primary.megaMenu,
    includeDarkMode: false,
    fixed: true,
    transparent: false,
    banners: [
      {
        closeable: true,
        richText: '<p>Join the Fund Raiser Dinner! <a href="https://www.google.com">Sign up</a></p>',
        variation: 'info'
      }
    ]
};