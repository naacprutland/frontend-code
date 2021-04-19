import { seoFields } from './seo'
import { heroBlock } from './heroBlock'
import { textBlock } from './textBlock'
import { deckBlock } from './deckBlock'
import { mediaBlock } from './mediaBlock'

export const formOptions = {
  label: 'Home Page',
  fields: [
    seoFields,
    {
      label: "Page Sections",
      name: "pageStructure",
      component: "blocks",
      templates: {
        'hero-block': heroBlock,
        'text-block': textBlock,
        'deck-block': deckBlock,
        'media-block': mediaBlock
      },
    }
  ],
}