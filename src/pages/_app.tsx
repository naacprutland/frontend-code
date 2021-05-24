import type { AppProps } from 'next/app'
import AppEditor from '../components/AppEditor'

const MyApp = (props: AppProps) => (
  <AppEditor {...props} />
)

export default MyApp
