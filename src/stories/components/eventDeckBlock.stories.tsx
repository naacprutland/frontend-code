import { Story, Meta } from '@storybook/react/types-6-0'
import EventDeckBlock, { EventDeckBlockProps } from '../../components/EventDeckBlock';
import React from 'react';

export default {
    title: "Components/EventDeckBlock",
    component: EventDeckBlock,
} as Meta;

const Template: Story<EventDeckBlockProps> = (arg) => <EventDeckBlock  {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    position: 2,
    heading: 'Upcoming Events',
    cards: [],
    style: 'none ',
    headingPos: "center"
};