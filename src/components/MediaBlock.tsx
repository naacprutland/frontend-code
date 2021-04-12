import { Box, AspectRatio, IconButton, Icon,
  Container, useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton } from '@chakra-ui/react'
import Image from 'next/image'
import { BiPlay } from "react-icons/bi";
import YouTube, { Options } from "react-youtube";

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
    bgType,
    bgImg,
    bgVid,
    overlayOpacity = 0,
    youTubeVideo
  }: MediaBlockProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
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
            <Box position="absolute" 
                d="flex"
                justifyContent="center"
                alignItems="center"
                  bgColor={`rgba(0, 0, 0, ${overlayOpacity / 100})`} 
                  h="100%" w="100%" zIndex="1">
              {youTubeVideo && <IconButton
                onClick={onOpen}
                isRound
                variant="outline"
                fontSize="9xl"
                h="32"
                w="32" 
                overflow="hidden"
                colorScheme="whiteAlpha"
                aria-label="Play Video" 
                icon={<Icon paddingLeft="4" as={BiPlay} />} />
              
              }
            </Box>
          </Box>
        </AspectRatio>
      </Container>
      {youTubeVideo && <Modal onClose={onClose} size="full" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{youTubeVideo.label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio bgColor="black" ratio={16/9}>
              <YouTube
                videoId={youTubeVideo.key}
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