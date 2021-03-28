import { SEO } from './seo'
import { PageBlocks } from './componentBlock'

export interface HomePage {
  title: string;
  pageSEO: SEO;
  pageBlocks: PageBlocks;
}