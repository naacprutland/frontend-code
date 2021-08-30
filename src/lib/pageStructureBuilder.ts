import { ResultItem } from "../components/SearchSortBlock";
import { Block, ResponseBlocks, SearchSortBlock, SearchSortRespBlock } from "../interface/componentBlock";
import { PageTemplateProps } from "../interface/page";
import { PageResponseProps } from "../interface/pageResponse";
import { searchSortQuery } from "./strapiClient";

interface BlockBuilder {
  'search-sort-block': (data: SearchSortRespBlock) => Promise<SearchSortBlock>
}

const blockBuilder: BlockBuilder = {
  'search-sort-block': async ({ collection_type, template }: SearchSortRespBlock): Promise<SearchSortBlock> => {
    const collectionType = collection_type
    const results: ResultItem[] = await searchSortQuery(collectionType)
    return {
      template,
      collectionType,
      results
    }
  }
}

export async function buildPageStructure(data: PageResponseProps): Promise<PageTemplateProps> {
  const clone: PageResponseProps = JSON.parse(JSON.stringify(data))
  const clonePageStructure: ResponseBlocks[] = clone.pageStructure || []
  const pageStructure: Block[] = [];
  for (const blockComp of clonePageStructure) {
    if (blockComp.template in blockBuilder) {
      const resp: Block = await blockBuilder[blockComp.template](blockComp)
      pageStructure.push(resp)
    } else {
      pageStructure.push(blockComp as Block)
    }

  }
  
  return {
    ...clone,
    pageStructure
  }
}