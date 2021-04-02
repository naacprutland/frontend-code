import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import type { Block, HeroBlock, TextBlock } from '../interface/componentBlock'
import { HeroProps } from './HeroBlock'
import { TextBlockProps } from './TextBlock'

const DynamicHero: ComponentType<HeroProps> = dynamic(() => import('./HeroBlock'))
const DynamicTextBlock: ComponentType<TextBlockProps> = dynamic(() => import('./TextBlock'))

function DynamicComponent({ _template, ...props}: Block) {
  switch (_template) {
    case 'hero-block':
      return <DynamicHero {...props as HeroBlock}/>
    case 'text-block':
      return <DynamicTextBlock {...props as TextBlock}/>
    default :
      return null
  }

}

export default DynamicComponent