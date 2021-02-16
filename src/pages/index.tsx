import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import { AiFillCheckCircle, AiOutlineLink } from "react-icons/ai";

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo';

const seo = {
  "title": "Home Page",
  "description": "description of home page",
  "canonical": "https://www.example.com",
  "openGraph": {
    "url": "https://www.example.com",
    "title": "Home Page",
    "description": "description of home page",
    "site_name": "Page Name",
    "images": [
      {
        "url": "https://www.example.ie/og-image-01.jpg",
        "width": 800,
        "height": 600,
        "alt": "Og Image Alt"
      },
      {
        "url": "https://www.example.ie/og-image-02.jpg",
        "width": 900,
        "height": 800,
        "alt": "Og Image Alt Second"
      },
      { "url": "https://www.example.ie/og-image-03.jpg" },
      { "url": "https://www.example.ie/og-image-04.jpg" }
    ]
  }
};

const Index = () => (
  <Container height="100vh">
    <NextSeo {...seo} />
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>typescript</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <Icon as={AiFillCheckCircle} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
          
            Chakra UI <Icon as={AiOutlineLink} />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <Icon as={AiFillCheckCircle} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <Icon as={AiOutlineLink} />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
