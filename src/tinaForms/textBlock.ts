import { ctaBtn, textPos } from './commonFields'

const colors: string[] = ["blue" , "cyan" , "gray" , "green" , "orange" , "pink" , "purple" , "red" , "teal" , "yellow" , "whiteAlpha" , "blackAlpha" , "linkedin" , "facebook" , "messenger" , "whatsapp" , "twitter" , "telegram"]
const variants: string[] = ["link", "outline", "solid", "ghost", "unstyled"]

export const textBlock = {
  label: "Text Block",
  name: "textBlock",
  key: 'hero-block',
  fields: [
    {
      name: 'richText',
      label: 'Body',
      description: 'The body text',
      component: 'html'
    },
    { 
      name: "groupPosition",
      label: "Group Position",
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
      name: "colorScheme",
      label: "Color Scheme",
      component: "select",
      options: colors
    },
    { 
      name: "variant",
      label: "Button Variant",
      component: "select",
      options: variants
    },
    ctaBtn,
    textPos
  ]
}