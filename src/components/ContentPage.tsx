import { PageTemplateProps, PageProps } from '../interface/page'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'


const DynamicPlainPage: ComponentType<PageTemplateProps> = dynamic(() => import('../components/PageTemplate'))
const DynamicEditorPage: ComponentType<PageProps> = dynamic(() => import('../components/PageEditor'))


const ContentPage = ({ preview, file, formTitle }: PageProps) => {
  return (
    <>
      {preview ? <DynamicEditorPage formTitle={formTitle} file={file} /> 
      : <DynamicPlainPage {...file?.data}/>}
    </>
  )
}

export default ContentPage
