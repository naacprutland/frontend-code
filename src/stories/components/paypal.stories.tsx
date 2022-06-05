import { Story, Meta } from '@storybook/react/types-6-0';
import PayPal, { PayPalProps } from '../../components/PayPal'
import { defaultData, customButtonsData } from '../data/paypalData'

export default {
    title: "Components/Pay Pal",
    component: PayPal,
    argTypes: { onApprove: { action: 'clicked closed' } },
} as Meta;

const Template: Story<PayPalProps> = (args) => <PayPal {...args} />;

export const Default = Template.bind({});
Default.args = defaultData

export const CustomButton = Template.bind({});
CustomButton.args = customButtonsData