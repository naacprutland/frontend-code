import { BreadCrumbJsonLdProps, NextSeoProps } from 'next-seo'
import { HeroBlock, PageBlocks, Breadcrumbs } from './componentBlock'
import { PageResponseProps } from './pageResponse'

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
  preview?: boolean
  formTitle?: string
  data: PageTemplateProps
}

export interface PageEditorProps extends PageProps {
  preview: boolean
}
