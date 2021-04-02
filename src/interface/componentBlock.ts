import { HeroProps } from '../components/HeroBlock'
import { TextBlockProps } from '../components/TextBlock'

interface ComponentBlock {
  "_template": string;
}

export interface HeroBlock extends ComponentBlock, HeroProps {
  "_template": 'hero-block'
}

export interface TextBlock extends ComponentBlock, TextBlockProps {
  "_template": 'text-block'
}

export type Block = HeroBlock | TextBlock

export type PageBlocks = Block[]