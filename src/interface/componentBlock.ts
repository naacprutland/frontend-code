import { HeroProps } from '../components/HeroBlock'

interface ComponentBlock {
  "_template": string;
}

export interface HeroBlock extends ComponentBlock, HeroProps {
  "_template": 'hero-block'
}

export type Block = HeroBlock

export type PageBlocks = Block[]