import { HeroProps } from '../components/HeroBlock'
import { TextBlockProps } from '../components/TextBlock'
import { DeckBlockProps } from '../components/DeckBlock'
import { MediaBlockProps } from '../components/MediaBlock'

interface ComponentBlock {
  "_template": string;
  position?: number;
}

export interface HeroBlock extends ComponentBlock, HeroProps {
  "_template": 'hero-block'
}

export interface TextBlock extends ComponentBlock, TextBlockProps {
  "_template": 'text-block'
}

export interface DeckBlock extends ComponentBlock, DeckBlockProps {
  "_template": 'deck-block'
}

export interface MediaBlock extends ComponentBlock, MediaBlockProps {
  "_template": 'media-block'
}

export type Block = HeroBlock | TextBlock | DeckBlock | MediaBlock

export type PageBlocks = Block[]