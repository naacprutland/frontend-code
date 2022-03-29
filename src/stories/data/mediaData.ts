import testImg1 from '../../../public/cupcakes.jpg'
import { MediaBlockProps } from '../../components/MediaBlock'


export const meidaImageData: MediaBlockProps = {
    heading: 'Keeping Heading Alive',
    textPosition: 'start',
    text: 'Panda Ipsum panda relaxing in the forest. Cute panda eat bamboo leaves. Red Panda. Female pandas only ovulate once each year. During that ovulation period, they are two or three million years ago. There are only fertile for two main types of the only ovulate once each year. During that ovulation.',
    mediaImage: {
        src: testImg1,
        alt: "in the rain"
    },
    setBackgroundImage: false
}

export const meidaBGImage: MediaBlockProps = {
    heading: 'Keeping Heading Alive',
    textPosition: 'start',
    text: 'Panda Ipsum panda relaxing in the forest. Cute panda eat bamboo leaves. Red Panda. Female pandas only ovulate once each year. During that ovulation period, they are two or three million years ago. There are only fertile for two main types of the only ovulate once each year. During that ovulation.',
    mediaImage: {
        src: testImg1,
        alt: "in the rain"
    },
    setBackgroundImage: true
}

export const mediaVideoData: MediaBlockProps = {
    ...meidaImageData,
    youTubeVideo: {
        key: 'SUxD_hzWRWU',
        label: 'AMV'
    }
};