// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Hero, { HeroProps } from '../../components/HeroBlock'
import { heroData, heroDataSize, heroDataSizeCTA } from '../data/heroBlockData'

export default {
  title: "Components/Hero Block",
  component: Hero,
  argTypes: {
    size: {
      options: ['full', 'contained'],
      control: {
        type:'radio',
      }
    },
    horPos: {
      options: ['left', 'right', 'center'],
      control: {
        type:'radio',
      }
    },
    verPos: {
      options: ['top', 'middle', 'bottom'],
      control: {
        type:'radio',
      }
    },
    textPos: {
      options: ['start', 'center', 'end'],
      control: {
        type:'radio',
      }
    }
  }
} as Meta

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const Primary = Template.bind({})
Primary.args = heroData

export const Contained = Template.bind({})
Contained.args = heroDataSize

export const ContainedCTA = Template.bind({})
ContainedCTA.args = heroDataSizeCTA