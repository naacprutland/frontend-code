import { SEO } from './seo'
import { PageBlock } from './componentBlock'

export interface HomePage {
  title: string;
  pageSEO: SEO;
  pageBlocks: PageBlock;
}