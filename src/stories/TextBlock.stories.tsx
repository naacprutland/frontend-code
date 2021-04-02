import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextBlock, { TextBlockProps } from '../components/TextBlock'

const sampleText = `
  <h1>Hello World!</h1>
  <h2>Hello World!</h2>
  <h3>Hello World!</h3>
  <p>Panda Ipsum panda ipsum eating bamboo in the cool ipsum eating bamboo in the red panda cute panda. Board panda is believed that pandas roamed the genus Ailurus and the forest. Panda Ipsum the reasons why the reasons why the ipsum eating bamboo leaves. Red panda is one of the forest. Cute panda likes great panda is the forest. Cute panda likes great panda eat bamboo leaves. Red panda cute tiny panda loves being cool tiny panda loves leaves to dance and eat bamboo leaves. Red panda ipsum with giant panda loves being cool tiny dancing bear. It is cute panda.</p>
  <p></p>
  <p>Panda Ipsum panda ipsum eating bamboo in the cool ipsum eating bamboo in the red panda cute panda. Board panda is believed that pandas roamed the genus Ailurus and the forest. Panda Ipsum the reasons why the reasons why the ipsum eating bamboo leaves. Red panda is one of the forest. Cute panda likes great panda is the forest. Cute panda likes great panda eat bamboo leaves. Red panda cute tiny panda loves being cool tiny panda loves leaves to dance and eat bamboo leaves. Red panda ipsum with giant panda loves being cool tiny dancing bear. It is cute panda.</p>
  <p></p>
  <ul>
    <li>panda</li>
    <li>red panda</li>
    <li>giant panda</li>
    <li>bamboo</li>
  </ul>
  <p></p>
  <ol>
    <li>dog</li>
    <li>cats</li>
    <li>pandas</li>
    <li>tigers</li>
  </ol>
  <p>Panda Ipsum panda ipsum eating bamboo in the cool ipsum eating bamboo in the red panda cute panda. Board panda is believed that pandas roamed the genus Ailurus and the forest. Panda Ipsum the reasons why the reasons why the ipsum eating bamboo leaves. Red panda is one of the forest. Cute panda likes great panda is the forest. Cute panda likes great panda eat bamboo leaves. Red panda cute tiny panda loves being cool tiny panda loves leaves to dance and eat bamboo leaves. Red panda ipsum with giant panda loves being cool tiny dancing bear. It is cute panda.</p>
`

export default {
  title: "Blocks/Text Block",
  component: TextBlock,
} as Meta;

const Template: Story<TextBlockProps> = (args) => <TextBlock {...args} />;

export const textWithCta = Template.bind({});
textWithCta.args = {
  richText: sampleText,
  variant: 'solid',
  groupPosition: 'start',
  colorScheme: 'purple',
  cta: [
    {
      label: "Button",
      link: "/about",
      external: false
    }, 
    {
      label: "Button",
      link: "https://www.google.com/",
      external: true
    },
    {
      label: "Button",
      link: "/about",
      external: false
    },
    {
      label: "Button",
      link: "/about",
      external: false
    },
  ],
};