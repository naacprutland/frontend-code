import { FullOption } from "../../interface/checkout";

export const checkoutOptions: FullOption[] = [
    {
        type: 'regular',
        label: 'Youth Annual',
        value: '12'
    },
    {
        type: 'regular',
        label: 'Student Annual',
        value: '24'
    },
    {
        type: 'regular',
        label: 'Regular Adult Annual',
        value: '32'
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
        value: '92',
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
        value: '843',
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