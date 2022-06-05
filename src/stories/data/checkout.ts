import { CheckoutBlockProps } from '../../components/CheckoutBlock'
import { FullOption, MemberOptions } from '../../interface/checkout'
import { Fieldset } from '../../interface/form'
import { OptionsData } from '../../interface/general'
import { transformItemsToOptions } from '../../lib/transformProductItms'
import { checkout } from './formData'

export const details = `<p>Payment through Paypal includes a $1.20 processing fee to cover what Paypal charges us.<p>
    <p>You can avoid the fee by mailing in the application with a check as payment.The application can be printed out from the below PDF and mailed to:</p>
    <p></p>
    <p>Rutland Area NAACP</p>
    <p>PO Box 311</p>
    <p> Wallingford, VT 05773</p >`

export const checkoutOptions: FullOption[] = [
  {
    type: 'regular',
    label: 'Youth Annual',
    value: 'youth-annual',
  },
  {
    type: 'regular',
    label: 'Student Annual',
    value: 'student-annual',
  },
  {
    type: 'regular',
    label: 'Regular Adult Annual',
    value: 'regular-adult-annual',
  },
  {
    type: 'renew',
    label: 'Renew',
    value: 'renew',
    membershipType: [
      {
        label: 'Youth Annual',
        value: 'renew-youth-annual',
      },
      {
        label: 'Student Annual',
        value: 'renew-student-annual',
      },
      {
        label: 'Adult Annual',
        value: 'renew-adult-annual',
      },
    ],
  },
  {
    type: 'life',
    label: 'Life Time Adult',
    value: 'life-time-adult',
    paymentType: [
      {
        label: '$75 Installment',
        value: 'life-time-adult-installment',
        isDisabled: false,
      },
      {
        label: 'One Time $750',
        value: 'life-time-adult-once',
        isDisabled: false,
      },
    ],
  },
  {
    type: 'life',
    label: 'Life Time Youth',
    value: 'life-time-youth',
    paymentType: [
      {
        label: '$50 Installment',
        value: 'life-time-youth-installment',
        isDisabled: false,
      },
      {
        label: 'One Time $400',
        value: 'life-time-youth-once',
        isDisabled: false,
      },
    ],
  },
]

export const optionData: OptionsData = {
  checkoutType: {
    label: 'Checkout Type',
    placeholder: 'Select an option type',
    requiredMessage: 'Please select a checkout type',
  },
  paymentType: {
    label: 'Payment Type',
    requiredMessage: 'Please select a payment type',
  },
  membershipType: {
    label: 'Membership type',
    placeholder: 'Select a Membership Type',
    requiredMessage: 'Please select a membership type',
  },
  membershipId: {
    label: 'Current Member Number',
    placeholder: 'Current Member Number',
    requireMessage: 'Please enter member number',
    subText: 'Add member number if known',
  },
}

export const subscriptionOptions: MemberOptions[] = [
  {
    id: 1,
    type: 'regular',
    title: 'Youth Annual',
    slug: 'youth-annual',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 20,
  },
  {
    id: 2,
    type: 'regular',
    title: 'Student Annual',
    slug: 'student-annual',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 18,
  },
  {
    id: 3,
    type: 'regular',
    title: 'Regular Adult Annual',
    slug: 'regular-adult-annual-membership',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 25,
  },
  {
    id: 4,
    type: 'renew',
    title: 'Youth Annual',
    slug: 'renew-youth-annual',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 20,
  },
  {
    id: 5,
    type: 'renew',
    title: 'Student Annual',
    slug: 'renew-student-annual',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 18,
  },
  {
    id: 6,
    type: 'renew',
    title: 'Adult Annual',
    slug: 'renew-adult-annual',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 25,
  },
  {
    id: 7,
    type: 'life',
    title: 'Life Time Adult',
    slug: 'life-time-adult',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 750,
    isDisabled: false,
    paymentOptions: [
      {
        label: '$75 Installment',
        slug: 'life-time-adult-installment',
        installment: true,
        price: 75,
        isDisabled: false,
      },
      {
        label: 'One Time $750',
        slug: 'life-time-adult-one-time',
        installment: false,
        price: 750,
        isDisabled: false,
      },
    ],
  },
  {
    id: 8,
    type: 'life',
    title: 'Life Time Youth',
    slug: 'life-time-youth',
    description:
      'Panda Ipsum panda dances. Population years ago. There are two main types of the cool ipsum with giant panda likes great panda and the only ovulate once each year.',
    price: 400,
    isDisabled: false,
    paymentOptions: [
      {
        label: '$50 Installment',
        slug: 'life-time-youth-installment',
        installment: true,
        price: 50,
        isDisabled: false,
      },
      {
        label: 'One Time $400',
        slug: 'life-time-youth-one-time',
        installment: false,
        price: 400,
        isDisabled: false,
      },
    ],
  },
]

export const defaultData: CheckoutBlockProps = {
  additionalFees: [
    {
      label: 'Paypal Fee',
      amount: 1.2,
    },
  ],
  details,
  formData: checkout.sections as Fieldset[],
  checkoutOptions: transformItemsToOptions(subscriptionOptions),
  optionData,
  membershipOptions: subscriptionOptions,
  fundingStyling: ['paypal', 'card'],
  payPalClientID:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
  payPalClientBrandName: 'Rutland Area NAACP',
}
