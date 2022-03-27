import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from '../../components/Card';
import { cardData } from '../data/cardData'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...cardData
};

export const DarkBoxShadow = Template.bind({});
DarkBoxShadow.args = {
  ...cardData,
  backShadow: "boxShadowDark",
};
DarkBoxShadow.parameters = {
  backgrounds: { default: 'dark' },
}
