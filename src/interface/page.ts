import { NextSeoProps } from 'next-seo';
import { PageBlocks } from './componentBlock'
import { PageResponseProps } from './pageResponse'

export interface PageTemplateProps extends Omit<PageResponseProps, 'pageStructure'> {
  pageSEO: NextSeoProps;
  pageStructure: PageBlocks;
}

export interface PageProps {
  preview?: boolean;
  formTitle?: string;
  data: PageTemplateProps;
}

export interface PageEditorProps extends PageProps{
  preview: boolean;
}