import { 
  Heading,
  Box,
  Grid,
  GridItem,
  Button,
  Wrap,
  WrapItem 
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { MediaImage } from '../interface/media' 
import Container from './Container'


export interface HeroProps {
  title: string;
  theme: 'light' | 'dark';
  imgOverlayPer?: number;
  backgroundImage: {
    src: MediaImage;
    alt: string;
  };
  horPos: 'left' | 'right' | 'center';
  verPos: 'top' | 'middle' | 'bottom';
  position?: number;
  textPos?: 'start' | 'center' | 'end';
  cta?: CTABtn[]
}

export interface CTABtn {
  label: string;
  link: string;
  external: boolean;
}

enum AlignItems {
  start = 'flex-start',
  center = 'center',
  end = 'flex-end'
}

enum VerPos {
  top = 1,
  middle = 2,
  bottom = 3
}

const posPropMd = { 
  left: {
    col: 1,
    span: 10,
  },
  right: {
    col: 3,
    span: 10
  },
  center: {
    col: 2,
    span: 10
  }
}

const posPropLG = { 
  left: {
    col: 1,
    span: 8,
  },
  right: {
    col: 5,
    span: 8
  },
  center: {
    col: 3,
    span: 8
  }
}

const posProMobile = {
  col: 1,
  span: 12
}

const HeroBlock = ({
  title,
  theme,
  textPos = "start",
  cta,
  backgroundImage,
  horPos = 'center',
  verPos = 'middle',
  position = 0 
}: HeroProps) => {

  return (
    <Box position="relative"
      maxW="100%"
      h="100vh">
      <Box position="absolute" 
          bg="black" 
          w="100%"
          h="100%" 
          top="0"              
          sx={{
            img: {
              objectFit: 'cover'
            }
          }}
          >
          {backgroundImage?.src?.url && <Image
            src={backgroundImage?.src?.url}
            alt={backgroundImage?.alt}
            layout='fill' 
            />}
      </Box>
      <Container py={['32px', '48px', '56px']} h="100%">
        <Grid
          h="100%"
          templateRows="repeat(3, 1fr)"
          gap={[6,6,8]}
          templateColumns="repeat(12, 1fr)">
          {title && <GridItem rowStart={VerPos[verPos]}
              alignSelf="center"
              textAlign={textPos}
              d="flex"
              flexDirection="column"
              alignItems={AlignItems[textPos]}
              borderRadius="6px"
              bgColor="rgba(0, 0, 0, 0.75)"
              py={{ base: '4', lg: '8' }}
              px={{ base: '4', lg: '10' }}
              color={theme === 'dark' ? 'white' : 'black'}
              colStart={[posProMobile?.col, posPropMd[horPos]?.col, posPropLG[horPos]?.col]}
              colSpan={[posProMobile?.span, posPropMd[horPos]?.span, posPropLG[horPos]?.span]}
              zIndex="1" >
              {title && (
                <Heading as={position > 0 ? 'h2' : 'h1'}
                  fontSize={['4xl', '5xl', '6xl']}>
                  {title}
                </Heading>)
              }
              {(cta?.length > 0) && (
                  <Wrap justify={AlignItems[textPos]} spacing={2} paddingTop={2}>
                    {cta && cta.map(({label, link, external}, i) => (
                      <WrapItem key={label + i}>
                          <Link href={link} passHref>
                            <Button as="a"
                                size="md"
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                cursor="pointer"
                                colorScheme="purple">
                              {label}
                            </Button>     
                          </Link>
                      </WrapItem>)).slice(0, 4)}
                  </Wrap>)}
            </GridItem>}
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroBlock