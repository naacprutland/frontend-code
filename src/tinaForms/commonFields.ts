export const ctaBtn = {
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

export const textPos = { 
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
}

export const imageFields = [
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
  }
]