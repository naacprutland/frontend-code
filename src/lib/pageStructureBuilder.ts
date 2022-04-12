// import { ResultItem } from "../components/SearchSortBlock";
import { HeroProps } from "../components/HeroBlock";
import { HeroBlockApi } from "../interface/apiBlocks";
import { Block, HeroBlock, ResponseBlocks, SearchSortBlock, SearchSortRespBlock } from "../interface/componentBlock";
import { PageTemplateProps } from "../interface/page";
import { PageResponseProps } from "../interface/pageResponse";
// import { searchSortQuery } from "./strapiClient";
// import { mapToCards } from "../lib/helper";

// interface BlockBuilder {
//   'search-sort-block': (data: SearchSortRespBlock) => Promise<SearchSortBlock>
// }

// const blockBuilder: BlockBuilder = {
//   'search-sort-block': async ({ collection_type, template }: SearchSortRespBlock): Promise<SearchSortBlock> => {
//     const collectionType = collection_type
//     // const queryResults: ResultItem[] = await searchSortQuery(collectionType, { parentPage })
//     const results = []
//     return {
//       template,
//       collectionType,
//       results
//     }
//   }
// }

const heroBlockBuilder = ({
  __component,
  title, size, image, imageAlt,
  horPos, verPos, textPos, cta
}: HeroBlockApi): HeroBlock => ({
  template: __component as 'blocks.hero-block',
  title,
  size,
  backgroundImage: {
    src: image,
    alt: imageAlt
  },
  horPos,
  verPos,
  textPos,
  cta
})

const builders = {
  "blocks.hero-block": heroBlockBuilder
}


export async function buildPageStructure(data: PageResponseProps): Promise<PageTemplateProps> {
  const clone: PageResponseProps = JSON.parse(JSON.stringify(data))
  const clonePageStructure: ResponseBlocks[] = clone.blocks || []
  const pageStructure: Block[] = clonePageStructure.map(block => {
      if (block.__component in builders) {
        return builders[block.__component](block)
      }
      return block
  });
  
  return {
    ...clone,
    pageStructure
  }
}