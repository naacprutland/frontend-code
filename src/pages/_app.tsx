import dynamic from 'next/dynamic'
import { useState } from 'react'
import type { AppProps } from 'next/app'

const DynamicApp = dynamic(() => import('../components/App'))

const DynamicAppEditor =  dynamic(() => import('../components/AppEditor'))

const MyApp = (props: AppProps) => {
  const [editMode] = useState(true)

  return (
    <>
      {editMode ? <DynamicAppEditor {...props} /> : <DynamicApp {...props}/>}
    </>
  )
}

export default MyApp
