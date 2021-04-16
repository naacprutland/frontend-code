export const HeroBlock = {
  label: "Hero",
  name: "hero",
  key: 'hero-block',
  fields: [
    { name: "title", label: "Title", component: "text" },
    { name: "detail", label: "Detail", component: "textarea" },
    { 
      name: "theme",
      label: "Theme",
      component: "select",
      options: [
        {
          value: 'dark',
          label: 'Dark'
        }, 
        {
          value: 'light',
          label: 'Light'
        }
      ] 
    },
    {
      name: "imgOverlayPer",
      label: "Image Overlay Percentage",
      description: "The overlay shading for the image",
      step: 1,
      default: 35,
      component: "number"
    },
    {
      label: "Background Image",
      name: "backgroundImage",
      description: "The hero background image",
      component: "group",
      fields: [
        {
          label: "Image Src",
          name: "src",
          description: "The src of the image",
          component: "image",
          parse: media => `/${media.filename}`,
          uploadDir: () => '/public/',
          previewSrc: fullSrc => fullSrc.replace('/public', '')
        },
        {
          label: "Image Alt",
          name: "alt",
          description: "The alt text for the image",
          component: "text"
        },
      ]
    },
    { 
      name: "horPos",
      label: "Horizontal Position",
      component: "select",
      options: [
        {
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
        }
      ]
    },
    { 
      name: "verPos",
      label: "Vertical Position",
      component: "select",
      options: [
        {
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
        }
      ]
    },
    { 
      name: "textPos",
      label: "Text Position",
      component: "select",
      options: [
        {
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
        }
      ] 
    },
    {
      label: 'Call To Action',
      name: 'cta',
      component: 'group-list',
      fields: [
        {
          label: "Label",
          name: "label",
          component: "text"
        },
        {
          label: "Link",
          name: "link",
          component: "text"
        },
        {
          label: "External Link",
          name: "external",
          component: "toggle",
          toggleLabels: false
        }
      ]

    }
  ],
}