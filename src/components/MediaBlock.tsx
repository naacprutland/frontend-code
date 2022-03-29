import {
  Box,
  AspectRatio,
  Heading,
  IconButton,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text
} from '@chakra-ui/react'
import { FaRegPlayCircle } from "react-icons/fa";
import YouTube, { Options } from "react-youtube";
import Image from 'next/image'
import Container from './Container';

export interface VideoType {
  src: string;
  type: string;
}

interface MediaImage {
  src: string | 'StaticImageData';
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

const setBGImg = (mediaImage: MediaImage) => ({
  ariaLabel: mediaImage.alt,
  role: 'img',
  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${mediaImage?.src}')`,
  backgroundPosition: "center",
  backgroundSize: "cover"
})

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
        {
        ...(setBackgroundImage ? setBGImg(mediaImage) : {})
        }
      >
        <Box className="gcol-12 gcol-md-8 gcol-lg-6 center"
          textAlign={textPosition}
          w="100%">
          {heading && (
            <Heading as={position > 0 ? 'h2' : 'h1'}
              color={setBackgroundImage ? "white" : "black"}
              marginBottom={["3", "8"]}
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
                <Image
                  src={mediaImage?.src || ''}
                  alt={mediaImage?.alt}
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
                {youTubeVideo && <Box position="absolute"
                  d="flex"
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
              marginTop={["3", "8"]}
              backgroundColor="#000000BF">
              <Text>{text}</Text>
            </Box>)}
        </Box>
      </Container>
      {
        youTubeVideo?.key && <Modal onClose={onClose} size="5xl" isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent
            sx={{
              "@media only screen and (orientation : landscape) and (min-width: calc(100vh * 1.8)) ": {
                maxWidth: "calc(100vh * 1.8)",
              }
            }}
            color="white"
            backgroundColor="blackAlpha.300">
            <ModalCloseButton />
            <ModalBody pl="12" pr="12">
              <AspectRatio bgColor="black" ratio={16 / 9}>
                <YouTube
                  videoId={youTubeVideo?.key || ''}
                  opts={opts}
                />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
      }

    </>
  )
}

export default MediaBlock