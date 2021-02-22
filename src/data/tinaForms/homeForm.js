export const formOptions = {
  label: 'Home Page',
  fields: [
    {
      label: 'Page Structure',
      name: 'pageStructure',
      description: 'Contact info',
      component: 'group',
      fields: [
        {
          label: 'Components',
          name: 'components',
          component: 'list',
          field: {
            component: 'select',
            options: [
              'Component A',
              'Component B',
              'Component C',
              'Component D',
            ]
          },
        },
      ]
    },
    { 
      name: 'title',
      component: 'text' 
    }
  ],
}