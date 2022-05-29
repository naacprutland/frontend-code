import { Story, Meta } from '@storybook/react/types-6-0';

import CheckoutBlock, { CheckoutBlockProps } from '../../components/CheckoutBlock'
import {
    formDataContactUS,
} from '../data/formData'
import { checkoutOptions } from '../data/checkout'

export default {
    title: "Components/Checkout",
    component: CheckoutBlock
} as Meta;

const Template: Story<CheckoutBlockProps> = (args) => <CheckoutBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    details: `<p>Payment through Paypal includes a $1.20 processing fee to cover what Paypal charges us.<p>
    <p>You can avoid the fee by mailing in the application with a check as payment.The application can be printed out from the below PDF and mailed to:</p>
    <p></p>
    <p>Rutland Area NAACP</p>
    <p>PO Box 311</p>
    <p> Wallingford, VT 05773</p >`,
    formData: formDataContactUS.sections,
    checkoutOptions
}

