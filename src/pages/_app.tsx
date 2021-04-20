import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import useEditModeState from '../lib/hooks/editModeState'

const DynamicApp = dynamic(() => import('../components/App'))

const DynamicAppEditor =  dynamic(() => import('../components/AppEditor'))

const MyApp = (props: AppProps) => {
  const editMode = useEditModeState()

  return (
    <>
      {editMode ? <DynamicAppEditor {...props} /> : <DynamicApp {...props}/>}
    </>
  )
}

export default MyApp
