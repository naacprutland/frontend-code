import type { AppProps } from 'next/app'
import App from '../components/App'

const MyApp = (props: AppProps) => (
  <App {...props} />
)

export default MyApp
