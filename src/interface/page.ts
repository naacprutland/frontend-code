import { BreadCrumbJsonLdProps, NextSeoProps } from 'next-seo'
import { HeroBlock, PageBlocks, Breadcrumbs } from './componentBlock'
import { PageResponseProps } from './pageResponse'
import { SiteConfig } from './siteConfig'
import { DehydratedState } from 'react-query'
import { ApiError } from '../lib/pageProps'

export interface PageTemplateProps
  extends Omit<PageResponseProps, 'pageStructure'> {
  pageSEO: NextSeoProps
  breadCrumbsSEO?: BreadCrumbJsonLdProps
  pageStructure: PageBlocks
  preview?: boolean
}

export interface SearchPageTemplateProps
  extends Omit<PageResponseProps, 'pageStructure'> {
  pageSEO: NextSeoProps
  breadCrumbsSEO?: BreadCrumbJsonLdProps
  heroBlock: HeroBlock
  breadcrumbs?: Breadcrumbs
  pageStructure?: PageBlocks
}

export interface PageProps {
  formTitle: string
  preview: boolean
  notFound: boolean
  dehydratedState: DehydratedState
  config: SiteConfig | ApiError
  data: PageTemplateProps
}

export interface GetPageProps {
  props: PageProps
}
