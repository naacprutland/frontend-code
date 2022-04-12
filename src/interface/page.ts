import { PageBlocks } from './componentBlock'
import { PageResponseProps } from './pageResponse'

export interface PageTemplateProps extends Omit<PageResponseProps, 'pageStructure'> {
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