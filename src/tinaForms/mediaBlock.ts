import { imageFields } from './commonFields'

export const mediaBlock = {
  label: "Media Block",
  name: "Media Block",
  key: 'media-block',
  defaultItem: {
    bgType: 'image',
    overlayOpacity: 35,
    blockSize: 'lg'
  },
  fields: [
    {
      component: 'radio-group',
      direction: 'vertical',
      name: 'bgType',
      label: 'Background Type',
      description: 'The type of background',
      options: [
        { label: 'Video', value: 'video' },
        { label: 'Image', value: 'image' },
      ],
    },
    {
      label: "Background Image",
      name: "bgImg",
      description: "The background Image",
      component: "group",
      fields: imageFields
    },
    {
      label: "Background Video",
      name: "bgVid",
      description: "The background Video",
      component: "group",
      fields: [
        {
          label: "Video Poster",
          name: "poster",
          description: "The placeholder for the video",
          component: "image",
          parse: media => `/${media.filename}`,
          uploadDir: () => '/public/',
          previewSrc: fullSrc => fullSrc.replace('/public', '')
        },
        {
          label: "Background Video",
          name: "bgVid",
          description: "The background Video",
          component: "group-list",
          fields: [
            {
              label: "Src",
              name: "src",
              component: "text"
            },
            { 
              name: "type",
              label: "Video Type",
              component: "select",
              options: [
                "mp4",
                "mov",
                "wmv",
                "webm",
                "avi"
              ]
            }
          ]
        }
      ]
    },
    {
      component: 'number',
      name: 'overlayOpacity',
      label: 'Overlay Opacity',
      description: 'Number of the overlay percentage',
      step: 1,
    },
    {
      component: 'radio-group',
      direction: 'horizontal',
      name: 'blockSize',
      label: 'Container Size',
      description: 'The size of the component',
      options: [
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'X-Large', value: 'xl' },
        { label: 'Full', value: 'full' },
      ],
    },
    {
      label: "Youtube Video",
      name: "youTubeVideo",
      description: "Youtube video info",
      component: "group",
      fields: [
        {
          label: "Video Key",
          name: "key",
          component: "text"
        },
        {
          label: "Label",
          name: "label",
          component: "text"
        },
      ]
    }
  ]
}