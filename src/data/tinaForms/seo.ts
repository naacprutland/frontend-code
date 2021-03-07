import { PageSeo } from '../../interface/tinaForm'

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
    {
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
        }
      ]
    }
  ]
};