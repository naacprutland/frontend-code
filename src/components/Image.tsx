import { useMemo } from 'react'
import { ChakraProps, Image as ChakraImage } from '@chakra-ui/react'
import { Image as ImageApi } from '../interface/generalApi'
import { imageSrcSet, imgWidth } from '../lib/util'

interface ImageProps extends ChakraProps {
    image: ImageApi
    alt: string
    srcSetWidth: imgWidth
}

const Image = ({
    image,
    alt,
    srcSetWidth,
    ...props
}: ImageProps) => {
    const srcSet = useMemo(() => {
        return image ? imageSrcSet(image, srcSetWidth) : ''
    }, [image]);
    return (
        <>{(image && image?.url) ? (
            <ChakraImage
                src={image?.url}
                alt={alt}
                srcSet={srcSet}
                loading="lazy"
                objectFit='cover'
                objectPosition='center'
                h="100%"
                w="100%"
                {...props} />) : (<div></div>)
        }</>
    )
}

export default Image