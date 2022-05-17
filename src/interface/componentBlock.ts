import { HeroProps } from '../components/HeroBlock'
import { TextBlockProps } from '../components/TextBlock'
import { DeckBlockProps } from '../components/DeckBlock'
import { MediaBlockProps } from '../components/MediaBlock'
import { SearchSortProps } from '../components/SearchSortBlock'
import { BreadcrumbsApi, FeatureBlockApi, FormBlockApi, HeroBlockApi, HeroTwoBlockApi, ItemCardBlockApi, MediaBlockApi, StackBlockApi, TextBlockApi } from './apiBlocks'
import { StackBlockProps } from '../components/StackBlock'
import { HeroTwoBlockProps } from '../components/HeroTwoBlock'
import { FormBlockProps } from '../components/FormBlock'
import { DividerBlockProps } from '../components/DividerBlock'
import { BreadcrumbsProps } from '../components/Breadcrumbs'
import { FeatureBlockProps } from '../components/FeatureBlock'
import { ItemDeckBlockProps } from '../components/ItemDeckBlock'

interface ComponentBlock {
  "template": string;
  position?: number;
}

export interface HeroBlock extends ComponentBlock, HeroProps {
  "template": 'blocks.hero-block'
}

export interface TextBlock extends ComponentBlock, TextBlockProps {
  "template": 'blocks.text-block'
}

export interface DeckBlock extends ComponentBlock, DeckBlockProps {
  "template": 'blocks.deck-block'
}

export interface MediaBlock extends ComponentBlock, MediaBlockProps {
  "template": 'blocks.media-block'
}

export interface SearchSortBlock extends ComponentBlock, SearchSortProps {
  "template": 'blocks.search-sort-block'
}

export interface SearchSortRespBlock extends ComponentBlock {
  "template": 'blocks.search-sort-block',
  collection_type: string;
  parent_page: string;
}

export interface ContactFormBlock extends ComponentBlock {
  "template": 'contact-form-block'
}

export interface StackBlock extends ComponentBlock, StackBlockProps {
  "template": "blocks.stack-block"
}

export interface HeroTwoBlock extends ComponentBlock, HeroTwoBlockProps {
  "template": "blocks.hero-two-block"
}

export interface FormBlock extends ComponentBlock, FormBlockProps {
  "template": "blocks.form-block"
}

export interface DividerBlock extends ComponentBlock, DividerBlockProps {
  "template": "blocks.divider-block"
}

export interface Breadcrumbs extends ComponentBlock, BreadcrumbsProps {
  "template": "blocks.breadcrumbs"
}

export interface FeatureBlock extends ComponentBlock, FeatureBlockProps {
  "template": "blocks.feature-block"
}

export interface ItemDeckBlock extends ComponentBlock, ItemDeckBlockProps {
  "template": "blocks.item-deck-block"
}

export type ResponseBlocks = HeroBlockApi | BreadcrumbsApi | TextBlockApi | 
  MediaBlockApi | StackBlockApi | HeroTwoBlockApi | FormBlockApi | FeatureBlockApi | ItemCardBlockApi

export type Block = HeroBlock | TextBlock | DeckBlock | MediaBlock |
   SearchSortBlock | ContactFormBlock | StackBlock | HeroTwoBlock | 
   FormBlock | DividerBlock | Breadcrumbs | FeatureBlock | ItemDeckBlock

export type PageBlocks = Block[]