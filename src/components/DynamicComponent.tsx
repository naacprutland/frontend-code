import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import type { Block, HeroBlock, TextBlock, DeckBlock, MediaBlock, SearchSortBlock } from '../interface/componentBlock'
import { HeroProps } from './HeroBlock'
import { TextBlockProps } from './TextBlock'
import { DeckBlockProps } from './DeckBlock'
import { MediaBlockProps } from './MediaBlock'
import { SearchSortProps } from './SearchSortBlock'
import { StackBlockProps } from './StackBlock'
import { HeroTwoBlockProps } from './HeroTwoBlock'
import { FormBlockProps } from './FormBlock'
import { DividerBlockProps } from './DividerBlock'
import { BreadcrumbsProps } from './Breadcrumbs'
import { FeatureBlockProps } from './FeatureBlock'

const DynamicHero: ComponentType<HeroProps> = dynamic(() => import('./HeroBlock'))
const DynamicTextBlock: ComponentType<TextBlockProps> = dynamic(() => import('./TextBlock'))
const DynamicDeckBlock: ComponentType<DeckBlockProps> = dynamic(() => import('./DeckBlock'))
const DynamicMediaBlock: ComponentType<MediaBlockProps> = dynamic(() => import('./MediaBlock'))
const DynamicSearchSortBlock: ComponentType<SearchSortProps> = dynamic(() => import('./SearchSortBlock'))
const DynamicStackBlock: ComponentType<StackBlockProps> = dynamic(() => import('./StackBlock'))
const DynamicHeroTwoBlock: ComponentType<HeroTwoBlockProps> = dynamic(() => import('./HeroTwoBlock'))
const DynamicFormBlock: ComponentType<FormBlockProps> = dynamic(() => import('./FormBlock'))
const DynamicDividerBlock: ComponentType<DividerBlockProps> = dynamic(() => import('./DividerBlock'))
const DynamicBreadcrumbs: ComponentType<BreadcrumbsProps> = dynamic(() => import('./Breadcrumbs'))
const DynamicFeatureBlock: ComponentType<FeatureBlockProps> = dynamic(() => import('./FeatureBlock'))


function DynamicComponent({ template, ...props }: Block) {

  switch (template) {
    case 'blocks.hero-block':
      return <DynamicHero {...props as HeroBlock} />
    case 'blocks.text-block':
      return <DynamicTextBlock {...props as TextBlock} />
    case 'blocks.deck-block':
      return <DynamicDeckBlock {...props as DeckBlock} />
    case 'blocks.media-block':
      return <DynamicMediaBlock {...props as MediaBlock} />
    case 'blocks.search-sort-block':
      return <DynamicSearchSortBlock {...props as SearchSortBlock} />
    case 'blocks.stack-block':
      return <DynamicStackBlock {...props as StackBlockProps} />
    case "blocks.hero-two-block":
      return <DynamicHeroTwoBlock {...props as HeroTwoBlockProps} />
    case 'blocks.form-block':
      return <DynamicFormBlock {...props as FormBlockProps} />
    case 'blocks.divider-block':
      return <DynamicDividerBlock {...props as DividerBlockProps} />
    case 'blocks.breadcrumbs':
      return <DynamicBreadcrumbs {...props as BreadcrumbsProps} />
    case 'blocks.feature-block':
      return <DynamicFeatureBlock {...props as FeatureBlockProps} />
    default:
      return null
  }

}

export default DynamicComponent