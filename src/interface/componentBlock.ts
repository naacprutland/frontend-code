import { HeroProps } from '../components/HeroBlock'
import { TextBlockProps } from '../components/TextBlock'
import { DeckBlockProps } from '../components/DeckBlock'
import { MediaBlockProps } from '../components/MediaBlock'

interface ComponentBlock {
  "template": string;
  position?: number;
}

export interface HeroBlock extends ComponentBlock, HeroProps {
  "template": 'hero-block'
}

export interface TextBlock extends ComponentBlock, TextBlockProps {
  "template": 'text-block'
}

export interface DeckBlock extends ComponentBlock, DeckBlockProps {
  "template": 'deck-block'
}

export interface MediaBlock extends ComponentBlock, MediaBlockProps {
  "template": 'media-block'
}

export type Block = HeroBlock | TextBlock | DeckBlock | MediaBlock

export type PageBlocks = Block[]