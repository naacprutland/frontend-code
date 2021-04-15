import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import type { Block, HeroBlock, TextBlock, DeckBlock } from '../interface/componentBlock'
import { HeroProps } from './HeroBlock'
import { TextBlockProps } from './TextBlock'
import { DeckBlockProps } from './DeckBlock'

const DynamicHero: ComponentType<HeroProps> = dynamic(() => import('./HeroBlock'))
const DynamicTextBlock: ComponentType<TextBlockProps> = dynamic(() => import('./TextBlock'))
const DynamicDeckBlock: ComponentType<DeckBlockProps> = dynamic(() => import('./DeckBlock'))

function DynamicComponent({ _template, ...props}: Block) {
  switch (_template) {
    case 'hero-block':
      return <DynamicHero {...props as HeroBlock}/>
    case 'text-block':
      return <DynamicTextBlock {...props as TextBlock}/>
    case 'deck-block':
      return <DynamicDeckBlock {...props as DeckBlock} />
    default :
      return null
  }

}

export default DynamicComponent