import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import useEditModeState from '../lib/hooks/editModeState'
import { Provider } from 'next-auth/client'

const DynamicApp = dynamic(() => import('../components/App'))

const DynamicAppEditor =  dynamic(() => import('../components/AppEditor'))

const DynamicAppSet = (props: AppProps) => {
  const editMode = useEditModeState()

  return (<>
    {editMode ? <DynamicAppEditor {...props} /> : <DynamicApp {...props}/>}
  </>)
}

const MyApp = (props: AppProps) => (
  <Provider session={props?.pageProps?.session}>
    <DynamicAppSet {...props} />
  </Provider>
)

export default MyApp
