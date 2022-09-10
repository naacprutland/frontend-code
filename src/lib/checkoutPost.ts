import { fetchApi } from './util'
import apiEndPoints from './strapiApi'
import { RespForm } from '../components/FormBlock'
import { OnApproveData } from '@paypal/paypal-js/types/components/buttons'
import { MemberOptions } from '../interface/checkout'
import { UpdateResult } from '../interface/general'

const dataItems = [
  'addressLine1',
  'addressLine2',
  'city',
  'email',
  'firstName',
  'lastName',
  'phone',
  'pronoun',
  'state',
  'zipCode',
]
const formateRequest = (
  res: OnApproveData,
  userData: RespForm,
  membership_option: MemberOptions,
  optionTypeState: UpdateResult
) => {
  const { data, committeeAssignments } = Object.keys(userData.data).reduce(
    (acc, cur) => {
      if (dataItems.includes(cur)) {
        acc.data[cur] = userData.data[cur]
        return acc
      }
      acc.committeeAssignments[cur] = userData.data[cur]
      return acc
    },
    {
      data: {},
      committeeAssignments: {},
    }
  )

  return {
    ...res,
    ...data,
    committeeAssignments,
    membershipType: membership_option.title,
    type: optionTypeState?.values.paymentType || 'regular',
  }
}

export const checkoutSubmit = async (
  res: OnApproveData,
  userData: RespForm,
  membershipOption: MemberOptions,
  optionTypeState: UpdateResult
) => {
  const data = formateRequest(res, userData, membershipOption, optionTypeState)
  try {
    const response = await fetchApi(apiEndPoints.postApplication, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    })
    return {
      status: 'success',
      data: response,
    }
  } catch (e) {
    return {
      status: 'error',
      data: e,
    }
  }
}
