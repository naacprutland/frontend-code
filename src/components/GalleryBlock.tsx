import { useState } from 'react'
import {
    Heading,
    Box,
    SimpleGrid,
    AspectRatio,
    useDisclosure,
} from '@chakra-ui/react'
import Container from './Container'
import { AlignItemsOptions } from '../interface/enums'
import { Image as ImageApi } from '../interface/generalApi'
import { StyleType } from "../interface/general"
import { Styling } from "../interface/enums"
import Image from './Image'
import MediaModal from './MediaModal'

export interface GalleryBlockProps {
    position?: number
    heading?: string
    headingPosition?: AlignItemsOptions
    images: {
        id: number
        src: ImageApi
        alt: string
    }[]
    style?: StyleType
}

const GalleryBlock = ({
    position = 1,
    heading,
    headingPosition = 'start',
    style = 'none',
    images = []
}: GalleryBlockProps) => {
    const [currentImg, setCurrentImg] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onShowImg = (img) => {
        setCurrentImg(img)
        onOpen();
    }
    return (
        <>
            <Box as="section"
                w="100%"
                layerStyle={Styling[style]}>
                <Container className="grid"
                    py={[8, 12, 14]}>
                    {heading && <Heading as={position > 0 ? 'h2' : 'h1'}
                        className="gcol-12 gcol-lg-8 center"
                        textAlign={headingPosition}
                        fontSize={['2xl', '3xl', '4xl']}>
                        {heading}
                    </Heading>}
                    <SimpleGrid className="gcol-12 gcol-lg-8 center"
                        columns={[2, 3, 4]} spacing={[6, 6, 8]} >
                        {images.map((img) => (
                            <AspectRatio as="button" key={img.id}
                                onClick={() => onShowImg(img)}
                                ratio={1}>
                                <Image
                                    image={img.src}
                                    alt={img.alt}
                                    srcSetWidth={{
                                        min: 70,
                                        max: 300
                                    }} />
                            </AspectRatio>
                        ))}
                    </SimpleGrid>

                </Container>
            </Box>
            <MediaModal onClose={onClose} isOpen={isOpen} >
                <Image
                    image={currentImg?.src}
                    alt={currentImg?.alt}
                    w="auto"
                    height="initial"
                    maxH="100%"
                    srcSetWidth={{
                        min: 500,
                    }} />
            </MediaModal >
        </>
    )
}

export default GalleryBlock