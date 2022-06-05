import { BuyBoxProps } from '../../components/BuyBox'
import { subscriptionOptions } from './checkout'

export const defaultData: BuyBoxProps = {
  brandName: 'Rutland Area NAACP',
  clientId:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
  additionalFees: [
    {
      label: 'PayPal Fee',
      amount: 1.2,
    },
  ],
  selectedItem: subscriptionOptions.find(
    (v) => v.slug === 'regular-adult-annual-membership'
  ),
  optionType: {
    isValid: true,
    values: { type: 'regular-adult-annual-membership' },
  },
  userData: undefined,
  disableBtn: false,
  fundingStyling: ['paypal', 'card'],
}

export const renewItemPriceData: BuyBoxProps = {
  ...defaultData,
  selectedItem: subscriptionOptions.find(
    (v) => v.slug === 'renew-youth-annual'
  ),
  optionType: {
    isValid: true,
    values: { type: 'renew', membershipType: 'renew-youth-annual' },
  },
}

export const itemsWithSelectedPaymentOptionData: BuyBoxProps = {
  ...defaultData,
  selectedItem: subscriptionOptions.find((v) => v.slug === 'life-time-adult'),
  optionType: {
    isValid: true,
    values: {
      type: 'life-time-adult',
      paymentType: 'life-time-adult-installment',
    },
  },
}
