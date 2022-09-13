import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useCheckoutStore from '../store/useCheckoutStore'

interface Props {
  preview?: boolean
}

const defaultProp: Props = { preview: true }

const useRestrictedRoutes = (props: Props = defaultProp) => {
  const { preview } = props
  const router = useRouter()
  const checkoutState = useCheckoutStore()

  useEffect(() => {
    const path =
      typeof router.query?.slug === 'string'
        ? router.query?.slug
        : router.query?.slug?.join('/')
    switch (path) {
      case 'checkout-confirmation':
        if (checkoutState.complete) {
          checkoutState.reset
        } else if (!preview) {
          router.replace('/')
        }
        break
      default:
        break
    }
  }, [router])
}

export default useRestrictedRoutes
