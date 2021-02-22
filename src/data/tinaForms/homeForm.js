export const formOptions = {
  label: 'Home Page',
  fields: [
    {
      name: 'Page Structure',
      description: 'Contact info',
      component: 'group',
      fields: [
        {
          name: 'Components',
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