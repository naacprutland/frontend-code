import { SEO } from './seo'
import { PageBlocks } from './componentBlock'
export interface PageTemplateProps {
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
  pageStructure: PageBlocks;
}

export interface PageProps {
  preview?: boolean;
  formTitle?: string;
  file: {
    fileRelativePath: string;
    sha: string;
    data: PageTemplateProps;
  }
}

export interface PageEditorProps extends PageProps{
  preview: boolean;
}