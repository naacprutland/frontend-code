import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Hero, { HeroProps } from '../components/HeroBlock'
import { heroData, heroSubTextData } from './data/heroBlock'

export default {
  title: "Blocks/Hero Block",
  component: Hero,
  argTypes: {
    imgOverlayPer: {
      control: {
        type:'range',
        min: 0,
        max: 100
      }
    }
  }
} as Meta

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const maxOfFourCta = Template.bind({})
maxOfFourCta.args = heroData

export const subText = Template.bind({})
subText.args = heroSubTextData
