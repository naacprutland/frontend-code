import { Heading, Box, AspectRatio, Grid, GridItem,
  useBreakpointValue, Container, Button, Wrap, WrapItem  } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export interface HeroProps {
  title: string;
  detail?: string;
  theme: 'light' | 'dark';
  imgOverlayPer?: number;
  backgroundImage: {
    src: string;
    alt: string;
  };
  horPos: 'left' | 'right' | 'center';
  verPos: 'top' | 'middle' | 'bottom';
  pagePos?: number;
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

enum Theme {
  dark = -1,
  light = 1
}

const posPropMd = { 
  left: {
    col: 1,
    span: 8,
  },
  right: {
    col: 4,
    span: 8
  },
  center: {
    col: 3,
    span: 8
  }
}

const posPropLG = { 
  left: {
    col: 1,
    span: 6,
  },
  right: {
    col: 6,
    span: 6
  },
  center: {
    col: 4,
    span: 6
  }
}

const posProMobile = {
  col: 1,
  span: 12
}

const HeroBlock = ({
  title, detail, theme, imgOverlayPer = 0,
  textPos = "start", cta,
  backgroundImage, horPos = 'center', verPos = 'middle', pagePos = 0 }: HeroProps) => {
  const variant = useBreakpointValue({ base: posProMobile, md: posPropMd[horPos], lg: posPropLG[horPos] })
  const ratio = useBreakpointValue({ base: 3 / 4, sm: 7 / 4, lg: 7 / 3 })
  const decOverlay = imgOverlayPer / 100;

  return (
    <AspectRatio w="100%" maxW="container.xl" m="auto" ratio={ratio} >
      <Box>
        <Box position="absolute" bg="black" w="100%" h="100%" top="0"
            zIndex="-1"
            filter={`brightness(${theme && imgOverlayPer ? 1 + (Theme[theme] * decOverlay) : 1})`}
            >
            <Image
                layout="fill"
                sizes="(min-width: 48rem) 1080px ,(min-width: 30rem) 640px, 375px"
                  objectFit="cover" objectPosition="center" {...backgroundImage} />
        </Box>
        <Container h="100%" paddingBottom="4" paddingTop="4" maxW="100%">
          <Grid
            h="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(12, 1fr)">
            {(title || detail) && <GridItem rowStart={VerPos[verPos]}
                alignSelf="center"
                textAlign={textPos}
                d="flex"
                flexDirection="column"
                alignItems={AlignItems[textPos]}
                color={theme === 'dark' ? 'white' : 'black'}
                colStart={variant?.col}
                colSpan={variant?.span}>
                {title && <Heading as={pagePos > 0 ? 'h2' : 'h1'}>
                  {title}
                </Heading>
                }
                {detail && <Box maxW="lg">{detail}</Box>}
                {(cta?.length > 0) && <Wrap justify={AlignItems[textPos]} spacing={2} py={2}>
                    {cta && cta.map(({label, link, external}, i) => {
                      if ( external) {
                        return <WrapItem key={label + i}>
                            <Button as="a"
                                
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                cursor="pointer"
                                colorScheme="purple" size="md">
                              {label}
                              </Button>
                            </WrapItem>
                      }
                      return (<WrapItem key={label + i}><Link href={link}>
                            <Button as="a"
                              href=""
                              cursor="pointer"
                              colorScheme="purple" size="md">{label}</Button>     
                        </Link></WrapItem>)
                      }).slice(0, 4)}
                  </Wrap>}
              </GridItem>}
          </Grid>
        </Container>
      </Box>
    </AspectRatio>
  )
}

export default HeroBlock