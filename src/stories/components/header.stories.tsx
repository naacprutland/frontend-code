import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { HeaderProps } from "../../components/Header";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (arg) => <Header {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    logo: {
        src: './Firefox_logo.svg',
        alt: 'logo'
    },
    mega_menu: [
      {
        label: 'about',
        path: '/about'
      },
      {
        label: 'blog',
        path: '/blog'
      }
    ],
    includeDarkMode: false,
    fixed: true,
    transparent: false
};

// './Firefox_logo.svg'