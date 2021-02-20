import {
  Link as ChakraLink,
  Text,
  Code,
  List,
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
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'

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

export default Index

// import Head from 'next/head'
// /**
//  * Import helpers and GetStaticProps type
//  */
// import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
// import { GetStaticProps } from 'next'

// export default function Home({ file }) {
//   const data = file.data

//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           {/**
//            * Render the title from `home.json`
//            */}
//            Welcome to <a href="https://nextjs.org">Next.js!</a>
//           {data.title}
//         </h1>
//       </main>

//     </div>
//   )
// }

// /**
//  * Fetch data with getStaticProps based on 'preview' mode
//  */
export const getStaticProps: GetStaticProps = async function({
  preview,
  previewData,
 }) {
  if (preview) {
    console.log('preview', previewData);
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'src/data/home.json',
      parse: parseJson,
    })
  }
  console.log('ok', previewData)
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: '/data/home.json',
        data: (await import('../data/home.json')).default,
      },
    },
  }
 }