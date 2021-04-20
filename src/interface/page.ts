import { SEO } from './seo'
import { PageBlocks } from './componentBlock'
import { FormOptions } from '../tinaForms/contentPageForm'
export interface PageTemplateProps {
  pageSEO: SEO;
  pageStructure: PageBlocks;
}

export interface PageProps {
  formOptions?: FormOptions;
  file: {
    fileRelativePath: string;
    sha: string;
    data: PageTemplateProps;
  }
}

export interface PageEditorProps extends PageProps{
  preview: boolean;
}