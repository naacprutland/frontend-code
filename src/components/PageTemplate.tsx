import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { PageTemplateProps } from '../interface/page'
import DynamicComponent from './DynamicComponent'
import useRestrictedRoutes from '../hooks/useRestrictedRoutes'

const PageTemplate = ({ pageSEO, breadCrumbsSEO, pageStructure, preview }: PageTemplateProps) => {
  useRestrictedRoutes({ preview })
  return (
    <>
      <NextSeo {...pageSEO} />
      {breadCrumbsSEO && <BreadcrumbJsonLd {...breadCrumbsSEO} />}
      {pageStructure?.map((cProps, i) => (
        <DynamicComponent
          key={`pageComp${i}`}
          {...cProps} position={i} />
      ))}
    </>
  )
}

export default PageTemplate
