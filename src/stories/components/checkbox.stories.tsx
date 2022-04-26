import { Story, Meta } from '@storybook/react/types-6-0';

import CheckBox, { CheckBoxProps } from '../../components/CheckBox'

export default {
    title: "Components/CheckBox",
    component: CheckBox
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"test",
    name: "Names",
    label: "All information is true and accurate to the best of my knowledge.",
    heading: "By checking the box below, you attest to the accuracy of the statement above. "
};

export const PlanCheckbox = Template.bind({});
PlanCheckbox.args = {
    id:"test",
    name: "Names",
    label: "All information is true and accurate to the best of my knowledge.",
};
