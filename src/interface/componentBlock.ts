import { HeroProps } from '../components/HeroBlock'
import { TextBlockProps } from '../components/TextBlock'
import { DeckBlockProps } from '../components/DeckBlock'

interface ComponentBlock {
  "_template": string;
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

export type Block = HeroBlock | TextBlock | DeckBlock

export type PageBlocks = Block[]