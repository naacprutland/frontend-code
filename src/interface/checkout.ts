import { PurchaseItem } from './general'

export type FullOption = LifeOption | RenewOption | RegularOption

export interface PaymentType {
  label: string
  value: string
  isDisabled: boolean
}
export interface LifeOption {
  type: 'life'
  label: string
  value: string
  paymentType?: PaymentType[]
}

export interface RenewOption {
  type: 'renew'
  label: string
  value: string
  membershipType: Options[]
}

export interface Options {
  label: string
  value: string
}

export interface RegularOption extends Options {
  type: 'regular'
}

export interface MemberOptions {
  id: number | string
  type: 'regular' | 'life' | 'renew'
  slug: string
  title: string
  description?: string
  price: number
  isDisabled?: boolean
  paymentOptions?: PaymentOptions[]
  additionalFees?: PurchaseItem[]
}

export interface PaymentOptions {
  label: string
  slug: string
  installment: boolean
  price: number
  isDisabled?: boolean
}
