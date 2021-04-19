import { getPageProps } from '../lib/pageProps'
import { PageTemplateProps, PageProps } from '../interface/page'
import dynamic from 'next/dynamic'
import { ComponentType, useState } from 'react'

const DynamicPlainPage: ComponentType<PageTemplateProps> = dynamic(() => import('../components/PageTemplate'))
const DynamicEditorPage: ComponentType<PageProps> = dynamic(() => import('../components/PageEditor'))


const Index = ({ file }: PageProps) => {
  const [editMode] = useState(true)

  return (
    <>
      {editMode ? <DynamicEditorPage file={file} /> 
      : <DynamicPlainPage {...file?.data}/>}
    </>
  )
}

 export const getStaticProps = async ({ preview, previewData }) =>
 getPageProps('home', preview, previewData);

export default Index
