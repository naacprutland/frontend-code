import { 
  Box,
  List,
  ListItem,
  Icon,
  Divider,
  HStack,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react'
import Container from './Container';
import { Link as LinkType, SocialLink } from '../interface/general'
import { v4 as uuidv4 } from 'uuid'
import NextLink from "next/link"
import dynamic from 'next/dynamic'
import { SocialIcons } from '../interface/enums';


export interface FooterProps {
  links: LinkType[];
  socialLinks: SocialLink[];
  subText: string;
}

const list = (arr: LinkType[]): Array<LinkType[]> => {
  const columns = arr.length / 5;
  const values = []
  for (let i=0; i < columns; i++) {
    values.push(arr.slice((i * 5), 5 * (i + 1)))
  }
  return values
}

const Footer = ({
    links=[],
    socialLinks=[],
    subText
  }: FooterProps) => {
    const AdjustedList = list(links)

    return (
      <Box as="footer"
        bg="secondary7.500"
        py={["offset.sm", "offset.md", "offset.lg"]}
        color="white" >
        <Container >
          <Box display={['block', 'flex']} justifyContent="space-between">
            {AdjustedList.map(linkObj => (
              <List key={uuidv4()} textAlign="center" my={0}>
                {linkObj.map(val => (
                  <ListItem key={uuidv4()}>
                    <NextLink href={val.path} passHref>
                      <ChakraLink fontSize="md" isExternal={val.external}>
                        {val.label}
                      </ChakraLink>
                    </NextLink>
                  </ListItem>
                ))}
              </List>))
            }
          </Box>
          
          <HStack 
            spacing="4"
            mx="auto"
            justifyContent="center"
            py="2">
            {socialLinks.map(val => {
              const DynamicIcon = dynamic(() =>
                import('react-icons/fa').then(
                  (mod) => mod[SocialIcons[val.icon]])
              )
              return (
                <ChakraLink key={uuidv4()}
                  lineHeight="0.5"
                  href={val.path} 
                  isExternal={true}>
                  <Icon as={DynamicIcon} />
                </ChakraLink>)
            })}
          </HStack>
          {
            subText && (
              <>
                <Divider />
                <Box>
                  <Text textAlign="center">{subText}</Text>
                </Box>
              </>
            )
          }

        </Container>
      </Box>
  )
}

export default Footer