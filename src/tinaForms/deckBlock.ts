import { imageFields } from './commonFields'

export const deckBlock = {
  label: "Deck Block",
  name: "Deck Block",
  key: 'deck-block',
  fields: [
    {
      label: "Cards",
      name: "cards",
      component: "group-list",
      fields: [
        {
          label: "Image",
          name: "image",
          description: "image",
          component: "group",
          fields: imageFields
        },
        { name: "title", label: "Title", component: "text" },
        { name: "copy", label: "Copy", component: "textarea" },
        { 
          name: "link",
          label: "Link",
          component: "group",
          fields: [
            {
              label: "Label",
              name: "label",
              component: "text"
            },
            {
              label: "Path",
              name: "path",
              component: "text"
            },
            {
              label: "External Link",
              name: "isExternal",
              component: "toggle",
              toggleLabels: false
            }
          ]
        }
      ]
    },
    { 
      name: "layout",
      label: "Layout",
      component: "select",
      options: [
        {
          value: 'rows',
          label: 'Rows'
        }, 
        {
          value: 'rowsReverse',
          label: 'Rows Reverse'
        },
        {
          value: 'alternatingRows',
          label: 'Alternating Rows'
        },
        {
          value: 'cards',
          label: 'Cards'
        }
      ]
    },
    {
      component: 'radio-group',
      direction: 'vertical',
      name: 'alternate',
      label: 'Alternate',
      description: 'Alternate rows',
      options: [
        { label: 'Odd', value: 'odds' },
        { label: 'Even', value: 'evens' },
      ],
    }
  ]
} 