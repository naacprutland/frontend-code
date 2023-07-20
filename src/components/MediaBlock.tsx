import {
  Box,
  AspectRatio,
  Heading,
  IconButton,
  Icon,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { FaRegPlayCircle } from "react-icons/fa";
import YouTube, { Options } from "react-youtube";
import Container from './Container';
import { Image as ImageApi } from '../interface/generalApi'
import Image from './Image'
import MediaModal from './MediaModal'

export interface VideoType {
  src: string;
  type: string;
}

interface MediaImage {
  src: ImageApi;
  alt: string;
}
export interface MediaBlockProps {
  position?: number;
  heading?: string;
  text?: string;
  setBackgroundImage?: boolean;
  mediaImage: MediaImage;
  textPosition?: 'start' | 'center' | 'end';
  youTubeVideo?: {
    key: string;
    label: string;
  }
}

const opts: Options = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

const MediaBlock = ({
  setBackgroundImage = false,
  heading,
  textPosition = "start",
  text,
  position = 1,
  mediaImage,
  youTubeVideo
}: MediaBlockProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Container className="grid"
        py={[8, 12, 14]}
        position="relative"
      >
        {setBackgroundImage && (
          <Box position="absolute"
            backgroundColor="rgba(0, 0, 0,0.4);"
            top="0"
            bottom="0"
            left="0"
            right="0"
            sx={{
              img: {
                mixBlendMode: "multiply"
              }
            }}
            zIndex="-1">
            <Image
              image={mediaImage?.src}
              alt={mediaImage?.alt}
              srcSetWidth={{
                min: 200,
                max: 800
              }}
            />
          </Box>)}
        <Box className="gcol-12 gcol-md-8 gcol-lg-6 center"
          textAlign={textPosition}
          w="100%">
          {heading && (
            <Heading as={position > 0 ? 'h2' : 'h1'}
              color={setBackgroundImage ? "white" : "black"}
              marginBottom={["6", "8", "12"]}
              lineHeight="1"
              fontSize={['4xl', '5xl', '6xl']}>
              {heading}
            </Heading>)
          }
          <AspectRatio
            layerStyle="boxShadowLight"
            borderRadius="6px"
            overflow="hidden"
            ratio={16 / 9}>
            {(mediaImage?.src) && (
              <Box >
                <Box width="100%">
                  <Image
                    image={mediaImage?.src}
                    alt={mediaImage?.alt}
                    srcSetWidth={{
                      min: 200,
                      max: 800
                    }}
                  />
                </Box>

                {youTubeVideo && <Box position="absolute"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgColor={`rgba(0, 0, 0, ${20 / 100})`}
                  h="100%" w="100%" zIndex="1">
                  <IconButton
                    onClick={onOpen}
                    isRound
                    variant="ghost"
                    fontSize="9xl"
                    h="16"
                    w="16"
                    padding="1"
                    overflow="hidden"
                    color="white"
                    colorScheme="whiteAlpha"
                    aria-label="Play Video"
                    icon={<Icon h="100%" w="100%" as={FaRegPlayCircle} />} />
                </Box>}
              </Box>
            )}

          </AspectRatio>
          {text && (
            <Box p="2"
              layerStyle="boxShadowLight"
              borderRadius="6px"
              overflow="hidden"
              color="white"
              marginTop={["6", "8"]}
              backgroundColor="#000000BF">
              <Text>{text}</Text>
            </Box>)}
        </Box>
      </Container >
      {
        youTubeVideo?.key && <MediaModal onClose={onClose} isOpen={isOpen} >
          <AspectRatio
            w="100%"
            h="100%"
            bgColor="black" ratio={16 / 9}>
            <YouTube
              videoId={youTubeVideo?.key || ''}
              opts={opts}
            />
          </AspectRatio>
        </MediaModal >
      }

    </>
  )
}

export default MediaBlock