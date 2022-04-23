// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import HeroTwoBlock, { HeroTwoBlockProps } from '../../components/HeroTwoBlock'
import { heroData, eventData, detailTextData, titleOnly } from '../data/heroTwoBlockData'


export default {
    title: "Components/Hero Two Block",
    component: HeroTwoBlock,
  } as Meta

const Template: Story<HeroTwoBlockProps> = (args) => <HeroTwoBlock {...args} />

export const Primary = Template.bind({})
Primary.args = heroData

export const Event = Template.bind({})
Event.args = eventData

export const DetailText = Template.bind({})
DetailText.args = detailTextData

export const TitleOnly = Template.bind({})
TitleOnly.args = titleOnly