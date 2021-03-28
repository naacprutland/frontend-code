import React from 'react'
import dynamic from 'next/dynamic'
import type { Block } from '../interface/componentBlock'
import { HeroProps } from './Hero'

const DynamicHero: React.ComponentType<HeroProps> = dynamic(() => import('./Hero'))

function DynamicComponent({ _template, ...props}: Block) {
  switch (_template) {
    case 'hero-block':
      return <DynamicHero {...props}/>
    default :
      return null
  }

}

export default DynamicComponent