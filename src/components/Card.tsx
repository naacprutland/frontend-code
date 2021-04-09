import { LinkBox, LinkOverlay, Box, Heading, AspectRatio, Text, Icon, Spacer } from "@chakra-ui/react"
import Image from 'next/image'
import NextLink from "next/link"
import { BiCaretRightCircle } from "react-icons/bi";

export interface CardProps {
  image: {
    src: string;
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

const Card = ({ image, title, copy, link, layout = 'column' }: CardProps) => {
  return (
    <LinkBox as="figure" display="flex" flexDirection={layout} borderWidth="1px" backgroundColor="gray.50">
      <AspectRatio ratio={4 / 3} flex={`1 1 ${rowArr.includes(layout) ? '30%' : '100%'}`}>
        <Image objectFit="cover" layout="fill" src={image.src} alt={image.alt}/>
      </AspectRatio>
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
          link.label && (
          <NextLink href={link.path} passHref>
            <LinkOverlay isExternal={link.isExternal} 
              display="flex"
              alignItems="center"
              mt="3" color="teal.400" fontWeight="bold">
              {link.label}<Icon ml="1" as={BiCaretRightCircle} />
            </LinkOverlay>
          </NextLink>
          )
        }
      </Box>
    </LinkBox>
  )
}

export default Card