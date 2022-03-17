// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Hero, { HeroProps } from '../../components/HeroBlock'
import { heroData } from '../data/heroBlockData'

export default {
  title: "Components/Hero Block",
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

export const Primary = Template.bind({})
Primary.args = heroData