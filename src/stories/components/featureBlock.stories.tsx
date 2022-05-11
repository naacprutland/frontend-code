import { Story, Meta } from '@storybook/react/types-6-0';
import FeatureBlock, { FeatureBlockProps } from '../../components/FeatureBlock';
import { cardData } from '../data/cardData'

export default {
    title: 'Components/Feature Block',
    component: FeatureBlock,
} as Meta;

const Template: Story<FeatureBlockProps> = (args) => <FeatureBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    heading: "Feature Block",
    headingAlign: 'center',
    ...cardData
};

