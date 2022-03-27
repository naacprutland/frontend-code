import { 
  VStack,
  HStack,
  LinkBox,
  LinkOverlay,
  Heading,
  AspectRatio,
  Text, 
  Button,
  Badge,
  Divider
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import Image from 'next/image'
import { MediaImage } from '../interface/media'
import Moment from 'react-moment'

export interface CardProps {
  image: {
    src: MediaImage;
    alt: string;
  },
  title?: string;
  copy?: string;
  link?: {
    label?: string;
    path: string;
    isExternal: boolean;
  },
  badge?: {
    label: string;
    colorScheme: 'prime1'| 'prime2' | 'secondary1' | 'secondary2' | 'secondary3' | 'secondary4' | 'secondary5' | 'secondary6'
  },
  date?: Date | string;
  backShadow: 'boxShadowLight' | 'boxShadowDark'
}

const Card = ({ 
  image,
  title,
  copy,
  link,
  backShadow="boxShadowLight",
  badge,
  date
}: CardProps) => {
  return (
    image && (<LinkBox as="figure" >
      {
        image && (
          <AspectRatio ratio={7 / 4}
            borderRadius="6px"
            layerStyle={backShadow}
            overflow="hidden"
             >
            <div>
              <Image
                src={image?.src?.url}
                alt={image?.alt}
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
            </div>
          </AspectRatio>)
      }
      {
        (title || copy || link) && (
          <VStack as="figcaption"
            alignItems="flex-start"
            spacing="3"
            borderRadius="6px"
            backgroundColor="white"
            layerStyle={backShadow}
            marginTop="4"
            py="6"
            px="4">
            <VStack spacing="2"
              alignItems="flex-start">
              {title && <Heading as="h3" 
                      lineHeight="1"
                      size="lg" >        
                {title}
                </Heading>
              }
              {
                (badge || date) && (
                  <HStack spacing="2">
                    {
                      badge && (
                        <Badge variant="solid" colorScheme={badge.colorScheme}>
                          {badge.label}
                        </Badge>
                      )
                    }
                    {(badge && date) && <Divider
                        borderColor="black"
                        orientation='vertical'
                        height="16px" />}
                    {date && <Text fontWeight="semibold">
                        <Moment format="MMMM DD, YYYY" date={date} />
                      </Text>}
                  </HStack>
                )
              }
              {
                copy && <Text mt="3">
                  {copy.slice(0, 100)}{copy.length > 100 && '...'}
                </Text>
              }
            </VStack>
            {
              (link?.label && link?.path) && (
              <NextLink href={link?.path} passHref>
                <LinkOverlay isExternal={link?.isExternal} >
                  <Button as="span" size="md" 
                    rightIcon={<ChevronRightIcon />}
                    colorScheme="secondary4">
                    {link?.label}
                  </Button>
                </LinkOverlay>
              </NextLink>
              )
            }
          </VStack>
        )
      }
    </LinkBox>)
  )
}

export default Card