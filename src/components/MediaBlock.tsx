import { Box, AspectRatio,
  Container } from '@chakra-ui/react'
import Image from 'next/image'

export interface VideoType {
  src: string;
  type: string;
}

export interface MediaBlockProps {
  bgType: 'video' | 'image';
  bgImg?: {
    src: string;
    alt: string;
  },
  bgVid?: {
    video: VideoType[];
    poster: string;
  },
  overlayOpacity: number;
  youTubeModel?: boolean;
  youTubeVideo?: {
    key: string;
    label: string;
  }
}

const MediaBlock = ({
    bgType,
    bgImg,
    bgVid,
    overlayOpacity = 0
  }: MediaBlockProps) => {

  return (
    <Container maxW="container.lg">
      <AspectRatio bgColor="black" ratio={16/9}>
        <Box >
          {bgType === 'image' && (
            <Image layout="fill"
              objectFit="cover"
              objectPosition="center" {...bgImg} />
          )}
          {bgType === 'video' && (
            <Box as="video" 
              objectFit="cover"
              objectPosition="center"
              height="100%"
              width="100%"
              autoPlay
              playsInline
              loop muted poster={bgVid?.poster}>
              {(bgVid.video || []).map((val, i) => <source 
                  key={val.type + i} src={val.src}
                    type={`video/${val.type}`} />)
              }
              {"Sorry, your browser doesn't support embedded videos."}
            </Box>
          )}
          <Box position="absolute" bgColor={`rgba(0, 0, 0, ${overlayOpacity / 100})`} h="100%" w="100%" zIndex="1"></Box>
        </Box>
      </AspectRatio>
    </Container>
  )
}

export default MediaBlock