import { Story, Meta } from '@storybook/react/types-6-0';
import GalleryBlock, { GalleryBlockProps } from '../../components/GalleryBlock'
import { GalleryDataDefault } from '../data/galleryBlockData'

export default {
    title: 'Components/Gallery Block',
    component: GalleryBlock,
} as Meta;

const Template: Story<GalleryBlockProps> = (args) => <GalleryBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = GalleryDataDefault;

// export const DarkBoxShadow = Template.bind({});
// DarkBoxShadow.args = {
//     ...cardData,
//     backShadow: "boxShadowDark",
// };
// DarkBoxShadow.parameters = {
//     backgrounds: { default: 'dark' },
// }
