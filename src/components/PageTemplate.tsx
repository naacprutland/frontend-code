import { NextSeo } from 'next-seo'
import { PageTemplateProps } from '../interface/page'
import DynamicComponent from './DynamicComponent'

const PageTemplate = ({ pageSEO,  pageStructure }: PageTemplateProps) => (
    <>
      <NextSeo {...pageSEO} />
      {pageStructure?.map((cProps, i) => {
        return <DynamicComponent 
          key={`pageComp${i}`}
          {...cProps} position={i}/>
      })}
    </>
)

export default PageTemplate
