import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ArticleCard, { ArticleCardProps } from '../../components/ArticleCard'
import { basicData } from '../data/articleCardData'

export default {
    title: 'Components/Article Card',
    component: ArticleCard,
} as Meta;

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    ...basicData
};
