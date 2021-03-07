interface FieldConfig {
  name: string
  component: string;
  label?: string
}

interface GroupConfig {
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

type SeoFields = TextConfig | TextareaConfig | GroupConfig;

export interface PageSeo {
  label: string;
  name: string;
  description: string;
  component: 'group';
  fields: SeoFields[]
}