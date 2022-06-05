import { PayPalProps } from '../../components/PayPal'

export const defaultData: PayPalProps = {
  clientId:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
  currency: 'USD',
  brand_name: 'Rutland Area NAACP',
  style: [{ layout: 'vertical' }],
  purchaseUnit: [
    {
      amount: {
        currency_code: 'USD',
        value: '3',
      },
    },
  ],
}

export const customButtonsData: PayPalProps = {
  clientId:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
  fundingSources: ['paypal', 'card'],
  style: [{ layout: 'vertical', label: 'checkout' }, { layout: 'vertical' }],
  purchaseUnit: [
    {
      amount: {
        currency_code: 'USD',
        value: '3',
      },
    },
  ],
}
