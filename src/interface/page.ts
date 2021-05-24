import { SEO } from './seo'
import { PageBlocks } from './componentBlock'
export interface PageTemplateProps {
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