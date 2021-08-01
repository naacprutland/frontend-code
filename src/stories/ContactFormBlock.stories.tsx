import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import ContactFormBlock from '../components/ContactFormBlock'

export default {
  title: 'Blocks/Contact Form Block',
  component: ContactFormBlock,
} as Meta;

const Template = (args) => <ContactFormBlock {...args} />;

export const BasicForm = Template.bind({});