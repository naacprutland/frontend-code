import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import MediaBlock, { MediaBlockProps } from '../components/MediaBlock'
import testImg1 from './assets/image2.jpg'
import video1 from './assets/flower.webm'

export default {
  title: "Blocks/Media Block",
  component: MediaBlock,
  argTypes: {
    overlayOpacity: {
      control: {
        type:'range',
        min: 0,
        max: 100
      }
    }
  }
} as Meta;

const Template: Story<MediaBlockProps> = (args) => <MediaBlock {...args} />;

export const mediaImage = Template.bind({});
mediaImage.args = {
  bgType: 'image',
  bgImg: {
    src: testImg1,
    alt: "in the rain"
  },
  overlayOpacity: 25
};

export const mediaVideo = Template.bind({});
mediaVideo.args = {
  bgType: 'video',
  bgVid: {
    poster: testImg1,
    video: [
      {
        src: video1,
        type: 'webm'
      }
    ]
  },
  overlayOpacity: 50
};

export const mediaImagePlay = Template.bind({});
mediaImagePlay.args = {
  bgType: 'image',
  bgImg: {
    src: testImg1,
    alt: "in the rain"
  },
  overlayOpacity: 25,
  youTubeVideo: {
    key: 'SUxD_hzWRWU',
    label: 'AMV'
  }
};
