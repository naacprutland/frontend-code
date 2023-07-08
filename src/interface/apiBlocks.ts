import { AlignItemsOptions } from './enums'
import { EventApi } from './eventApi'
import { StyleType } from './general'
import { Image } from './generalApi'
import { PageResponseProps } from './pageResponse'

export interface DividerBlockApi {
  __component: 'blocks.divider-block'
  id: number
  style?: 'none' | 'dark' | 'white'
}

export interface EventBlockBlockApi {
  __component: 'blocks.event-deck-block'
  id: number
  noResultsText: string
  errorMessage: string
  heading: string
  headingPosition: 'start' | 'center' | 'end'
  style: StyleType
  pastEvents: boolean
}

export interface SearchSortBlockApi {
  __component: 'blocks.search-sort-block'
  id: number
  collection_type: string
  filter?: string
}

export interface EventTemplateApi {
  __component: 'blocks.event-template'
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  rsvp?: string
  image: Image
  imageAlt: string
}
export interface PaypalDonateBlockApi {
  __component: 'blocks.pay-pal-donation'
  id: number
  paypal_client_brand_name: string
  heading: string
  default_donation_amount: number
  image: {
    src: Image
    alt: string
  }
  funding_styles: fundingStyle[]
  payPalClientID: string
  input_placeholder: string
}

export interface CheckoutBlockApi {
  __component: 'blocks.checkout-block'
  id: number
  details: string
  file_link: null
  form_data: FormBlockApi
  additional_fees: AdditionalFee[]
  payPalClientID: string
  paypal_client_brand_name: string
  resources: CheckoutResources
  funding_styles: fundingStyle[]
  membership_options: MembershipOption[]
}

export interface FeatureBlockApi {
  __component: 'blocks.feature-block'
  id: number
  heading: null | string
  headingAlign: null | 'start' | 'center' | 'end'
  imageAlt: null | string
  title: null | string
  copy: null | string
  date: null | Date
  image: null | Image
  page: PageResponseProps
  event: EventApi
  link: null | Cta
  badge: null | Badge
}

export interface ItemCardBlockApi {
  __component: string
  id: number
  heading: string
  headingAlign: AlignItemsOptions
  cards: ItemCard[]
}

export interface PageSearchBlockApi {
  __component: 'blocks.page-search-block'
  id: number
  slug: 'string'
}

export interface ItemCard {
  id?: number
  title: string
  subText1?: string
  subText2?: string
  subText3?: null | string
  link?: Cta2
}

export interface Badge {
  label: string
  colorScheme: string
}
export interface HeroBlockApi {
  __component: string
  id: number
  template: string
  title: string
  horPos: string
  verPos: string
  textPos: string
  size: string
  imageAlt: string
  cta: Cta[]
  image: Image
}

export interface Cta {
  id: number
  label: string
  link: string
  external: boolean
}

export interface BreadcrumbsApi {
  __component: 'blocks.breadcrumbs'
  id: number
  style: 'none' | 'white' | 'dark'
}

export interface TextBlockApi {
  __component: string
  id: number
  richText: string
  title: string
  textPosition: string
  buttonGroupPosition: string
  buttonColorScheme: string
  buttonVariant: string
  style: string
  cta: Cta[]
}

export interface MediaBlockApi {
  __component: string
  id: number
  heading: string
  text: string
  setBackgroundImage: boolean
  imageAlt: string
  textPosition: string
  youTubeVideo: YouTubeVideo
  image: Image
}
export interface YouTubeVideo {
  id: number
  key: string
  label: string
}

export interface StackBlockApi {
  __component: string
  id: number
  heading: string
  headingAligned: null
  reverse: null
  layers: Layer[]
}

export interface Layer {
  id: number
  title: string
  text: string
  textAlign: null
  reverse: null
  imageAlt: string
  Image: Image
}

export interface HeroTwoBlockApi {
  __component: string
  id: number
  title: string
  subText: string
  imageAlt: string
  ctaColorScheme: string
  cta: Cta2
  image: Image
}

export interface Cta2 {
  id: number
  label: string
  path: string
  external: boolean
}

export interface FormBlockApi {
  __component: string
  id: number
  page_form: PageForm
}

export interface PageForm {
  id: number
  label: string
  action: string
  createdAt: Date
  updatedAt: Date
  sections: Section[]
}

export interface Section {
  id: number
  subText: null
  label: string
  fields: Field[]
}

export interface Field {
  id: number
  type: string
  name: string
  span: string
  isRequired: null | boolean
  requiredMessage: null | string
  autocomplete: null | boolean
  isDisabled: null | boolean
  row: number
  label: string
  defaultValue: null | string
  min: null | Date
  max: null | Date
  checkbox: null | object
  radio: null | object
  pattern: null | Pattern
  minLength: null | MaxMinLength
  maxLength: null | MaxMinLength
  selectOptions: SelectOption[]
  radios: any[]
  placeholder: string
}

export interface Pattern {
  value: string
  message?: string
}

export interface MaxMinLength {
  value: number
  message?: string
}

export interface SelectOption {
  id: number
  label: string
  value: string
  selected: null
}

export interface AdditionalFee {
  id: number
  label: string
  amount: number
}

export interface CheckoutResources {
  id: number
  checkout_type_label: string
  checkout_type_placeholder: string
  checkout_type_required_message: string
  payment_type_label: string
  payment_type_required_message: string
  membership_type_label: string
  membership_type_placeholder: string
  membership_type_required_message: string
  membership_id_label: string
  membership_id_placeholder: string
  membership_id_require_message: string
  membership_id_subtext: string
}

export interface fundingStyle {
  id: number
  styles: string
}

export interface MembershipOption {
  id: number
  title: string
  slug: string
  type: string
  description: null
  price: number
  isDisabled: boolean
  createdAt: Date
  updatedAt: Date
  paymentOptions: PaymentOption[]
  additional_fees: any[]
}

export interface PaymentOption {
  id: number
  label: string
  slug: string
  installment: boolean
  price: number
  isDisabled: boolean
}
