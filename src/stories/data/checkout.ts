import { FullOption } from "../../interface/checkout";
import { OptionsData } from "../../interface/general";

export const checkoutOptions: FullOption[] = [
    {
        type: 'regular',
        label: 'Youth Annual',
        value: 'youth-annual'
    },
    {
        type: 'regular',
        label: 'Student Annual',
        value: 'student-annual'
    },
    {
        type: 'regular',
        label: 'Regular Adult Annual',
        value: 'regular-adult-annual'
    },
    {
        type: 'renew',
        label: 'Renew',
        value: 'renew',
        membershipType: [
            {
                label: 'Youth Annual',
                value: '64'
            },
            {
                label: 'Student Annual',
                value: '643'
            },
            {
                label: 'Adult Annual',
                value: '843'
            }
        ]
    },
    {
        type: 'life',
        label: 'Life Time Adult',
        value: 'life-time-adult',
        paymentType: [
            {
                label: '$75 Installment',
                value: 'installment',
                isDisabled: false
            },
            {
                label: 'One Time $750',
                value: 'once',
                isDisabled: false
            }
        ]
    },
    {
        type: 'life',
        label: 'Life Time Youth',
        value: 'life-time-youth',
        paymentType: [
            {
                label: '$50 Installment',
                value: 'installment',
                isDisabled: false
            },
            {
                label: 'One Time $400',
                value: 'once',
                isDisabled: false
            }
        ]
    }
]

export const optionData: OptionsData = {
    checkoutType: {
        label: 'Checkout Type',
        placeholder: 'Select an option type',
        requiredMessage: 'Please select a checkout type'
    },
    paymentType: {
        label: 'Payment Type',
        requiredMessage: 'Please select a payment type'
    },
    membershipType: {
        label: 'Membership type',
        placeholder: 'Select a Membership Type',
        requiredMessage: 'Please select a membership type'
    },
    membershipId: {
        label: 'Current Member Number',
        placeholder: 'Current Member Number',
        requireMessage: 'Please enter member number',
        subText: 'Add member number if known'
    }
}