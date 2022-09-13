import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useCheckoutStore from '../store/useCheckoutStore'

interface Props {
  preview?: boolean
}

const defaultProp: Props = { preview: false }

const useRestrictedRoutes = (props: Props = defaultProp) => {
  const { preview } = props
  const router = useRouter()
  const checkoutState = useCheckoutStore()

  useEffect(() => {
    const path =
      typeof router.query?.slug === 'string'
        ? router.query?.slug
        : router.query?.slug?.join('/')
    if (!preview) {
      switch (path) {
        case 'checkout-confirmation':
          if (checkoutState.complete) {
            checkoutState.reset()
          } else {
            router.replace('/')
          }
          break
        case 'donation-confirmation':
          break
        default:
          break
      }
    }
  }, [router])
}

export default useRestrictedRoutes
