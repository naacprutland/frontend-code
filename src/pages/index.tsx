import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import { AiFillCheckCircle, AiOutlineLink } from "react-icons/ai"
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'


const Index = ({data ={}}) => (
  <Container height="100vh">
    <NextSeo {...data.seo} />
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code>  <Code>chakra-ui</Code> {' '}
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

// /**
//  * Fetch data with getStaticProps based on 'preview' mode
//  */
export const getStaticProps: GetStaticProps = async function({
  preview = false,
  previewData,
 }) {
  if (preview) {

    const gitHubProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: '/src/data/home.json',
      parse: parseJson,
    })

    return {
      props: {
        preview: true,
        error: gitHubProps?.props.error,
        ...gitHubProps?.props?.file
      }
    }
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      fileRelativePath: '/src/data/home.json',
      data: (await import('../data/home.json')).default,
    },
  }
 }

export default Index
