import { Story, Meta } from '@storybook/react/types-6-0';

import MediaBlock, { MediaBlockProps } from '../../components/MediaBlock'
import { meidaImageData, mediaVideoData, meidaBGImage } from '../data/mediaData'

export default {
    title: "Components/Media Block",
    component: MediaBlock,
    argTypes: {
        textPosition: {
            options: ['start', 'center', 'end'],
            control: {
                type: 'radio',
            }
        }
    }
} as Meta;

const Template: Story<MediaBlockProps> = (args) => <MediaBlock {...args} />;

export const MediaImage = Template.bind({});
MediaImage.args = meidaImageData;

export const MediaYouTubePlay = Template.bind({});
MediaYouTubePlay.args = mediaVideoData;

export const BackgroundImage = Template.bind({});
BackgroundImage.args = meidaBGImage;
