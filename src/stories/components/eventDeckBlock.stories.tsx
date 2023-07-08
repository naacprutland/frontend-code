import { Story, Meta } from '@storybook/react/types-6-0'
import EventDeckBlock, { EventDeckBlockProps } from '../../components/EventDeckBlock';
import React from 'react';

export default {
    title: "Components/Event Deck Block",
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
    headingPos: "center",
    noResultsText: 'No Results',
    errorMessage: 'Unable Populate Event Results'
};

export const PastEvent = Template.bind({});
PastEvent.args = {
    position: 2,
    pastEvents: true,
    heading: 'Past Events',
    cards: [],
    style: 'none ',
    headingPos: "start",
    noResultsText: 'No Results',
    errorMessage: 'Unable Populate Event Results'
};