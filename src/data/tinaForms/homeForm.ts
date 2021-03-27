import { seoFields } from './seo'
import { HeroBlock } from './heroBlock'

// const base = {
//   name: "customInput",
//   key: "label",
//   component: "group",
//   fields: [
//     { name: "label", label: "Label", component: "text" },
//     { name: "inputType", label: "Input Type", component: "text" },
//     { name: "autocomplete", label: "Autocomplete", component: "text" },
//   ],
// }

// export const customInputBlock = {
//   label: "Custom Input",
//   ...base,
// }

// export const nameInputBlock = {
//   label: "Name Input",
//   defaultItem: {
//     label: "Name",
//     inputType: "text",
//     autocomplete: "name",
//   },
//   ...base,
// }

// export const emailInputBlock = {
//   label: "Email Input",
//   defaultItem: {
//     label: "Email",
//     inputType: "text",
//     autocomplete: "email",
//   },
//   ...base,
// }

// export const phoneInputBlock = {
//   label: "Phone Input",
//   defaultItem: {
//     label: "Phone",
//     inputType: "text",
//     autocomplete: "tel",
//   },
//   ...base,
// }

// export const companyInputBlock = {
//   label: "Company Input",
//   defaultItem: {
//     label: "Company",
//     inputType: "text",
//     autocomplete: "organization",
//   },
//   ...base,
// }

// export const messageInputBlock = {
//   label: "Message Input",
//   defaultItem: {
//     label: "Message",
//     inputType: "textarea",
//     autocomplete: "",
//   },
//   ...base,
// }

// export const TitleBlock = {
//   label: "Title",
//   name: "title",
//   defaultItem: {
//     title: "",
//     center: false,
//     underline: true,
//   },
//   fields: [
//     { name: "title", label: "Title", component: "text" },
//     { name: "center", label: "Center", component: "html" },
//     { name: "underline", label: "Underline", component: "toggle" },
//   ],
// }

// export const ImageBlock = {
//   label: "Image",
//   name: "image",
//   key: "test",
//   defaultItem: {
//     image: "",
//   },
//   fields: [
//     {
//       label: "Image",
//       name: "image",
//       component: "image",
//       parse: filename => `../images/${filename}`,
//       uploadDir: () => `/content/images/`,
//       previewSrc: (formValues, fieldProps) => {
//         const pathName = fieldProps.input.name.replace("rawJson", "jsonNode")
//         const imageNode = get(formValues, pathName)
//         if (!imageNode || !imageNode.childImageSharp) return ""
//         return imageNode.childImageSharp.fluid.src
//       },
//     },
//   ],
// }

// export const ContentBlock = {
//   label: "Content",
//   name: "content",
//   key: "test",
//   defaultItem: {
//     content: "",
//     center: false,
//   },
//   fields: [
//     { name: "content", label: "Content", component: "markdown" },
//     { name: "center", label: "Center", component: "toggle" },
//   ],
// }

// export const FormBlock = {
//   label: "Form",
//   key: "name",
//   name: "form",
//   component: "group",
//   defaultItem: {
//     name: "Form",
//     recipient: "",
//     fields: [],
//   },
//   fields: [
//     { name: "name", label: "Name", component: "text" },
//     {
//       name: "recipient",
//       label: "Recipient",
//       description: "Form is sent via formspree.io.",
//       component: "text",
//     },
//     {
//       label: "Fields",
//       name: "fields",
//       component: "blocks",
//       templates: {
//         customInputBlock,
//         nameInputBlock,
//         emailInputBlock,
//         phoneInputBlock,
//         companyInputBlock,
//         messageInputBlock,
//       },
//     },
//   ],
// }


export const formOptions = {
  label: 'Home Page',
  fields: [
    seoFields,
    {
      label: "Page Sections",
      name: "pageStructure",
      component: "blocks",
      templates: {
        HeroBlock
      },
    }
  ],
}