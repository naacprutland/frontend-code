import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import type { Block, HeroBlock, TextBlock, DeckBlock, MediaBlock } from '../interface/componentBlock'
import { HeroProps } from './HeroBlock'
import { TextBlockProps } from './TextBlock'
import { DeckBlockProps } from './DeckBlock'
import { MediaBlockProps } from './MediaBlock'

const DynamicHero: ComponentType<HeroProps> = dynamic(() => import('./HeroBlock'))
const DynamicTextBlock: ComponentType<TextBlockProps> = dynamic(() => import('./TextBlock'))
const DynamicDeckBlock: ComponentType<DeckBlockProps> = dynamic(() => import('./DeckBlock'))
const DynamicMediaBlock: ComponentType<MediaBlockProps> = dynamic(() => import('./MediaBlock'))

function DynamicComponent({ template, ...props}: Block) {
  switch (template) {
    case 'hero-block':
      return <DynamicHero {...props as HeroBlock}/>
    case 'text-block':
      return <DynamicTextBlock {...props as TextBlock}/>
    // case 'deck-block':
    //   return <DynamicDeckBlock {...props as DeckBlock} />
    // case 'media-block': 
    //   return <DynamicMediaBlock {...props as MediaBlock} />
    default :
      return null
  }

}

export default DynamicComponent