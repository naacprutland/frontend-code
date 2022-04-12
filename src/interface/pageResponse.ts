import { ResponseBlocks } from './componentBlock';
import { SEO } from './seo'

export interface PageResponseProps {
  homePage: boolean;
  _id: string;
  id: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date
  path: string;
  category: null | unknown;
  static_path: { slug: string[] };
  keywords:{
    pages: [];
    _id: string;
    wordOrPhrase: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
  }[];
  slug: string;
  label: string;
  pageSEO: SEO;
  blocks?: ResponseBlocks[] | null;
}