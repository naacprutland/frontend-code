import { Story, Meta } from '@storybook/react/types-6-0'
import EventTemplate, { EventTemplateProps } from '../../components/EventTemplate';
import { basicData } from '../data/eventTemplateData';

export default {
    title: "Templates/Event",
    component: EventTemplate,
} as Meta;

const Template: Story<EventTemplateProps> = (arg) => <EventTemplate {...arg} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = basicData;
