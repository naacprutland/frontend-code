import { PageSeo, GroupConfig } from '../interface/tinaForm'


const openGraph: GroupConfig = {
  label: 'Open Graph',
  name: 'openGraph',
  component: 'group',
  fields: [
    {
      label: 'url',
      name: 'url',
      component: 'text',
    },
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'description',
      name: 'description',
      component: 'textarea',
    },
    {
      label: 'Site Name',
      name: 'site_name',
      component: 'text',
    },
    {
      label: 'Images',
      name: 'images',
      component: 'group-list',
      fields: [
        {
          label: 'url',
          name: 'url',
          component: 'text',
        },
        {
          label: 'width',
          name: 'width',
          component: 'number',
          step: 100
        },
        {
          label: 'height',
          name: 'height',
          component: 'number',
          step: 100
        },
        {
          label: 'alt',
          name: 'alt',
          component: 'text',
        },
      ],
    }
  ]
}

export const seoFields: PageSeo = {
  label: 'Page SEO',
  name: 'pageSEO',
  description: 'The page seo fields',
  component: 'group',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'description',
      name: 'description',
      component: 'textarea',
    },
    {
      label: 'canonical',
      name: 'canonical',
      component: 'text',
    },
    openGraph
  ]
};