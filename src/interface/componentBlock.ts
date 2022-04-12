import { HeroProps } from '../components/HeroBlock'
import { TextBlockProps } from '../components/TextBlock'
import { DeckBlockProps } from '../components/DeckBlock'
import { MediaBlockProps } from '../components/MediaBlock'
import { SearchSortProps } from '../components/SearchSortBlock'
import { HeroBlockApi } from './apiBlocks'

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

export type ResponseBlocks = HeroBlockApi

export type Block = HeroBlock | TextBlock | DeckBlock | MediaBlock | SearchSortBlock | ContactFormBlock

export type PageBlocks = Block[]