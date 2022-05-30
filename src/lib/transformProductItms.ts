import {
  FullOption,
  MemberOptions,
  PaymentType,
  LifeOption,
  Options,
  RenewOption,
  RegularOption,
} from '../interface/checkout'

export const transformItemsToOptions = (
  items: MemberOptions[]
): FullOption[] => {
  const renewOption: RenewOption = {
    type: 'renew',
    label: 'Renew',
    value: 'renew',
    membershipType: [] as Options[],
  }
  const options: (RegularOption | LifeOption)[] = [] as (
    | RegularOption
    | LifeOption
  )[]

  for (const item of items) {
    if (item.type === 'renew') {
      renewOption.membershipType.push({
        label: item.title,
        value: item.slug,
      })
    } else {
      const opt = {
        type: item.type,
        label: item.title,
        value: item.slug,
      }

      const paymentType: PaymentType[] = item.paymentOptions?.map(
        ({ label, slug, isDisabled }) => ({
          label,
          isDisabled,
          value: slug,
        })
      )

      if (paymentType) (opt as LifeOption).paymentType = paymentType

      options.push(opt)
    }
  }

  return [...options, renewOption]
}
