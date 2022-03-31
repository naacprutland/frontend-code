import { Story, Meta } from '@storybook/react/types-6-0';
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs';

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    breadcrumbs: [
        {
            path: '/',
            label: 'home'
        },
        {
            path: 'about',
            label: 'about'
        }
    ]
};

export const WhiteBackground = Template.bind({});
WhiteBackground.args = {
    breadcrumbs: [
        {
            path: '/',
            label: 'home'
        },
        {
            path: 'about',
            label: 'about'
        }
    ],
    style: "white"
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
    breadcrumbs: [
        {
            path: '/',
            label: 'home'
        },
        {
            path: 'about',
            label: 'about'
        }
    ],
    style: "dark"
};
