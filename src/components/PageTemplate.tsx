import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { PageTemplateProps } from '../interface/page'
import DynamicComponent from './DynamicComponent'

const PageTemplate = ({ pageSEO, breadCrumbsSEO,  pageStructure }: PageTemplateProps) => (
  <>
    <NextSeo {...pageSEO} />
    {breadCrumbsSEO && <BreadcrumbJsonLd {...breadCrumbsSEO} />}
    {pageStructure?.map((cProps, i) => (
      <DynamicComponent 
        key={`pageComp${i}`}
        {...cProps} position={i}/>
    ))}
  </>
)

export default PageTemplate
