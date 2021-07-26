import { LinkBox, LinkOverlay, Box, Heading, AspectRatio, Text, Icon, Spacer } from "@chakra-ui/react"
import NextLink from "next/link"
import { BiCaretRightCircle } from "react-icons/bi";
import Picture from "./Picture";
import { MediaImage } from '../interface/media'

export interface CardProps {
  image: {
    src: MediaImage;
    alt: string;
  },
  title: string;
  copy?: string;
  link: {
    label?: string;
    path: string;
    isExternal: boolean;
  },
  layout?: 'column' | 'row' | 'row-reverse'
}

const rowArr = ['row', 'row-reverse']

const imgSizes: { size: string, bp: number}[] = [
  { size: 'medium', bp: 768 },
  { size: 'small', bp: 480 },
  { size: 'xsmall', bp: 0 }
]

const Card = ({ image, title, copy, link, layout = 'column' }: CardProps) => {
  return (
    <LinkBox as="figure" display="flex" flexDirection={layout} borderWidth="1px" backgroundColor="gray.50">
      {
        image && (
          <AspectRatio ratio={4 / 3} flex={`1 1 ${rowArr.includes(layout) ? '30%' : '100%'}`}>
            <Picture src={image?.src?.url} alt={image?.alt}
                sources={imgSizes.map(v => {
                  const media = v.bp !== 0 ? `(min-width: ${v.bp}px)` : null;
                  return {
                    media,
                    srcset: image?.src.formats[v.size]?.url
                  }
                })} />
          </AspectRatio>)
      }
      <Box as="figcaption" p="2" 
        pl={layout === 'row' && 6 } 
        pr={layout === 'row-reverse' && 6 } 
        display="flex"  
        flex={`1 1 ${rowArr.includes(layout) ? '70%' : '100%'}`}
        flexDirection="column">
        <Heading size="md" >        
          {title}
        </Heading>
        {
          copy ? <Text flex="1 1" mt="3">
            {copy}
          </Text> : <Spacer flex="1 1" />
        }
        {
          (link?.label && link?.path) && (
          <NextLink href={link?.path} passHref>
            <LinkOverlay isExternal={link?.isExternal} 
              display="flex"
              alignItems="center"
              mt="3" color="teal.700" fontWeight="bold">
              {link?.label}<Icon ml="1" as={BiCaretRightCircle} />
            </LinkOverlay>
          </NextLink>
          )
        }
      </Box>
    </LinkBox>
  )
}

export default Card