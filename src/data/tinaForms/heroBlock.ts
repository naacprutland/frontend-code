export const HeroBlock = {
  label: "Hero",
  name: "hero",
  key: 'hero-component',
  fields: [
    { name: "title", label: "Title", component: "text" },
    { name: "detail", label: "Detail", component: "textarea" },
    { 
      name: "theme",
      label: "Theme",
      component: "select",
      options: [{
        value: 'dark',
        label: 'Dark'
      }, 
      {
        value: 'light',
        label: 'Light'
      }] },
      { 
        name: "horPos",
        label: "Horizontal Position",
        component: "select",
        options: [{
          value: 'left',
          label: 'Left'
        }, 
        {
          value: 'right',
          label: 'Right'
        },
        {
          value: 'center',
          label: 'Center'
        }] },
        { 
          name: "horPos",
          label: "Horizontal Position",
          component: "select",
          options: [{
            value: 'left',
            label: 'Left'
        }, 
        {
          value: 'right',
          label: 'Right'
        },
        {
          value: 'center',
          label: 'Center'
        }] },
        { 
          name: "verPos",
          label: "Vertical Position",
          component: "select",
          options: [{
            value: 'top',
            label: 'Top'
          }, 
          {
            value: 'middle',
            label: 'Middle'
          },
          {
            value: 'bottom',
            label: 'Bottom'
        }] },
        { 
          name: "textPos",
          label: "Text Position",
          component: "select",
          options: [{
            value: 'start',
            label: 'Start'
          }, 
          {
            value: 'center',
            label: 'Center'
          },
          {
            value: 'end',
            label: 'End'
          }] 
        }
  ],
}