interface FieldConfig {
  name: string;
  component: string;
  label?: string;
  fields?: SeoFields[];
}

interface NumberConfig {
  component: 'number'
  name: string
  label?: string
  description?: string
  step?: string | number
}

interface GroupListConfig {
  component: 'group-list'
  name: string;
  fields: SeoFields[];
  label?: string;
  defaultItem?: unknown | (() => unknown);
}

export interface GroupConfig {
  name: string
  component: 'group'
  label?: string
  fields: FieldConfig[]
}

interface TextConfig {
  component: 'text'
  name: string
  label?: string
  description?: string
  placeholder?: string
}

interface TextareaConfig {
  name: string
  component: 'textarea'
  label?: string
  description?: string
}

type SeoFields = TextConfig | TextareaConfig | GroupConfig | GroupListConfig | NumberConfig;

export interface Blocks {
  label: string;
  name: string;
  key: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fields: object[];
}

export interface PageSeo {
  label: string;
  name: string;
  description: string;
  component: 'group';
  fields: SeoFields[]
}

export interface PageStructure {
  label: "Page Sections";
  name: "pageStructure";
  component: "blocks";
  templates: {
    'hero-block': Blocks;
    'text-block': Blocks;
    'deck-block': Blocks;
    'media-block': Blocks;
  }
}