import { HeroBlockApi } from './apiBlocks';
import { SEOApi } from './apiSeo';
import { ResponseBlocks } from './componentBlock';

export interface PageResponseProps {
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
  seo: SEOApi;
  blocks?: ResponseBlocks[] | null;
}


export interface SearchPageResponseProps {
  _id: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date
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
  label: string;
  seo: SEOApi;
  hero: HeroBlockApi;
  breadcrumbs: {
    id: number;
    style: "none" | "white" | "dark";
  }
}