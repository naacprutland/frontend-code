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
import Container from './Container'
import { AlignItems } from '../interface/enums'
import { Image as ImageApi } from '../interface/generalApi'


export interface HeroProps {
  title: string;
  size: 'full' | 'contained' | string;
  backgroundImage: {
    src: ImageApi;
    alt: string;
  };
  horPos: 'left' | 'right' | 'center' | string;
  verPos: 'top' | 'middle' | 'bottom' | string;
  position?: number;
  textPos?: 'start' | 'center' | 'end' | string;
  cta?: CTABtn[]
}

export interface CTABtn {
  label: string;
  link: string;
  external: boolean;
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

const containedSize = {
  base: 'calc(100vw * 3/2)',
  sm: '562px',
  lg: 'calc(100vw * 3/7)'
}

const HeroBlock = ({
  title,
  textPos = "start",
  cta,
  backgroundImage,
  horPos = 'center',
  verPos = 'middle',
  position = 0,
  size = "full"
}: HeroProps) => (
  <Box position="relative"
    maxW="100%"
    h={size === "full" ? "100vh" : containedSize}>

    <Box position="absolute"
      bg="black"
      w="100%"
      h="100%"
      top="0"
    >
      {backgroundImage?.src?.url && <Image
        src={backgroundImage?.src?.url}
        alt={backgroundImage?.alt}
        objectFit="cover"
        objectPosition="center"
        layout='fill'
      />}
    </Box>
    <Container py={[8, 12, 14]} h="100%">
      <Grid
        h="100%"
        templateRows="repeat(3, 1fr)"
        gap={[6, 6, 8]}
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
          color='white'
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
              {cta && cta.map(({ label, link, external }, i) => (
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

export default HeroBlock