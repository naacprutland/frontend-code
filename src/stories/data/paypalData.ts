import { PayPalProps } from '../../components/PayPal'

export const defaultData: PayPalProps = {
  clientId:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
  currency: 'USD',
  brandName: 'Rutland Area NAACP',
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
  style: [{ layout: 'vertical', label: 'checkout' }, { layout: 'horizontal' }],
  purchaseUnit: [
    {
      amount: {
        currency_code: 'USD',
        value: '3',
      },
    },
  ],
}

export const donateButtonsData: PayPalProps = {
  clientId:
    'AVtptSNrZtDYwfbt69rI9biLQ2FBLlOqPGaeWWR9eIdSaFbBrtqAToDsEVxAtQUQEv4nyX0eBsUcSIHP',
  fundingSources: ['paypal', 'card'],
  style: [{ layout: 'vertical', label: 'donate' }, { layout: 'horizontal' }],
  purchaseUnit: [
    {
      amount: {
        value: '1',
        currency_code: 'USD',
        breakdown: {
          item_total: {
            value: '1',
            currency_code: 'USD',
          },
        },
      },
      items: [
        {
          name: 'donation-example',
          quantity: '1',
          unit_amount: {
            currency_code: 'USD',
            value: '1',
          },
          category: 'DONATION',
        },
      ],
    },
  ],
}
