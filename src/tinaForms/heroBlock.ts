import { ctaBtn, textPos, imageFields } from './commonFields'

export const heroBlock = {
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
      fields: imageFields
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
    textPos,
    ctaBtn
  ],
}